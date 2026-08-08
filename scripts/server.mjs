import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requestedPort = Number.parseInt(process.env.PORT ?? '4173', 10);
const port = Number.isInteger(requestedPort) && requestedPort > 0 ? requestedPort : 4173;
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8'
};

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? '/', 'http://localhost');
    const decodedPath = decodeURIComponent(requestUrl.pathname);
    const relativePath = decodedPath === '/' ? 'index.html' : decodedPath.replace(/^\/+/, '');
    const filePath = path.resolve(projectRoot, relativePath);

    if (filePath !== projectRoot && !filePath.startsWith(`${projectRoot}${path.sep}`)) {
      response.writeHead(403).end('Acceso denegado');
      return;
    }

    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error('No es un archivo');

    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath)] ?? 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Página no encontrada');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`MVP disponible en http://127.0.0.1:${port}`);
});

