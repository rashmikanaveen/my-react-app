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
