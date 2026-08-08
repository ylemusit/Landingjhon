import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(projectRoot, 'index.html');
const html = await readFile(htmlPath, 'utf8');

test('incluye la estructura esencial de la MVP', () => {
  for (const sectionId of ['inicio', 'servicios', 'metodo', 'proyectos', 'cobertura', 'contacto']) {
    assert.match(html, new RegExp(`id=["']${sectionId}["']`), `Falta la sección ${sectionId}`);
  }
});
test('mantiene la vista previa fuera de los buscadores', () => {
  assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test('el formulario permanece en modo demostración', () => {
  assert.match(html, /data-demo-form/);
  assert.doesNotMatch(html, /<form[^>]+action=/i);
  assert.match(html, /no envía ni almacena datos/i);
});

test('no publica el teléfono ficticio conocido', () => {
  assert.doesNotMatch(html, /678[\s-]?901[\s-]?234/);
});

test('no carga recursos remotos ni rastreadores', () => {
  assert.doesNotMatch(html, /(?:src|href)=["']https?:\/\//i);
  assert.doesNotMatch(html, /google-analytics|googletagmanager|facebook\.net/i);
});

test('todos los recursos locales enlazados existen', async () => {
  const references = [...html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:)/.test(reference)) continue;
    const assetPath = path.join(projectRoot, reference.split('?')[0]);
    await assert.doesNotReject(access(assetPath), `No existe el recurso ${reference}`);
  }
});
