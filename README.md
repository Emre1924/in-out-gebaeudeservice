# In & Out Gebäudeservice

Next.js website foundation for the Dortmund building service business.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build`, `npm run typecheck`, and `npm run lint` before publishing.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
- Replace `public/images/hero-no-people.webp` with original company photography when available. If people appear in future photos, use authentic photographs of a man in appropriate work clothing, as requested.
- Confirm owner, address, phone, email, tax and dispute resolution details.
- Complete the privacy policy with the actual host and any added services; seek legal review.
- The contact form currently opens the visitor's email app. Add a secure server-side delivery service when an in-browser submission is required.

Content and service slugs are centralized in `src/lib/site.ts`. Individual service pages use `src/app/leistungen/[slug]`.

## Image placeholder

The current hero is a generated architectural visual placeholder, edited with the built-in image generation tool to remove the person, then encoded as WebP. It does not depict an actual customer property. Edit prompt: “Remove the person cleaning the glass completely. Reconstruct the glass doors, frames, outdoor greenery, and floor naturally behind them. Keep the exact architectural composition, crop, warm natural lighting, materials, colors, and photorealistic editorial style. No people, human figures, silhouettes, or reflections of people anywhere. No text or logos.”
