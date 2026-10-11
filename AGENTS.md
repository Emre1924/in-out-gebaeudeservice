# Repository Guidelines

Whatever action you can perform yourself, do it yourself rather than asking the user to do it. This includes starting the development server when needed and performing verification after changes. For website changes, verify the affected pages yourself at appropriate desktop and mobile viewport sizes, and check for visual regressions, broken layouts, navigation issues, console/runtime errors, and broken interactions. Continue to run build, typecheck, and lint before handing off changes.

## Project Structure & Module Organization

This is a Next.js App Router site written in TypeScript. Routes and metadata live in `src/app/`; shared UI lives in `src/components/`. Keep business details and the service catalog in `src/lib/site.ts` so phone numbers, email, and service slugs stay consistent. Store replaceable images in `public/images/`. `work/` is for temporary assets, and `outputs/` is for handoff files; neither belongs in the website build.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies.
- `npm run dev` starts the local development server.
- `npm run build` creates and validates the production build.
- `npm run start` serves that build locally.
- `npm run typecheck` checks TypeScript without emitting files.
- `npm run lint` runs the Next.js ESLint rules.

Run build, typecheck, and lint before handing off changes.

## Coding Style & Naming Conventions

Use two-space indentation and keep React components small and readable. Name components in kebab-case files such as `contact-form.tsx`; use PascalCase for component functions and camelCase for variables. Follow the existing Tailwind CSS v4 utility style and use `src/app/globals.css` for shared design tokens. Prefer semantic HTML, descriptive image alt text, and visible keyboard focus. Keep German copy concise and avoid unverified claims.

Use `@phosphor-icons/react` as the default and sole interface icon library. Use Phosphor icons consistently for phone, email, location, arrows, navigation, and similar controls. Import from `@phosphor-icons/react/ssr` in React Server Components and from the package root in Client Components. Do not mix icon libraries or create custom SVG icons when Phosphor provides a suitable icon.

## Testing Guidelines

There is no automated test framework or coverage target yet. For each change, run the three checks above and inspect affected routes in a browser at desktop and phone widths. Check navigation, calls to action, image loading, and the contact flow. If adding tests later, place them beside the feature as `*.test.ts` or `*.test.tsx` and add a documented `npm test` script.

## Commit & Pull Request Guidelines

The repository has an initial website baseline commit. Use short imperative subjects, for example `Improve mobile contact form`. Pull requests should explain the change, list verification performed, and include desktop and mobile screenshots for visual updates. Link an issue when one exists.

## Configuration & Content Safety

Set `NEXT_PUBLIC_SITE_URL` to the assigned Netlify HTTPS origin before public deployment, then update it when a custom domain is configured. Confirm legal and contact details before publishing, and update the privacy page for the actual host. The current form prepares an email in the visitor's mail app. Do not present generated people as real staff; future photos featuring a person should use an authentic image of a man in appropriate clothing.
