# Landing Jhon

MVP de la landing profesional de Jhon Adolfo Suárez, orientada a reformas, mantenimiento y trabajos verticales.

La versión actual sirve para revisar una arquitectura minimalista de cuatro bloques, el diseño responsive y el flujo de contacto antes de incorporar datos reales o contratar servicios.

## Estado

- Marca mostrada: `Altifirme`, todavía provisional.
- Alcance comercial previsto: todo el territorio español, sujeto a valoración de cada proyecto.
- Dirección: sede central candidata en Bilbao; no es un domicilio operativo hasta formalizar su contratación.
- Redes sociales: espacios preparados, todavía sin perfiles enlazados.
- Formulario: demostración local; valida, pero no envía ni almacena datos.
- Proyectos: la galería permanece fuera de la web hasta disponer de imágenes y casos reales aprobados.
- Imagen de cabecera: recurso ilustrativo generado para la MVP; no representa un proyecto ejecutado.
- Rastreo: desactivado; la MVP declara `noindex` y no carga analítica ni recursos externos.

El alcance, las fases y las decisiones se mantienen en **[PLAN_DEL_PROYECTO.md](PLAN_DEL_PROYECTO.md)**, que es la fuente central del proyecto.

## Probar la MVP

Requiere Node.js 20 o posterior y no necesita instalar dependencias.

```powershell
npm start
```

Abrir `http://127.0.0.1:4173` en el navegador. Para usar otro puerto:

```powershell
$env:PORT=5000
npm start
```

## Verificar y generar

```powershell
npm run check
```

Este comando ejecuta las pruebas y genera en `dist/` únicamente los archivos que forman la web publicable.

Comandos disponibles:

- `npm test`: comprueba estructura, recursos, modo demostración, privacidad y ausencia del teléfono ficticio.
- `npm run build`: genera la versión estática en `dist/`.
- `npm run check`: ejecuta ambas operaciones.

## Estructura

```text
LandingJhon/
├── index.html                 # Página y contenido de la MVP
├── css/styles.css             # Sistema visual y diseño responsive
├── js/app.js                  # Menú y formulario de demostración
├── assets/
│   ├── brand/                 # Recursos gráficos propios de la MVP
│   ├── own-work/              # Originales propios autorizados
│   ├── stock/                 # Originales externos con licencia
│   ├── derived/               # Versiones web optimizadas
│   ├── illustrative/          # Recursos de apoyo, nunca prueba de proyectos
│   └── licenses/              # Registro de procedencia y permisos
├── scripts/                   # Servidor local y construcción
├── tests/                     # Comprobaciones automáticas
├── docs/                      # Definiciones especializadas
├── .github/workflows/         # Validación y GitHub Pages
├── PLAN_DEL_PROYECTO.md       # Documento central
└── README.md                  # Entrada técnica al proyecto
```

## Publicación

GitHub Actions valida cada cambio. Por seguridad, únicamente `main` puede desplegar `dist/` en GitHub Pages; las ramas se revisan mediante pull requests antes de publicarse.

Antes de convertir la MVP en una web comercial deben completarse G0 y G4 del plan: datos reales, identidad del prestador, canal de contacto, permisos de imágenes y documentación legal.

## Regla de seguridad

El teléfono `+34 678 901 234` es ficticio y solo se conserva en la documentación como advertencia. Las pruebas impiden que aparezca en la web generada.
