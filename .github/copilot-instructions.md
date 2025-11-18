# Copilot instructions for `orbiting-systems`

## Project snapshot

- React 18 + TypeScript bootstrapped with Vite (`src/main.tsx` mounts `App`).
- Tailwind CSS with custom theme, gradients, and animations (`tailwind.config.ts`).
- shadcn/ui components live in `src/components/ui` and rely on the `cn` helper from `src/lib/utils.ts`.
- Router-managed marketing pages under `src/pages`, with shared layout pieces in `src/components`.

## Application shell & routing

- `App.tsx` wraps the app with `QueryClientProvider`, tooltip/toast providers, and defines all routes. Add new pages here _before_ the `*` catch-all.
- Global toasts use both shadcn (`Toaster`) and Sonner; prefer `toast.*` from `sonner` for async UX like the contact form.

## UI conventions

- Import shared primitives via the `@` alias (configured in `vite.config.ts`). Example: `import { Button } from "@/components/ui/button"`.
- Buttons support variants (`default`, `outline`, `hero`, etc.) via class-variance-authority; reuse instead of ad-hoc Tailwind strings.
- High-level sections (hero, services, contact) compose smaller cards/buttons. Follow existing spacing (`py-24`, `container mx-auto px-6 lg:px-8`) for consistency.

## Styling & assets

- Design tokens come from CSS variables defined in `src/index.css`; Tailwind `extend.colors` mirrors those tokens.
- Animations such as `animate-fade-up`, `glow-pulse`, and `float` are defined in Tailwind config—apply via class names rather than inline CSS.
- Static imagery is bundled via Vite in `src/assets`; import as ES modules (see `Hero.tsx`).

## Data & state patterns

- Navigation state (e.g., scroll, mobile menu) is handled locally inside components like `Navbar`. Mirror that approach for similar UI-only state.
- No backend integration yet; placeholder copy and metrics are hard-coded arrays. Keep mock data colocated in the component unless wiring real APIs.

## Tooling & workflows

- Install deps with `bun install` (or `npm install`); scripts run equally with Bun: `bun dev`, `bun run build`, `bun run lint`, `bun run preview`.
- Dev server listens on port 8080 for IPv6 (`vite.config.ts`).
- ESLint is configured via `eslint.config.js`; run linting before committing when you introduce new components or hooks.

## Extending the app safely

- When introducing new service/feature cards, reuse `ServiceCard` and the Lucide icon set already in use.
- For new forms, lean on existing `Input`, `Textarea`, `Select`, and toast patterns from `Contact.tsx` to preserve UX.
- Keep shared layout elements (`Navbar`, `Footer`) responsive by following the breakpoint patterns already established.
