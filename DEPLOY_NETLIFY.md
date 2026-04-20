# Guía: Despliegue en Netlify

## PASO 1: Preparativos Locales

1. Instala las dependencias (ya está hecho):
   ```bash
   pnpm install
   ```

2. Crea un archivo `.env.local` en la raíz con tus variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Luego actualiza con tus valores reales:
   - `VITE_FRONTEND_FORGE_API_KEY`: Tu API key de Google Maps
   - `VITE_BACKEND_URL`: URL de tu backend en Render (ej: https://jlsolution-backend.onrender.com)

3. Prueba localmente:
   ```bash
   pnpm run dev
   ```

## PASO 2: Preparar tu Repositorio (GitHub)

1. Asegúrate de que todos los cambios están commiteados:
   ```bash
   git add .
   git commit -m "Configuración para despliegue en Netlify"
   git push origin main
   ```

## PASO 3: Conectar a Netlify

1. Ve a [netlify.com](https://netlify.com) y haz login (puedes usar GitHub)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **GitHub** como proveedor
4. Busca y selecciona tu repositorio `JL-SOLUTION`
5. En la pantalla de configuración:
   - **Base directory**: (déjalo vacío)
   - **Build command**: No cambia nada (Netlify lo detectará de netlify.toml)
   - **Publish directory**: No cambia nada (Netlify lo detectará de netlify.toml)
   - Haz clic en **"Deploy site"**

## PASO 4: Configurar Variables de Entorno en Netlify

1. En el dashboard de Netlify, ve a **Site settings** → **Build & deploy** → **Environment**
2. Haz clic en **"Edit variables"**
3. Añade estas variables:
   - Key: `VITE_FRONTEND_FORGE_API_KEY` | Value: `tu_google_maps_api_key`
   - Key: `VITE_BACKEND_URL` | Value: `https://tu-backend-name.onrender.com`
4. Guarda los cambios

## PASO 5: Desplegar

1. Vuelve a **Deployments** en Netlify
2. Haz clic en **"Trigger deploy"** → **"Deploy site"**
3. ¡Espera a que termine! Verás un enlace así: `https://tu-sitio.netlify.app`

## PASO 6: Configurar Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio:
1. Ve a **Site settings** → **Domain management**
2. Haz clic en **"Add custom domain"**
3. Sigue las instrucciones

## 🔧 Solución de Problemas

**El sitio muestra 404:**
- Netlify automáticamente redirige todas las rutas no encontradas a `index.html` para SPA (Single Page Apps)
- Esto ya está configurado en `netlify.toml`

**Las variables de entorno no funcionan:**
- Asegúrate de que los nombres comienzan con `VITE_` (obligatorio en Vite)
- Redeploy después de cambiar variables: **Trigger deploy** → **Deploy site**

**El sitio es muy lento:**
- Netlify cachea automáticamente archivos en `/assets/*`
- Los cambios en `/dist/public` se publican en segundos
