## Creating a New Vite React App

To create a new Vite React application, use the following command:

```bash
npm create vite@latest my-react-app -- --template react
```

This will prompt you to:
- Select a framework: **React**
- Select a variant: **JavaScript + SWC**
- Use Vite 8 beta (Experimental)?: **No**
- Install with npm and start now?: **No**

The project will be scaffolded in a folder named `my-react-app`.

### Installation

Install the dependencies:

```bash
cd my-react-app
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Installing Tailwind CSS

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

### Install Tailwind CSS

Install `tailwindcss` and `@tailwindcss/vite` via npm:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configure the Vite plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration:

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### Import Tailwind CSS

Add `@import "tailwindcss";` to the top of your **src/index.css** file:

**src/index.css**
```css
@import "tailwindcss";

/* Your existing CSS styles */
```

Since `main.jsx` already imports `index.css`, Tailwind CSS will be available throughout your entire application.

For more information, visit the [Tailwind CSS Vite documentation](https://tailwindcss.com/docs/installation/using-vite).
