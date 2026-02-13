import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/data/projects.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Split into lines
const lines = content.split('\n');
const newLines = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Keep section headers (category and sub-category headers)
  if (line.match(/^\s*\/\/\s+(Creative|Research|Strategy)$/) || 
      line.match(/^\s*\/\/\s+(Creative|Research|Strategy):\s+/)) {
    newLines.push(line);
    i++;
    continue;
  }
  
  // Check if this line starts a project object
  if (line.trim() === '{' && i > 0) {
    // Skip backwards over ALL comments (except section headers) before this project
    let commentStart = i - 1;
    while (commentStart >= 0) {
      const prevLine = lines[commentStart].trim();
      // Stop if we hit a section header or non-comment line
      if (!prevLine.startsWith('//')) {
        break;
      }
      if (prevLine.match(/^\s*\/\/\s+(Creative|Research|Strategy)$/) || 
          prevLine.match(/^\s*\/\/\s+(Creative|Research|Strategy):\s+/)) {
        break;
      }
      commentStart--;
    }
    
    // Look ahead to find the slug, category, subCategory, and title
    let slug = null;
    let title = null;
    let category = null;
    let subCategory = null;
    let j = i;
    let braceCount = 0;
    
    while (j < lines.length && (braceCount > 0 || j === i)) {
      const currentLine = lines[j];
      
      if (currentLine.trim() === '{') braceCount++;
      if (currentLine.trim() === '}') braceCount--;
      
      // Extract slug
      const slugMatch = currentLine.match(/slug:\s*['"]([^'"]+)['"]/);
      if (slugMatch && !slug) slug = slugMatch[1];
      
      // Extract title
      const titleMatch = currentLine.match(/title:\s*['"]([^'"]+)['"]/);
      if (titleMatch && !title) title = titleMatch[1];
      
      // Extract category (first one)
      const categoryMatch = currentLine.match(/category:\s*\[([^\]]+)\]/);
      if (categoryMatch && !category) {
        const cats = categoryMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
        category = cats[0] || null;
      }
      
      // Extract subCategory (first one)
      const subCategoryMatch = currentLine.match(/subCategory:\s*\[([^\]]+)\]/);
      if (subCategoryMatch && !subCategory) {
        const subCats = subCategoryMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
        subCategory = subCats[0] || null;
      }
      
      if (braceCount === 0 && slug && title) break;
      j++;
    }
    
    // Add the new format comment
    if (slug && title && category) {
      const comment = `  // ${category} / ${subCategory || 'Uncategorized'} / ${title}`;
      newLines.push(comment);
    }
    
    newLines.push(line);
    i++;
    continue;
  }
  
  // Skip all comment lines that aren't section headers
  // (they'll be replaced by the new format comments)
  if (line.trim().startsWith('//')) {
    const trimmed = line.trim();
    // Only keep section headers
    if (!trimmed.match(/^\s*\/\/\s+(Creative|Research|Strategy)$/) && 
        !trimmed.match(/^\s*\/\/\s+(Creative|Research|Strategy):\s+/)) {
      // Skip this comment line
      i++;
      continue;
    }
  }
  
  // Keep all other lines as-is
  newLines.push(line);
  i++;
}

const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('Fixed project comments.');
