# Zennlogic UI

This is the UI for the Zennlogic project, built with React, TypeScript, Vite, and Material-UI.

## Features

- Modern responsive design
- Light and dark mode support
- Contact form with Formspree and reCAPTCHA
- Themed with Minnesota sports-inspired palette

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

## Project Structure

- `src/` — Main source code
- `src/components/` — React components
- `src/theme.ts` — Theme configuration
- `public/` — Static assets

## Environment Variables

Create a `.env` file in the root with:

```
VITE_FORMSPREE_URL=your-formspree-endpoint
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

## License

MIT
