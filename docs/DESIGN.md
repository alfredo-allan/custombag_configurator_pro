# Design System Document: Industria Gráfica Alquistas

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Pressroom"**
This design system moves away from the generic "SaaS-dark" look toward a high-end, editorial experience that celebrates the tactile nature of premium printing. We treat the interface not as a software grid, but as a physical workspace where light and ink collide. By combining industrial "Inter" typography with a high-energy CMYK palette, we create a signature aesthetic that feels both utilitarian and luxurious.

To break the "template" look, we utilize **intentional asymmetry**. Hero elements should overlap container boundaries, and large-scale display type should feel "typeset" rather than just "placed." This is a premium experience; we prioritize breathing room and tonal depth over information density.

---

## 2. Colors & Surface Architecture
The color strategy is rooted in the CMYK printing process, set against a deep, multi-layered obsidian environment.

### The Palette
- **Core Background:** `#131313` (Surface)
- **Ink Accents:** Cyan (`#00FFFF`), Magenta (`#FF00FF`), Yellow (`#FFFF00`)
- **Neutral Utility:** `primary` (#FFFFFF) for high-contrast actions and primary headings.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be defined solely through background color shifts. 
- Use `surface_container_low` for secondary sections.
- Use `surface_container_highest` to draw immediate focus to a specific module.
- Transitions between sections should feel like different paper stocks laid on top of one another, not lines drawn on a page.

### The Glass & Gradient Rule
To move beyond a flat digital feel, floating elements (Modals, Navigation Bars) must utilize **Glassmorphism**. 
- **Token:** `surface_variant` at 60% opacity.
- **Effect:** `backdrop-filter: blur(24px)`.
- **Polish:** Main CTAs should use a subtle linear gradient (e.g., `secondary` to `secondary_container`) to provide "visual soul"—a slight sheen reminiscent of fresh ink.

---

## 3. Typography: Industrial Precision
We use **Inter** to achieve a clean, modern, and industrial look. The hierarchy is designed to feel like a premium catalog.

- **Display (lg/md):** Used for "Signature Moments"—large headings that can bleed off-center or overlap images. Tight letter spacing (-2%).
- **Headline (lg/md):** Authoritative and functional. Sets the tone for major sections.
- **Title (sm/md):** Bold, industrial, and utilitarian. Used for bag names and technical specs.
- **Body (md):** Optimized for readability in dark mode. Use `on_surface_variant` (#B9CACA) for secondary body text to reduce eye strain.
- **Label (md):** All-caps with increased tracking (+5% to +10%) for a technical, "spec-sheet" feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not a shadow; it is a **layer of light.**

### The Layering Principle
Hierarchy is achieved by stacking surface tiers.
- **Base Layer:** `surface` (#131313)
- **Sectional Shift:** `surface_container_low` (#1C1B1B)
- **Interactive Component:** `surface_container_high` (#2A2A2A)

### Ambient Shadows & Neon Glows
When a component must "float," use an **Ambient Shadow**:
- **Shadow:** 0px 20px 40px rgba(0, 0, 0, 0.4).
- **The Active Glow:** For selectable cards (bag types, color swatches), use a "Neon State." Instead of a border, apply a `2px` outer glow using the CMYK accent color (e.g., `drop-shadow: 0 0 8px #00FFFF`).

### The Ghost Border Fallback
If contrast is legally required for accessibility, use a **Ghost Border**:
- **Stroke:** 1px `outline_variant` at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons (High-Contrast)
- **Primary:** Background: `primary` (#FFFFFF), Text: `on_primary` (#003737). 16px corner radius. High contrast is non-negotiable.
- **Secondary:** Background: Transparent, Border: 2px `primary`, Text: `primary`.
- **Active Accent:** Used for "Print/Finalize" actions. Use a CMYK gradient (e.g., Cyan to Magenta).

### Selectable Cards & Lists
- **Design:** Forbid divider lines. Separate items using `8px` of vertical white space or a subtle shift to `surface_container_lowest`.
- **Interaction:** On tap/click, the card should scale slightly (0.98x) and ignite with a Cyan or Magenta neon glow effect.
- **Touch Target:** Every interactive element must maintain a minimum 44px x 44px hit area for mobile-first ergonomics.

### Input Fields (Personalization)
- **Style:** Filled style only (no ghost outlines).
- **Color:** `surface_container_highest`. 
- **Active State:** The bottom edge glows with a 2px Cyan line, simulating the "print head" of a machine.

### Tooltips & Overlays
- **Style:** Glassmorphic `surface_variant`. 
- **Corners:** `sm` (4px) or `md` (12px) depending on size, to maintain the industrial edge.

---

## 6. Do’s and Don’ts

### Do
- **Do** use large amounts of negative space to create a "Premium" feel.
- **Do** overlap images of bags with large Display-scale typography.
- **Do** use the CMYK colors sparingly—they are accents, not primary backgrounds.
- **Do** ensure all touch targets are generous (min 44px) to support on-the-go personalization.

### Don't
- **Don't** use pure #000000. It kills the depth of the tonal layering.
- **Don't** use standard 1px grey dividers. If you need a break, use a `12px` height gap.
- **Don't** use generic drop-shadows. Shadows should be wide, soft, and feel like ambient light.
- **Don't** mix the CMYK accents in equal measure. Pick one dominant accent (e.g., Cyan) for a specific user flow and use the others for secondary feedback.