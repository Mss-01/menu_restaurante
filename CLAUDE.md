# Menú web — La cocina de Doña Niña

Menú digital estático (HTML + CSS + JS sin framework ni build) de un restaurante de comida criolla dominicana. Se publica en GitHub Pages (`https://mss-01.github.io/menu_restaurante/`). Idioma del proyecto y de la conversación: **español**.

## Estructura

- `index.html`: hero (logo + slogan), banner Rooftop animado, pestañas, contenedor del menú, modal de detalle.
- `css/styles.css`: todos los estilos. Variables de marca en `:root` (verde `#23483D`, amarillo `#F2BE3E`, fuente títulos Bree Serif).
- `js/menu-data.js`: array `MENU`. **Archivo GENERADO desde `menu.xlsx`: no editarlo a mano.**
- `js/app.js`: renderiza pestañas, tarjetas y modal a partir de `MENU`; navegación por hash (`#platos`).
- `js/banner.js`: estrellas y frases rotativas del banner Rooftop (lista `phrases` editable).
- `menu.xlsx`: fuente de verdad del menú (lo edita el dueño).
- `actualizar_menu.py`: genera `js/menu-data.js` desde `menu.xlsx` y sube el `?v=N` (ver «Flujo principal»).
- `images/web/<Carpeta>/<imagen>.webp`: fotos que usa la web. `images/web/apertura.webp` es una versión recortada de `images/apertura.webp` (ya sin uso: el banner actual es CSS/JS).
- `images/` (raíz): logos, guía de identidad (PDF). Las carpetas `images/Bebidas|Platos|Postres` con originales jpg/png están borradas del árbol de trabajo a propósito (solo se usa `images/web/`).

## Flujo principal: actualizar el menú desde el Excel

El usuario edita `menu.xlsx` y pide "actualiza el menú". Yo regenero `js/menu-data.js` ejecutando **`python actualizar_menu.py`** (raíz del repo; Python + openpyxl). El usuario también puede correrlo él mismo. El script lee el xlsx con `data_only=True`, escribe el JS en UTF-8, avisa de problemas (imágenes que faltan, precios vacíos, secciones sin definir, `precio_oferta >= precio`), imprime el resumen de cambios y, **solo si hubo cambios, sube el `?v=N` de `js/menu-data.js` en `index.html`**. No hace commit/push. Si el menú sale vacío no escribe nada. Si cambian las reglas de la sección "Hojas del xlsx", actualizar el script. Detecta `~$menu.xlsx` (Excel abierto) y avisa.

**Hojas del xlsx**
- `Menu`: `seccion, orden, nombre, imagen, precio, descripcion, disponible, precio_oferta`.
  - `disponible` = `NO` → el ítem se omite (cualquier otro valor, incluso vacío, se muestra).
  - `precio` = precio normal. `precio_oferta` (opcional) = precio de oferta → se emite como `promo` (el nombre interno en el JS sigue siendo `promo`). Avisar si `promo >= price`.
  - `imagen` = nombre sin extensión; debe existir `images/web/<carpeta>/<imagen>.webp` (verificar y avisar si falta).
  - Descripciones pueden tener saltos de línea (`\n`); el modal los respeta (`white-space: pre-line`).
- `Secciones`: `seccion, orden, carpeta_imagenes, ajuste_imagen` (`cover`|`contain`). Las secciones y los ítems se ordenan por `orden`.
- `Instrucciones`: ayuda para el usuario.

**Formato de salida de `menu-data.js`** (un ítem por línea):
```js
const MENU = [
  { id: "platos", title: "Platos", folder: "Platos", fit: "cover", items: [
    { name: "...", image: "...", price: 450, promo: 350, description: "..." },  // promo opcional
  ] }
];
```
`id` = título en minúsculas con espacios → guiones. Cabecera con el comentario "GENERADO desde menu.xlsx".

**Después de ejecutar el script:** resumir al usuario lo que imprime (ítems, precios, ofertas) y repetir sus AVISOS. Si algo parece accidental (texto cortado, `!` en vez de `¡`), avisar antes de dar por bueno.

## Funcionalidades ya implementadas

- Oferta: si un ítem tiene `promo` (columna `precio_oferta`), la tarjeta muestra la insignia "🔥 Oferta" (llamita animada, respeta `prefers-reduced-motion`), el precio de oferta resaltado y el normal tachado debajo; el modal muestra la misma insignia sobre los precios. Antes se llamaba "Apertura" (`precio_apertura`). Funciones `renderPrice` y `renderBadge` en `app.js`; estilos `.badge`, `.pricebox`, `.price-old`.
- Modal: foto completa sin recortar (`object-fit: contain`), scroll de la página bloqueado con `html:has(.modal[open])`, scroll interno solo en el bloque de texto si no cabe.
- Tarjetas: descripción recortada a 3 líneas; se ve completa en el modal.
- Banner Rooftop animado (`.promo`; antes era de apertura, reemplazado en nov-2026): estrellas que titilan (JS), guirnalda de luces y silueta de ciudad (CSS), frases rotativas. Respeta `prefers-reduced-motion`. Para quitarlo: borrar el bloque marcado con comentario en `index.html` y `js/banner.js`. El usuario NO quiere cierre automático por fecha.

## Cosas que aprendí / precauciones

- **Caché de GitHub Pages** (`max-age=600`): el HTML se actualiza pero el CSS/JS viejo puede quedar en caché. Los enlaces en `index.html` llevan `?v=N`; **subir N al publicar cambios de CSS/JS/menú**. `actualizar_menu.py` sube solo el N de `menu-data.js`; si cambias `styles.css`/`app.js`/`banner.js`, súbelo a mano.
- Los archivos usan **CRLF** en Windows; al parchear con Python, leer/escribir con `newline=""` y preservar el fin de línea (git avisa de LF→CRLF, es normal).
- Imprimir el xlsx en la consola de Windows muestra caracteres rotos (`�`): es solo la consola; el dato está bien. Escribir a archivo UTF-8.
- La ruta del proyecto tiene `ñ` y espacios; Chrome headless no abrió bien `file://` con esa ruta. Para capturas: copiar `index.html css js images` al directorio scratchpad y abrir desde ahí (`chrome.exe --headless --screenshot=...`, Chrome en `C:\Program Files\Google\Chrome\Application\`).
- Escribir el xlsx con openpyxl conserva validaciones y estilos; hacer copia de respaldo antes de modificarlo y avisar si el usuario lo tiene abierto en Excel.
- No hacer `git commit`/`push` salvo que el usuario lo pida. Rama de trabajo: `menu_restaurante_1`; principal: `main`.
- Los precios/descripciones de platos genéricos eran de ejemplo; los reales los mantiene el usuario en el Excel.
