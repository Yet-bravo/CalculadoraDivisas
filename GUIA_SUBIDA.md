# Guía para Publicar en GitHub y Celular

Como tu computadora no tiene configurada la herramienta automática para subir código, lo haremos manualmente. Es muy fácil, sigue estos pasos:

## Paso 1: Crear el repositorio en GitHub
1.  Entra a [GitHub.com](https://github.com) e inicia sesión.
2.  Haz clic en el botón **New** (o Nuevo) en la esquina superior izquierda.
3.  En "Repository name", escribe: `CalculadoraDivisas`.
4.  Asegúrate de que esté marcado como **Public**.
5.  Desplázate hacia abajo y haz clic en **Create repository**.

## Paso 2: Subir los archivos
1.  En la pantalla siguiente, busca el enlace que dice **uploading an existing file** (subir un archivo existente).
2.  Abre la carpeta de tu proyecto en tu computadora: `Sisprot_indicadores_-main\CalculadoraDivisas`.
3.  Selecciona **TODOS** los archivos de esa carpeta (`index.html`, `style.css`, `script.js`, `manifest.json`, `sw.js`, **icon.png**).
    > **IMPORTANTE**: Como falló la creación automática de la imagen, busca cualquier imagen que te guste (logo, foto), cámbiale el nombre a `icon.png` y ponla en la carpeta antes de subir todo.
4.  Arrástralos y suéltalos en la página de GitHub.
5.  Espera a que carguen todos y luego baja hasta el botón verde **Commit changes**.

## Paso 3: Activar la página web (GitHub Pages)
1.  En tu nuevo repositorio, ve a la pestaña **Settings** (Configuración) arriba a la derecha.
2.  En el menú de la izquierda, busca y haz clic en **Pages**.
3.  En "Branch", cambia "None" por **main** (o master) y haz clic en **Save**.
4.  Espera unos segundos y refresca la página. Verás un enlace en la parte superior (ej: `https://usuario.github.io/CalculadoraDivisas/`).

## Paso 4: Instalar en el Celular (Depende de tu teléfono)

La opción de instalar cambia según la marca de tu teléfono. Busca tu caso aquí:

### 📱 Opción A: Tienes un iPhone (iOS)
**Importante:** En iPhone, esto **SOLO funciona en SAFARI**. No uses Chrome.
1.  Abre el enlace en **Safari**.
2.  Toca el botón **Compartir** (el cuadrado con una flecha hacia arriba ⬆️ en la barra de abajo).
3.  Desliza hacia arriba el menú que sale hasta encontrar **"Agregar al inicio"** (o "Add to Home Screen").
4.  Dale a "Agregar".

### 📱 Opción B: Tienes un Android (Samsung, Xiaomi, Motorola...)
1.  Abre el enlace en **Google Chrome**.
2.  Espera unos segundos a que cargue completa.
3.  Toca los tres puntos (⋮) arriba a la derecha.
    *   **Opción 1**: Busca donde dice **"Instalar aplicación"**.
    *   **Opción 2**: Si no sale, busca **"Agregar a la pantalla principal"**.
4.  Confirma la instalación.

---

### ⚠️ ¿Sigue sin salir la opción?
Si en tu "teléfono específico" no sale la opción, prueba esto:
1.  **Limpia la caché**: A veces el navegador guarda la versión vieja sin icono.
2.  **Confirma el Icono**: Entra a tu enlace agregando `/icon.png` al final (ej: `...github.io/tu-repo/icon.png`) para ver si la imagen carga de verdad. Si da error 404, **ese es el problema**: te falta subir la imagen.
3.  **Navegador**: Asegúrate de usar **Chrome** (Android) o **Safari** (iPhone). Otros navegadores (como el de Samsung o Facebook) a veces bloquean esto.

#### 🔧 Solución Especial para Xiaomi (Redmi, POCO)
Los teléfonos Xiaomi a veces **bloquean** que las apps se instalen. Tines que dar permiso manual:
1.  Ve a **Configuración** (Ajustes) de tu teléfono.
2.  Busca **Aplicaciones** -> **Administrar aplicaciones**.
3.  Busca **Chrome** en la lista.
4.  Entra en **Otros permisos** (o Permisos adicionales).
5.  Busca la opción **"Accesos directos en pantalla de inicio"** y actívala (ponla en verde/permitir).
6.  Vuelve a Chrome, recarga la página e intenta instalar de nuevo.
