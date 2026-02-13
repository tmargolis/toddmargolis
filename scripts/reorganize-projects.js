import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/data/projects.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Extract everything before the projects array
const beforeProjects = content.substring(0, content.indexOf('export const projects: Project[] = ['));

// Extract the projects array content
const projectsMatch = content.match(/export const projects: Project\[\] = \[([\s\S]*)\];/);
if (!projectsMatch) {
  throw new Error('Could not find projects array');
}

const projectsText = projectsMatch[1];

// Parse projects more carefully - split by "},\n" pattern but handle nested objects
const projectBlocks = [];
let currentBlock = '';
let braceCount = 0;
let inString = false;
let stringChar = '';
let i = 0;

// Skip leading whitespace
while (i < projectsText.length && /[\s\n]/.test(projectsText[i])) {
  i++;
}

while (i < projectsText.length) {
  const char = projectsText[i];
  const prevChar = i > 0 ? projectsText[i - 1] : '';
  const nextChar = i < projectsText.length - 1 ? projectsText[i + 1] : '';
  
  // Track string state
  if ((char === '"' || char === "'") && prevChar !== '\\') {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
      stringChar = '';
    }
  }
  
  currentBlock += char;
  
  if (!inString && char === '{') {
    braceCount++;
  } else if (!inString && char === '}') {
    braceCount--;
    if (braceCount === 0) {
      // We've closed a project object
      // Look ahead for comma and any following comments
      let j = i + 1;
      while (j < projectsText.length && /[\s\n]/.test(projectsText[j])) {
        currentBlock += projectsText[j];
        j++;
      }
      
      if (j < projectsText.length && projectsText[j] === ',') {
        currentBlock += ',';
        j++;
        
        // Capture any comment lines before next object
        while (j < projectsText.length) {
          const peekAhead = projectsText.substring(j, Math.min(j + 2, projectsText.length));
          if (peekAhead === '//') {
            // Capture comment line
            while (j < projectsText.length && projectsText[j] !== '\n') {
              currentBlock += projectsText[j];
              j++;
            }
            if (j < projectsText.length) {
              currentBlock += '\n';
              j++;
            }
          } else if (/[\s\n]/.test(projectsText[j])) {
            currentBlock += projectsText[j];
            j++;
          } else {
            break;
          }
        }
      }
      
      // Extract category and subCategory for sorting
      const slugMatch = currentBlock.match(/slug:\s*['"]([^'"]+)['"]/);
      const categoryMatch = currentBlock.match(/category:\s*\[([^\]]+)\]/);
      const subCategoryMatch = currentBlock.match(/subCategory:\s*\[([^\]]+)\]/);
      
      if (slugMatch) {
        const category = categoryMatch 
          ? categoryMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''))[0]
          : null;
        const subCategory = subCategoryMatch
          ? subCategoryMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''))[0]
          : null;
        
        projectBlocks.push({
          text: currentBlock.trim(),
          slug: slugMatch[1],
          category,
          subCategory
        });
      }
      
      currentBlock = '';
      i = j;
      continue;
    }
  }
  
  i++;
}

// Define category and sub-category order
const categoryOrder = ['Creative', 'Research', 'Strategy'];
const subCategoryOrder = {
  'Creative': ['Tangible Artifacts', 'Immersive Installations', 'Augmented Interventions', 'Performative Systems'],
  'Research': ['Display & Interaction Systems', 'Collaborative Environments', 'Publications & Theory', 'Pedagogy & Labs'],
  'Strategy': ['R&D Leadership', 'Academic Practice', 'Cultural Stewardship']
};

// Group projects
const grouped = {};
for (const block of projectBlocks) {
  if (!block.category) {
    console.warn(`Project ${block.slug} has no category, skipping`);
    continue;
  }
  
  if (!grouped[block.category]) {
    grouped[block.category] = {};
  }
  
  const subCat = block.subCategory || 'Uncategorized';
  if (!grouped[block.category][subCat]) {
    grouped[block.category][subCat] = [];
  }
  
  grouped[block.category][subCat].push(block);
}

// Build the reorganized projects array
let reorganizedProjects = 'export const projects: Project[] = [\n';

for (const category of categoryOrder) {
  if (!grouped[category]) continue;
  
  reorganizedProjects += `  // ${category}\n`;
  
  const subCats = subCategoryOrder[category] || [];
  for (const subCat of subCats) {
    if (!grouped[category][subCat] || grouped[category][subCat].length === 0) continue;
    
    reorganizedProjects += `  // ${category}: ${subCat}\n`;
    for (let idx = 0; idx < grouped[category][subCat].length; idx++) {
      const block = grouped[category][subCat][idx];
      const isLast = idx === grouped[category][subCat].length - 1;
      
      // Preserve the original formatting but ensure proper indentation
      const lines = block.text.split('\n');
      const formatted = lines
        .map((line) => {
          const trimmed = line.trim();
          if (trimmed === '') return '';
          // Ensure proper indentation (2 spaces for top level)
          if (trimmed.startsWith('//')) {
            return '  ' + trimmed;
          }
          return '  ' + trimmed;
        })
        .filter((line, idx, arr) => {
          // Remove excessive blank lines (max 1 blank line)
          if (line === '' && idx > 0 && arr[idx - 1] === '') {
            return false;
          }
          return true;
        })
        .join('\n');
      
      // Ensure there's a comma if it's not the last item in the subcategory
      // But check if it already has one
      let output = formatted;
      if (!isLast && !output.trim().endsWith(',')) {
        output = output.trim() + ',';
      }
      
      reorganizedProjects += output + '\n';
    }
  }
  
  // Handle uncategorized projects for this category
  if (grouped[category]['Uncategorized'] && grouped[category]['Uncategorized'].length > 0) {
    reorganizedProjects += `  // ${category}: Uncategorized\n`;
    for (let idx = 0; idx < grouped[category]['Uncategorized'].length; idx++) {
      const block = grouped[category]['Uncategorized'][idx];
      const isLast = idx === grouped[category]['Uncategorized'].length - 1;
      
      const lines = block.text.split('\n');
      const formatted = lines
        .map((line) => {
          const trimmed = line.trim();
          if (trimmed === '') return '';
          return '  ' + trimmed;
        })
        .filter((line, idx, arr) => {
          if (line === '' && idx > 0 && arr[idx - 1] === '') return false;
          return true;
        })
        .join('\n');
      
      let output = formatted;
      if (!isLast && !output.trim().endsWith(',')) {
        output = output.trim() + ',';
      }
      
      reorganizedProjects += output + '\n';
    }
  }
}

// Remove trailing comma before closing bracket
reorganizedProjects = reorganizedProjects.trim();
if (reorganizedProjects.endsWith(',')) {
  reorganizedProjects = reorganizedProjects.slice(0, -1);
}
reorganizedProjects += '\n];';

// Write the reorganized file
const newContent = beforeProjects + reorganizedProjects;
fs.writeFileSync(filePath, newContent, 'utf8');

console.log(`Reorganized ${projectBlocks.length} projects by category and sub-category.`);
console.log('Categories:', Object.keys(grouped).join(', '));
