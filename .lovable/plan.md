# Add Behance portfolio to the portfolio page

## Goal
Replace the current placeholder project cards on `/portfolio` with a clean link-out to the user's main Behance profile, keeping the existing editorial minimal design and category filter.

## What will change
1. **Data source**: Add a `behanceUrl` field to the agency config in `src/data/site.ts`.
2. **Portfolio page (`src/routes/portfolio.tsx`)**:
   - Keep the category filters (All / Branding / Social / Web / AI / Print) and responsive grid.
   - Replace the placeholder `projects` array with one featured Behance card that links to the main profile.
   - The card uses the existing rounded media frame, hover arrow, and reveal animation.
3. **Home work section (`src/components/site/Work.tsx`)**:
   - Update the selected-work grid so the single featured item also links out to Behance instead of `#contact`.
4. **SEO/UX**: Open Behance links in a new tab with `rel="noopener noreferrer"` and clear accessibility labels.
5. **No backend**: The form and other sections remain unchanged; no CMS or auth needed.

## Required from the user
- Paste the main Behance profile URL (e.g. `https://www.behance.net/username`).
- Optionally provide a title/label for the featured card (default: "View full portfolio on Behance").

## Technical notes
- Tailwind v4 semantic tokens only; no hardcoded colors.
- Keep reduced-motion and touch-device fallbacks already in place.
- Update `src/routes/sitemap[.]xml.ts` if the Behance link should be surfaced in metadata; otherwise no sitemap change needed.
