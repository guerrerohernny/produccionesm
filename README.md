# Sitio web — Producciones M (DJ, Sonido & Iluminación)

Página web de una sola pieza (HTML + CSS + JS), lista para publicarse gratis en GitHub Pages. No necesita servidor, base de datos ni backend: las cotizaciones se envían directo a WhatsApp.

## Qué contiene

```
index.html          → la página completa
css/style.css        → todos los estilos
js/script.js         → menú, calendario y envío del formulario por WhatsApp
images/               → logo, foto principal y galería (tomados del Instagram @producciones3me)
```

## Cómo publicarlo en GitHub Pages (gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, por ejemplo `producciones-m`.
3. Sube **todos** estos archivos y carpetas manteniendo la misma estructura (arrastra la carpeta completa en "Add file → Upload files").
4. Ve a **Settings → Pages**.
5. En "Branch" elige `main` y la carpeta `/ (root)`, luego **Save**.
6. En un par de minutos tu página estará en línea en algo como:
   `https://tu-usuario.github.io/producciones-m/`

Si más adelante compran un dominio propio (por ejemplo `produccionesm.com`), se conecta desde la misma sección **Settings → Pages → Custom domain**.

## Cómo funciona "Cotiza tu evento"

1. El cliente presiona el botón, baja al formulario.
2. Elige la fecha en el calendario, escribe su nombre, celular, tipo de evento y detalles opcionales.
3. Al presionar **"Enviar cotización por WhatsApp"**, se abre WhatsApp automáticamente con un mensaje ya redactado con todos sus datos, listo para mandarlo al número de la empresa.
4. Ustedes reciben ese mensaje como un WhatsApp normal — no necesitan revisar ningún panel ni correo.

No requiere configurar nada (ni cuentas de email, ni servicios externos). Es la opción más simple posible para alguien sin experiencia técnica.

## Cómo cambiar el número de WhatsApp / teléfono

El número actual es **667 160 2877**. Aparece en varios lugares:

- `js/script.js` → línea `const WHATSAPP_NUMBER = "526671602877";` (formato: 52 + 10 dígitos, sin espacios ni signos)
- `index.html` → busca `wa.me/526671602877` y `tel:+526671602877` (aparecen 3 veces: hero, footer y botón flotante)

Si cambia el número, reemplázalo en esos lugares (mismo formato: `52` + número a 10 dígitos).

## Cómo cambiar textos, fotos o servicios

- Los textos están directamente en `index.html`, organizados por secciones con comentarios como `<!-- ===== SERVICIOS ===== -->`.
- Para cambiar una foto, reemplaza el archivo dentro de `images/` conservando el mismo nombre (por ejemplo, sube una nueva `hero.jpg` con esa misma dimensión aproximada 1320x1122 para que no se deforme).
- Para agregar una foto nueva a la galería, agrégala en `images/`, y copia un bloque `<div class="gallery-item">...</div>` dentro de la sección `<!-- ===== GALERÍA ===== -->`.

## Notas

- El sitio usa Google Fonts y la librería Flatpickr (calendario) desde internet (CDN), así que el usuario final necesita conexión a internet para verlo correctamente — esto es normal en cualquier página web.
- Todo el contenido visual (logo y fotos) se tomó de las publicaciones de Instagram @producciones3me.
# produccionesm
