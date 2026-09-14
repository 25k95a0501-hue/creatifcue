# Add Behance portfolio embed to the portfolio page

## Goal
Display the user's Behance portfolio on the `/portfolio` page using Behance's official embedded project iframe, while keeping the page's premium editorial aesthetic.

## Provided asset
- Behance embed code:
  ```html
  <iframe src="https://www.behance.net/embed/project/255043449?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
  ```

## What will change
1. **Portfolio page (`src/routes/portfolio.tsx`)**:
   - Replace the placeholder project grid with a clean, responsive Behance embed.
   - Wrap the iframe in a rounded, bordered media frame that matches the site's design tokens.
   - Keep the page header, category filter pills (visually or functionally), and bottom CTA.
   - Add a text link below the embed: "Open on Behance" pointing to `https://www.behance.net/gallery/255043449/portfolio` with `target="_blank" rel="noopener noreferrer"`.
2. **Home work section (`src/components/site/Work.tsx`)**:
   - Update the featured project card to link to `/portfolio` or directly to the Behance gallery.
3. **Data (`src/data/site.ts`)**:
   - Store the Behance gallery URL and embed URL for easy editing.
4. **Responsive & accessibility**:
   - Make the iframe scale to full width on mobile and a contained max-width on desktop.
   - Add `title` attribute to the iframe for screen readers.
   - Preserve reduced-motion and focus styles.

## No backend changes
Form, navigation, and other sections stay exactly as they are.
