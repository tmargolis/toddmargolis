import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const dataDir = join(process.cwd(), 'src', 'data');
    const files = readdirSync(dataDir).filter(file => 
      file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')
    );

    let content = '# Observables.art - Complete Data Archive\n\n';
    content += `Generated: ${new Date().toISOString()}\n\n`;
    content += '='.repeat(80) + '\n\n';

    for (const file of files) {
      const filePath = join(dataDir, file);
      const fileContent = readFileSync(filePath, 'utf-8');
      
      content += `## File: ${file}\n\n`;
      content += '```typescript\n';
      content += fileContent;
      content += '\n```\n\n';
      content += '='.repeat(80) + '\n\n';
    }

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    return new Response(`Error reading data files: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
};
