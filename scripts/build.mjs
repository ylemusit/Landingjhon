import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'dist');
const entries = ['index.html', 'robots.txt', 'css', 'js', path.join('assets', 'brand')];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const entry of entries) {
  const source = path.join(projectRoot, entry);
  const destination = path.join(outputDirectory, entry);
  await cp(source, destination, { recursive: true });
}

console.log(`Sitio generado en ${path.relative(projectRoot, outputDirectory)}/`);

