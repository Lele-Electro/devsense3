import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join('dist', 'devsense', 'browser', 'browser');
const indexPath = join(outputDirectory, 'index.html');
const indexHtml = await readFile(indexPath, 'utf8');

if (!indexHtml.includes('<base href="/devsense3/">')) {
  throw new Error('GitHub Pages build is missing <base href="/devsense3/">.');
}

await copyFile(indexPath, join(outputDirectory, '404.html'));
await writeFile(join(outputDirectory, '.nojekyll'), '');

console.log(`Prepared GitHub Pages artifact at ${outputDirectory}.`);