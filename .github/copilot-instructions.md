---
description: 'Next.js (Pages Router) + Tailwind v4 development standards'
applyTo: '**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css'
---

# Next.js + Tailwind Development Instructions

Instructions for high-quality Next.js applications with Tailwind CSS v4 styling and TypeScript.

## Project Context

- **Framework**: Next.js 16+ (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configuration in \styles/globals.css\)
- **UI Library**: Shadcn UI (manual implementation in \components/ui\)
- **Icons**: Lucide React

## Development Standards

### Architecture
- **Pages Router**: Use \pages/\ directory for routes.
- **Components**: Store reusable components in \components/\.
  - \components/ui\: Primitive UI components (Buttons, Inputs, etc.).
  - \components/\: Feature-specific components (Navbar, Hero).
- **Layouts**: Use \pages/_app.tsx\ for global providers (ThemeProvider) and layout wrappers.

### TypeScript
- Strict mode enabled.
- Use \interface\ for props definitions.
- Avoid \ny\; use \unknown\ or specific types.

### Styling (Tailwind v4)
- Configuration is in \styles/globals.css\ using \@theme\.
- Use CSS variables for theming (Dark/Light mode).
- Use \clsx\ and \	ailwind-merge\ for dynamic class names (via \lib/utils.ts\).
- **Dark Mode**: Implemented via \
ext-themes\ and CSS variables (\--background\, \--foreground\).

### State Management
- Use React Hooks (\useState\, \useEffect\) for client state.
- Use Context API for global UI state if needed.

### Performance
- Use \
ext/image\ for images.
- Use \
ext/link\ for client-side navigation.

## Implementation Process
1.  **Scaffold**: Create components in \components/\.
2.  **Style**: Apply Tailwind classes directly. Use \cn()\ utility for conditional classes.
3.  **Integrate**: Import and use in \pages/\.
4.  **Theme**: Ensure colors use CSS variables for dark mode compatibility.

## Key Files
- \pages/_app.tsx\: Global entry point, providers.
- \styles/globals.css\: Tailwind v4 config and global styles.
- \lib/utils.ts\: Utility functions (class merging).

