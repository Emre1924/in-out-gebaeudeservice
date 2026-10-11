# In & Out Gebäudeservice

Next.js App Router, TypeScript and Tailwind CSS v4 website for the Dortmund building service business.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run build`, `npm run typecheck`, and `npm run lint` before publishing. Development uses `.next-dev`; production uses `.next`.

## GitHub repository

The local repository uses `main`. Push the source code, lockfile, configuration, documentation and image assets. Keep `.env` files, dependencies, build output, logs and temporary files out of Git; `.env.example` is the public configuration template.

Connect the actual GitHub repository as `origin` before the first push. Do not put a token or password in the remote URL. Source images remain intact in this repository; files under `public/` will also be publicly accessible when deployed.

## Netlify deployment

The repository includes `netlify.toml`: Node.js 24, build command `npm run build`, publish directory `.next`. Use Netlify's automatic Next.js adapter; do not use a static export or upload the source directory as the published site. Install all build dependencies, including devDependencies.

After Netlify assigns the temporary public URL, set **NEXT_PUBLIC_SITE_URL** in Netlify to that exact HTTPS origin, without a path or trailing slash. Apply it to the production build environment, then trigger a fresh production deploy. This controls canonical URLs, Open Graph image URLs, the sitemap, robots.txt and the business schema. The variable is public, not a secret. Local development falls back to `http://localhost:3000`; that fallback must not be used in the public deployment. No email/API credentials are currently required.

When a custom domain is configured later, update the same variable and redeploy. Deploy previews should retain the production canonical origin.

## Before public launch

- Confirm owner, address, phone, email and dispute resolution details. The Impressum has been finalized with the supplied wording; the Datenschutz page still contains a visible pre-launch hosting notice and needs review before publishing.
- Complete the privacy policy for Netlify's actual hosting, connection logs, image delivery and any additional services.
- Confirm permission to publish authentic work photographs and identifiable property details. Files under `public/`, including source images, are publicly accessible.
- The contact form opens the visitor's email app; the visitor sends the email there. Verify the mailbox and call number. No server-side delivery is configured.
- No favicon or dedicated social-share image is configured yet. Open Graph uses the approved homepage hero.
- The remaining npm advisory concerns unpatched `braces` in development-only lint tooling. It is not imported by the website; lint only trusted repository patterns. Do not use `npm audit fix --force` to downgrade Next.js tooling.

## Content and images

Business details, services and representative service-card images are centralized in `src/lib/site.ts`. Authentic work examples and before/after relationships are in `src/lib/service-work.ts`. Preserve source photos and use separate optimized derivatives. Representative images are not evidence of completed work or real employees.

The approved hero shader is confined to the hero and lower meta strip. Keep the normal white/off-white backgrounds below it.
