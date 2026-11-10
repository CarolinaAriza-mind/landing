# AURA Estudio — Landing Page Demo

Landing page moderna y responsive desarrollada para un estudio ficticio de estética y belleza. Este proyecto funciona como demostración de un sitio web comercial, pensado para presentar servicios, fortalecer la presencia digital de un negocio y facilitar el contacto con potenciales clientes a través de WhatsApp.

## ✨ Características

- Diseño moderno, elegante y adaptable a dispositivos móviles.
- Navegación intuitiva.
- Sección principal (Hero) con llamada a la acción.
- Presentación de servicios.
- Sección sobre el negocio.
- Galería visual.
- Botones de contacto directo por WhatsApp.
- Botón flotante de WhatsApp con ícono oficial.
- Footer con información del negocio.
- Efectos visuales e interacciones al pasar el cursor.

## 🛠️ Tecnologías utilizadas

- **Next.js** — Framework de React.
- **React** — Biblioteca para interfaces de usuario.
- **TypeScript** — Tipado estático.
- **Tailwind CSS** — Framework de estilos.
- **React Icons** — Biblioteca de iconos.

## 📁 Estructura del proyecto

```text
aura-estudio/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar al proyecto

```bash
cd nombre-del-proyecto
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### 5. Generar una versión de producción

```bash
npm run build
```

### 6. Ejecutar en producción

```bash
npm run start
```

## ⚙️ Personalización

El proyecto puede adaptarse a diferentes negocios y rubros.

Antes de utilizarlo para un cliente, actualizar:

- Nombre e identidad visual del negocio.
- Logotipo y paleta de colores.
- Imágenes de servicios y productos.
- Descripciones y contenido.
- Datos de contacto.
- Ubicación y redes sociales.
- Número de WhatsApp.

### Configuración de WhatsApp

Actualizar el número de teléfono utilizado por la función `wa()`.

Utilizar el formato internacional, únicamente con números y sin espacios ni símbolos.

Ejemplo:

```tsx
const phone = "549XXXXXXXXXX";
```

Reemplazar el valor por el número correspondiente al negocio.

### Configuración del ícono de WhatsApp

El proyecto utiliza `react-icons` para mostrar el ícono oficial de WhatsApp.

Instalar la dependencia:

```bash
npm install react-icons
```

Importar el componente:

```tsx
import { FaWhatsapp } from "react-icons/fa";
```

## 📱 Diseño responsive

La interfaz está diseñada para adaptarse a distintos tamaños de pantalla:

- Desktop.
- Tablets.
- Smartphones.

## 🌐 Despliegue

El proyecto puede desplegarse en [Vercel](https://vercel.com/).

Pasos generales:

1. Subir el repositorio a GitHub.
2. Ingresar a Vercel.
3. Importar el repositorio.
4. Configurar el proyecto.
5. Ejecutar el despliegue.

Vercel permite publicar aplicaciones Next.js y generar una URL pública para compartir el sitio.

## 📌 Consideraciones

Este proyecto es una demo comercial.

AURA Estudio es un negocio ficticio y sus contenidos, servicios e imágenes son ilustrativos.

Para un proyecto real, todo el contenido debe personalizarse con información proporcionada y aprobada por el cliente.

Las imágenes externas pueden depender de la disponibilidad de sus respectivos servicios.

## 👩‍💻 Desarrollo

Desarrollado por **Carolina Ariza**.

**Full Stack Developer**

React · Next.js · TypeScript · Node.js

---

© 2026 AURA Estudio — Demo comercial.
