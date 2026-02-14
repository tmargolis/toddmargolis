/**
 * Optimize PNGs with alpha using pngquant (lossy compression).
 */
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import { statSync } from 'fs';
import { join } from 'path';

const IMAGES_DIR = join(import.meta.dirname, '../public/images');
const FILES = ['DayInTheLife.png', 'erl.png'];

async function main() {
  const paths = FILES.map((f) => join(IMAGES_DIR, f));

  for (const path of paths) {
    const before = statSync(path).size;
    await imagemin([path], {
      destination: IMAGES_DIR,
      plugins: [
        imageminPngquant({
          quality: [0.65, 0.8],
          strip: true,
        }),
      ],
    });
    const after = statSync(path).size;
    const name = path.split('/').pop()!;
    const saved = ((before - after) / 1024).toFixed(1);
    console.log(`${name}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (saved ${saved}KB)`);
  }
}

main().catch(console.error);
