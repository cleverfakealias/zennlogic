# UI App

This is a React + Vite + Storybook UI project using Material UI, Emotion, and Sanity.io.

Just me messing around to learn some new stuff. 
---

## ✨ Features

- ⚡ Powered by Vite for fast development
- 🎨 Styled with Material-UI (`@mui`)
- 💅 Emotion for custom styling
- 📚 Storybook for component documentation
- 🧩 React Router for navigation
- 🖼️ Sanity for CMS and image support
- ✅ Linting with ESLint

---

## 📦 Scripts

| Command              | Description                             |
|----------------------|-----------------------------------------|
| `npm run dev`         | Start development server (Vite)         |
| `npm run build`       | Build for production (TypeScript + Vite)|
| `npm run lint`        | Run ESLint                             |
| `npm run preview`     | Preview production build               |
| `npm run storybook`   | Start Storybook server                  |
| `npm run build-storybook` | Build Storybook static files         |

---

## 🛠️ Tech Stack

- React `^18`
- Vite `^5`
- Storybook `^8`
- TypeScript `^5`
- Material-UI `^6`
- Emotion `^11`
- Sanity.io Client & Image URL Builder
- ESLint + Storybook plugin

---

## 💾 Setup

1. Clone this repo:
    ```bash
    git clone <your-repo-url>
    cd ui
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file if needed for environment variables:
    ```bash
    cp .env.example .env
    ```

4. Start development:
    ```bash
    npm run dev
    ```

---

## 💡 Notes

- Storybook runs on port `6006` by default.
- Vite preview runs on port `4173` by default.
- Make sure to configure your Sanity client in the codebase with proper credentials.

---

## 📚 Storybook

This project is Storybook-ready! Just run:

```bash
npm run storybook
