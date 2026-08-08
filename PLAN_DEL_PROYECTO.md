# Plan central del proyecto — Landing Jhon

**Versión:** 0.1  
**Fecha de inicio:** 8 de agosto de 2026  
**Estado:** definición y validación  
**Responsables de decisión:** Jhon Adolfo Suárez y Yeison  

## 1. Propósito

Crear una landing profesional que presente los servicios de Jhon, genere confianza y convierta visitas en solicitudes de valoración útiles.

La web debe poder empezar con un alcance pequeño y crecer sin rehacer su base. Primero validaremos la información comercial, operativa y legal; después decidiremos diseño, tecnología y publicación.

## 2. Resultado esperado de la primera versión

Una página web adaptable a móvil y escritorio que permita a una persona:

1. entender qué servicios se ofrecen;
2. saber para qué tipos de cliente y zona se trabaja;
3. comprobar experiencia mediante información e imágenes autorizadas;
4. conocer el proceso de trabajo;
5. solicitar una valoración a través de un canal real y autorizado.

El resultado debe ser claro, rápido, accesible, fácil de mantener y preparado para incorporar nuevas secciones o integraciones solo cuando aporten valor.

## 3. Base ya definida

Estos puntos forman la base de trabajo, pero deben confirmarse con Jhon antes de considerarlos definitivos:

- Actividad: reformas, mantenimiento y trabajos verticales.
- Experiencia comunicable: más de 15 años en industria, madera y construcción.
- Públicos iniciales: particulares, comunidades de propietarios, administradores de fincas y empresas.
- Cobertura inicial: País Vasco; otros desplazamientos se estudian individualmente.
- Forma de trabajo: intervención individual o con colaboradores según el alcance y las habilitaciones necesarias.
- Marca provisional: `Altifirme`.
- Principios de comunicación: claridad, evidencia real, seguridad y ausencia de promesas no demostrables.

La información detallada se encuentra en [docs/01-identidad-marca.md](docs/01-identidad-marca.md).

## 4. Alcance de la primera versión

### Incluido

- Cabecera con propuesta de valor y llamada principal a la acción.
- Presentación breve de Jhon y su experiencia.
- Servicios agrupados y explicados en lenguaje comprensible.
- Proceso de consulta, valoración, propuesta, ejecución y entrega.
- Galería de trabajos reales con imágenes aprobadas y trazables.
- Mensajes diferenciados para particulares, comunidades y empresas.
- Zona inicial de servicio.
- Contacto mediante los canales que se aprueben.
- Aviso legal, privacidad y configuración de cookies cuando correspondan.
- Diseño adaptable, accesibilidad básica, buen rendimiento y SEO técnico esencial.

La arquitectura y el primer borrador de textos están en [docs/02-estructura-landing.md](docs/02-estructura-landing.md).

### Fuera del alcance inicial

- Tienda, pagos en línea o contratación automática.
- Área privada de clientes.
- Aplicación móvil.
- CRM o automatizaciones comerciales complejas.
- Cobertura nacional anunciada como servicio ya implantado.
- Chatbot, generador automático de presupuestos o funciones de IA.
- Subida de fotografías por clientes sin almacenamiento seguro y controles de privacidad.
- Analítica, mapas, vídeos o recursos de terceros antes de decidir su impacto en privacidad y consentimiento.

Estas capacidades podrán evaluarse después de observar demanda y uso reales.

## 5. Fases de trabajo

### Fase 0 — Validación de la información

- Confirmar servicios ejecutados directamente y servicios realizados con colaboradores.
- Confirmar zona, tipos de cliente y capacidad operativa.
- Recopilar datos fiscales, canales de contacto y documentación profesional necesaria.
- Revisar el nombre `Altifirme`, antecedentes de marca y dominio disponible.
- Seleccionar trabajos reales y obtener permisos de uso.

**Salida:** información suficiente y autorizada para producir la web sin inventar contenido.

### Fase 1 — Contenido e identidad

- Aprobar nombre, descriptor, propuesta de valor y tono.
- Cerrar el catálogo inicial de servicios.
- Redactar los textos definitivos.
- Definir identidad visual básica: logotipo o tratamiento tipográfico, color, tipografía y estilo fotográfico.
- Preparar y aprobar las imágenes conforme a [docs/03-politica-imagenes.md](docs/03-politica-imagenes.md).

**Salida:** contenido y dirección visual aprobados.

### Fase 2 — Experiencia y diseño

- Crear el esquema de la página priorizando móvil.
- Diseñar los estados principales y el flujo de contacto.
- Revisar legibilidad, jerarquía, confianza y llamadas a la acción.
- Validar una versión visual antes del desarrollo completo.

**Salida:** diseño aprobado y listo para implementar.

### Fase 3 — Desarrollo

- Elegir la tecnología más sencilla que cumpla los requisitos confirmados.
- Implementar componentes, contenido, imágenes y contacto.
- Añadir metadatos, estructura SEO, accesibilidad y optimización de recursos.
- Mantener los datos de demostración claramente separados de los datos reales.

**Salida:** versión de prueba funcional.

### Fase 4 — Verificación y preparación legal

- Probar móvil, escritorio, navegadores principales y enlaces.
- Revisar rendimiento, accesibilidad, SEO, formularios y tratamiento de errores.
- Completar los controles de [docs/04-control-legal.md](docs/04-control-legal.md).
- Confirmar que cada imagen publicada figura como `approved` en [assets/licenses/image-register.csv](assets/licenses/image-register.csv).
- Verificar que no queden teléfonos, textos, testimonios o datos ficticios.

**Salida:** versión candidata a publicación con evidencias de revisión.

### Fase 5 — Publicación y aprendizaje

- Aprobar dominio, alojamiento y cualquier coste antes de contratar.
- Publicar con HTTPS, copias de seguridad y un procedimiento sencillo de actualización.
- Comprobar el funcionamiento real después del despliegue.
- Medir consultas útiles sin recopilar más datos de los necesarios.
- Priorizar mejoras según dudas de clientes y resultados observados.

**Salida:** landing operativa y ciclo de mejora definido.

## 6. Puertas de decisión

No se avanza a la fase siguiente hasta cumplir su puerta:

| Puerta | Condición mínima |
|---|---|
| G0 — Información válida | Servicios, cobertura, identidad del prestador, contacto y documentación esencial confirmados. |
| G1 — Contenido aprobado | Nombre o alternativa, textos, identidad visual e imágenes autorizadas. |
| G2 — Diseño aprobado | Versión móvil y de escritorio revisada; flujo de contacto aceptado. |
| G3 — Desarrollo verificado | Funciones, accesibilidad, rendimiento y navegadores principales comprobados. |
| G4 — Publicación autorizada | Datos reales, textos legales, dominio, alojamiento y posibles costes aprobados. |

## 7. Decisiones pendientes

Las siguientes decisiones pueden cambiar materialmente el resultado y no deben suponerse:

- Confirmación de `Altifirme` o elección de otro nombre.
- Resultado de la comprobación en OEPM/EUIPO y disponibilidad de dominio.
- Identidad fiscal y datos que deben figurar en la web.
- Teléfono, correo y canal principal de contacto.
- Lista exacta de servicios propios y servicios que exigen colaboradores habilitados.
- Documentación vigente: seguros, formación, acreditaciones y habilitaciones.
- Imágenes autorizadas y trabajos que pueden mostrarse públicamente.
- Preferencias visuales y referencias de estilo.
- Presupuesto disponible para dominio, alojamiento, correo y mantenimiento.
- Responsable de atender solicitudes y plazo operativo de respuesta.

## 8. Criterios de calidad

La primera versión se considerará terminada cuando:

- toda afirmación comercial relevante tenga respaldo;
- no contenga datos ficticios ni promesas no demostrables;
- funcione correctamente en móvil y escritorio;
- el contenido principal pueda entenderse sin conocimientos técnicos;
- teclado, contraste, encabezados, etiquetas y textos alternativos sean adecuados;
- imágenes y recursos estén optimizados y tengan procedencia registrada;
- contacto, enlaces y mensajes de error se hayan probado;
- la información legal y de privacidad aplicable esté publicada;
- exista una forma documentada de actualizar y respaldar la web;
- la publicación final haya sido comprobada en su dominio real.

## 9. Organización del proyecto

- `PLAN_DEL_PROYECTO.md`: alcance, estado, fases y decisiones; es la fuente central.
- `README.md`: puerta de entrada y mapa breve del repositorio.
- `docs/01-identidad-marca.md`: posicionamiento, públicos y mensajes.
- `docs/02-estructura-landing.md`: secciones y borrador de contenido.
- `docs/03-politica-imagenes.md`: selección, permisos y tratamiento de recursos visuales.
- `docs/04-control-legal.md`: comprobaciones legales y contractuales.
- `assets/own-work/`: originales propios autorizados.
- `assets/stock/`: originales externos con licencia comprobada.
- `assets/derived/`: versiones optimizadas para la web.
- `assets/licenses/image-register.csv`: trazabilidad y aprobación de cada imagen.

Cuando comience el desarrollo, el código, las pruebas y la configuración se añadirán en carpetas propias de la tecnología elegida. No se crea aún una estructura técnica ficticia.

## 10. Reglas de trabajo

- Actualizar este plan cuando cambien alcance, estado o decisiones importantes.
- Separar siempre hechos confirmados, contenido provisional y tareas pendientes.
- No introducir datos personales, credenciales o documentos sensibles en el repositorio.
- No contratar, publicar ni habilitar servicios externos sin aprobación expresa.
- Conservar originales y licencias; las versiones web nunca sustituyen a los originales.
- Hacer cambios pequeños, verificables y fáciles de revertir.

## 11. Próximo hito

Completar G0 mediante una sesión breve con Jhon para resolver las decisiones operativas y documentales de la sección 7. Con esa información se podrá cerrar el contenido de la landing y decidir si `Altifirme` merece avanzar como marca.

Hasta entonces, el trabajo debe centrarse en validar información y recopilar evidencia, no en contratar servicios ni desarrollar una solución definitiva.
