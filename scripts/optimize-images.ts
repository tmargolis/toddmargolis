/**
 * Optimize images over 500KB: resize to max 1920px width, compress.
 * JPEG: quality 82, mozjpeg. PNG: compression level 9, or convert to JPEG if no alpha. No WebP.
 */
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, renameSync } from 'fs';
import { join } from 'path';

const IMAGES_DIR = join(import.meta.dirname, '../public/images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const MIN_SIZE_KB = 500;

function getLargeImages(dir: string): string[] {
  return readdirSync(dir)
    .filter((name) => /\.(jpg|jpeg|png)$/i.test(name))
    .map((name) => join(dir, name))
    .filter((full) => statSync(full).size > MIN_SIZE_KB * 1024);
}

async function optimize(path: string): Promise<{ before: number; after: number; converted?: string }> {
  const before = statSync(path).size;
  const ext = path.toLowerCase().slice(path.lastIndexOf('.'));
  const tempPath = path + '.opt-tmp';

  const pipeline = sharp(path).resize(MAX_WIDTH, null, { withoutEnlargement: true });

  if (ext === '.png') {
    const meta = await sharp(path).metadata();
    if (meta.hasAlpha) {
      // PNG with alpha: recompressing often increases size; skip
      return { before, after: before };
    } else {
      const jpegPath = path.replace(/\.png$/i, '.jpg');
      await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(jpegPath + '.opt-tmp');
      unlinkSync(path);
      renameSync(jpegPath + '.opt-tmp', jpegPath);
      return { before, after: statSync(jpegPath).size, converted: jpegPath };
    }
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tempPath);
  }

  unlinkSync(path);
  renameSync(tempPath, path);
  const after = statSync(path).size;
  return { before, after };
}

async function main() {
  const files = getLargeImages(IMAGES_DIR);
  console.log(`Optimizing ${files.length} images over ${MIN_SIZE_KB}KB...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  const converted: { from: string; to: string }[] = [];

  for (const f of files) {
    try {
      const result = await optimize(f);
      const { before, after, converted: conv } = result;
      const name = f.split('/').pop()!;
      totalBefore += before;
      totalAfter += after;
      if (before === after && !conv) {
        console.log(`${name}: ${(before / 1024).toFixed(0)}KB (skipped, has alpha)`);
      } else {
        const saved = ((before - after) / 1024).toFixed(1);
        console.log(`${name}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (saved ${saved}KB)${conv ? ' [PNG→JPEG]' : ''}`);
      }
      if (conv) converted.push({ from: name, to: conv.split('/').pop()! });
    } catch (err) {
      console.error(`Error: ${f}`, err);
    }
  }

  if (converted.length) {
    console.log('\nUpdate projects.ts: replace', converted.map((c) => `${c.from} → ${c.to}`).join(', '));
  }

  const totalSaved = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (saved ${totalSaved}MB)`);
}

main();
