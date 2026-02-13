# Cómo publicar tu App en Internet

Aquí tienes las dos formas más fáciles de subir tu calculadora para tener un link propio (ej. `micalculadora.vercel.app`).

## Opción 1: Vercel (Más fácil y rápido)
Vercel es excelente para este tipo de apps.

1.  Crea una cuenta en [vercel.com](https://vercel.com/signup).
2.  Instala **Vercel CLI** en tu computadora (si tienes Node.js):
    -   Abre la terminal y escribe: `npm i -g vercel`
3.  En la terminal, entra a la carpeta de tu app:
    -   `cd c:\Users\yetza\Desktop\Sisprot_indicadores_-main\CalculadoraDivisas`
4.  Escribe el comando:
    -   `vercel`
5.  Dale **Enter** a todo lo que te pregunte (Yes, Yes, Enter, Enter...).
6.  ¡Listo! Al final te dará un link (azul) que puedes copiar y enviar.

---

## Opción 2: GitHub Pages (Clásico)
Ideal si ya tienes cuenta en GitHub.

1.  Crea un **nuevo repositorio** en [github.com/new](https://github.com/new). Ponle nombre (ej. `calculadora-divisas`) y déjalo "Public".
2.  En tu carpeta `CalculadoraDivisas`, abre la terminal y escribe:
    ```bash
    git init
    git add .
    git commit -m "Primera versión"
    git branch -M main
    git remote add origin https://github.com/TU_USUARIO/calculadora-divisas.git
    git push -u origin main
    ```
    *(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)*.
3.  Ve a la página de tu repositorio en GitHub > **Settings** > **Pages**.
4.  En "Branch", selecciona `main` y dale a **Save**.
5.  Espera unos minutos y te dará el link de tu página.

## 📲 Instalar en el teléfono
Una vez tengas el link (de Vercel o GitHub):
1.  Ábrelo en Chrome (Android) o Safari (iPhone).
2.  Toca **Compartir** o **Menú**.
3.  Elige **"Agregar a inicio"** o **"Instalar App"**.
