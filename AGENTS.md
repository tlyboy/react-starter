# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Common Commands

```bash
pnpm dev      # Start development server
pnpm build    # TypeScript type checking + Vite build
pnpm preview  # Preview production build
```

## Tech Stack

- **React 19** + TypeScript
- **Vite** (using rolldown-vite) + React Compiler (babel-plugin-react-compiler)
- **Tailwind CSS v4** (via @tailwindcss/vite plugin)
- **Icons**: @egoist/tailwindcss-icons + @iconify-json/carbon

## Architecture

The project uses a clean layered structure:

- `src/main.tsx` - Application entry point
- `src/App.tsx` - Root component, uses Default layout
- `src/layouts/` - Layout components, Default layout includes ThemeProvider
- `src/components/` - Reusable components
  - `theme-provider.tsx` - Theme context, provides `useTheme` hook
  - `mode-toggle.tsx` - Dark mode toggle with View Transition animation

## Path Aliases

`@/*` maps to `./src/*`, configured in tsconfig.json and vite.config.ts.

## Styling Conventions

- Tailwind CSS v4 uses `@import 'tailwindcss'` syntax
- Dark mode uses class strategy (`.dark` class)
- Predefined component classes: `.btn`, `.icon-btn`
- Icons use `i-carbon-*` class names (e.g., `i-carbon-sun`, `i-carbon-moon`)
