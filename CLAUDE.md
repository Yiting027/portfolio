# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build via Vite
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

- **React 19** with functional components and hooks
- **Vite** for bundling (see `vite.config.js` for Tailwind integration)
- **Tailwind CSS v4** using the new `@tailwindcss/vite` plugin
- **Framer Motion** for animations
- **ESLint** with flat config, React Hooks, and react-refresh plugins

### Structure

```
src/
  components/
    sections/     # Portfolio sections (Introduction, About, Projects, Skills, Experience, Education, Contact)
    index.js      # Barrel export for main components
  theme/
    colors.js     # Centralized color theme (pantone colors, gradients, semantic mappings)
  App.jsx         # Main layout with scroll navigation and IntersectionObserver for active section
  main.jsx        # Entry point
```

### Key Patterns

- Section navigation uses `IntersectionObserver` with `-50% 0px` rootMargin to detect active section
- Colors are centralized in `src/theme/colors.js` - use `pantone` and `theme` exports instead of hardcoded values
- Components are organized via barrel exports in `components/index.js` and `components/sections/index.js`
- ESLint rule: uppercase vars (`^[A-Z_]`) are allowed for unused vars (useful for React component destructuring)
