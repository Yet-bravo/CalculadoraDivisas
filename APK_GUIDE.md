# Guía para Generar APK desde tu PWA

Como no puedo generar el archivo `.apk` directamente por limitaciones técnicas, he preparado esta guía para que puedas hacerlo tú mismo en menos de 2 minutos usando una herramienta gratuita de Microsoft llamada **PWABuilder**.

## Pasos para crear tu APK

1.  **Sube tus cambios a GitHub**: Asegúrate de que version actual de tu página esté publicada en GitHub Pages y que tengas la URL lista (ej. `https://tu-usuario.github.io/tu-repo/`).

2.  **Ve a PWABuilder**:
    *   Abre [PWABuilder.com](https://www.pwabuilder.com/) en tu navegador.

3.  **Ingresa tu URL**:
    *   En la caja de texto que dice "Enter your PWA's URL", pega el link de tu página web (la versión publicada, no la de GitHub).
    *   Haz clic en **Start**.

4.  **Espera el análisis**:
    *   La herramienta analizará tu sitio. Deberías ver una puntuación alta si todo está bien configurado (yo ya configuré los archivos necesarios por ti).
    *   Si ves advertencias amarillas, no te preocupes, suele funcionar igual.

5.  **Genera el APK**:
    *   Haz clic en el botón **Package for Stores** (o "Build My PWA").
    *   Busca la opción **Android** y haz clic en **Generate**.

6.  **Descarga el archivo**:
    *   PWABuilder te preguntará algunas opciones (puedes dejar las defaults).
    *   Haz clic en **Download**.
    *   Obtendrás un archivo `.zip`.

7.  **Instala en tu teléfono**:
    *   Descomprime el `.zip` que descargaste.
    *   Dentro encontrarás un archivo `.apk` (a veces está dentro de una carpeta llamada `signed-apk` o algo similar).
    *   Envía ese archivo `.apk` a tu teléfono (por WhatsApp, USB, Drive, etc.).
    *   Ábrelo en tu teléfono e instálalo. (Es posible que tengas que permitir "Instalar aplicaciones desconocidas").

¡Listo! Ahora tendrás tu calculadora instalada como una app nativa.
