# Imperial Net — Sitio Web

## Objetivos del sitio

Imperial Net acompaña a las PyMEs en su transformación digital. El sitio
presenta nuestros servicios de consultoría estratégica, desarrollo de
software a medida e implementación de soluciones tecnológicas para que los
negocios automaticen procesos y crezcan sin límites.

## Stack tecnológico

- [Astro](https://astro.build) para la generación del sitio estático.
- [Bootstrap](https://getbootstrap.com) como base de estilos y componentes.
- [AOS](https://michalsnik.github.io/aos/) para animaciones al hacer scroll.
- Node.js y npm para gestionar dependencias y scripts.

## Ejecución y despliegue

1. Clonar este repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:4321`.
4. Generar la versión de producción:
   ```bash
   npm run build
   ```
5. (Opcional) Previsualizar la compilación localmente:
   ```bash
   npm run preview
   ```
6. Subir el contenido del directorio `dist/` a tu proveedor de hosting
   estático preferido (por ejemplo, Netlify, Vercel o GitHub Pages).

## Cómo contribuir

1. Haz un **fork** del repositorio y crea una rama para tu cambio.
2. Realiza tus modificaciones y asegúrate de que el sitio se construya
   correctamente ejecutando `npm run build`.
3. Envía un pull request describiendo el motivo del cambio.

## Reportar errores

Si encuentras un problema, por favor abre un [issue en GitHub](../../issues)
con los detalles y pasos para reproducirlo. También puedes escribirnos a
través de la sección de contacto del sitio.

