---
name: Kuka Design System
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#504443'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#827472'
  outline-variant: '#d4c3c1'
  surface-tint: '#795553'
  primary: '#321716'
  on-primary: '#ffffff'
  primary-container: '#4a2c2a'
  on-primary-container: '#bd928f'
  inverse-primary: '#eabcb8'
  secondary: '#43673d'
  on-secondary: '#ffffff'
  secondary-container: '#c4eeb8'
  on-secondary-container: '#496d42'
  tertiary: '#221f17'
  on-tertiary: '#ffffff'
  tertiary-container: '#37342b'
  on-tertiary-container: '#a29c90'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#eabcb8'
  on-primary-fixed: '#2e1413'
  on-primary-fixed-variant: '#5f3e3c'
  secondary-fixed: '#c4eeb8'
  secondary-fixed-dim: '#a9d19e'
  on-secondary-fixed: '#012202'
  on-secondary-fixed-variant: '#2c4f27'
  tertiary-fixed: '#e9e2d5'
  tertiary-fixed-dim: '#ccc6b9'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4a463d'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the "Artesian Organic" aesthetic—a sophisticated blend of Balinese craftsmanship and modern digital minimalism. It is designed to evoke a sense of **tranquility, groundedness, and premium quality**. 

The target audience includes discerning travelers and digital nomads who seek a "third space" that feels both culturally authentic and professionally functional. 

**Visual Pillars:**
- **Materiality:** Mimicking the textures of hand-carved limestone, polished teak, and the lushness of the Munduk, Kintamani highlands.
- **Craftsmanship:** Using subtle, intentional details that suggest the human touch, moving away from overly sterile "tech" interfaces.
- **Tranquility:** High use of whitespace (derived from the limestone beige) to allow the content to breathe, reflecting the open-air architecture of the cafe.
- **Modernity:** Clean grid lines and a structured layout ensure the high-end coffee experience translates seamlessly to a digital environment.

## Colors

The palette is derived directly from the natural elements of the Munduk, Kintamani landscape and Balinese architecture.

- **Primary (Deep Wood):** Used for primary actions, branding elements, and high-level headings. It represents the roasted coffee bean and the dark teak structures of the cafe.
- **Secondary (Rice Field Green):** An accent color used sparingly for success states, highlights, or "nature-integrated" call-to-outs.
- **Tertiary (Limestone Beige):** The foundational background color. It is softer and warmer than pure white, reducing eye strain and reinforcing the organic vibe.
- **Neutral (Charcoal):** A high-contrast neutral used primarily for body text and functional UI borders to ensure legibility.

**Color Application:**
Avoid stark black (#000000). Use the Primary Wood for deep shadows and the Neutral Charcoal for standard text to maintain a warm, "analog" feel.

## Typography

The typography strategy pairs a **literary, refined Serif** with a **modern, balanced Sans-Serif**.

- **Headlines:** `Libre Caslon Text` provides an authoritative, "old-world" charm that echoes traditional Balinese engraving and high-end editorial design.
- **Body & UI:** `Manrope` is used for its exceptional readability and geometric clarity. It provides the "modern" half of the brand identity, ensuring the digital experience feels efficient for the nomad user.

**Styling Note:** Use all-caps with generous letter spacing (0.1em) for `label-sm` and `label-lg` roles when used in buttons or navigation items to evoke a premium, "boutique" feel.

## Layout & Spacing

This design system utilizes a **fluid grid** with generous safe margins to mimic the open, airy feeling of the cafe’s pavilion architecture.

- **Desktop:** 12-column grid with 24px gutters. Use wide 64px margins to center the content and emphasize the "premium" nature of whitespace.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.
- **Rhythm:** Spacing follows a 4px base unit. Vertical rhythm should prioritize large "breathing rooms" (80px+) between major content sections to keep the user’s cognitive load low.

Components should favor internal padding over external margins to maintain "tangible" container shapes.

## Elevation & Depth

To maintain the artisanal feel, depth is communicated through **Tonal Layers** and **Soft Ambient Shadows** rather than sharp technical offsets.

- **Surfaces:** Use the Tertiary Beige (#E5DED1) as the base layer. Interactive surfaces (cards) should use a slightly lighter tint or a pure white to appear "raised."
- **Shadows:** Use extremely diffused shadows with a tint of the Primary Wood color (e.g., #4A2C2A at 8% opacity). This makes elements feel like they are resting on wood or stone rather than floating in digital space.
- **Low-Contrast Outlines:** Use 1px borders in a darker shade of the background (Beige-Dark) for non-elevated components like input fields. This mimics the subtle joints in stone masonry.

## Shapes

The shape language is **Soft (Level 1)**. 

While the brand is organic, it is also professional. Sharp edges (0px) are too aggressive, and fully rounded pills (Level 3) are too playful/tech-centric. 

A 0.25rem (4px) base radius provides a hint of "hand-sanded" softness to wood-inspired containers, while maintaining the structural integrity of a high-end brand. Use `rounded-lg` (8px) for larger card containers to emphasize their status as "objects."

## Components

- **Buttons:** Primary buttons use the Wood Brown (#4A2C2A) with white text. They should feel solid and heavy. Use `label-lg` with uppercase styling.
- **Input Fields:** Use a Limestone Beige background that is slightly darker than the page background, with a thin Charcoal border. No heavy shadows.
- **Cards:** White or light beige backgrounds with `rounded-lg` corners and a soft, wood-tinted ambient shadow.
- **Chips/Badges:** Use the Rice Field Green (#4B6F44) with low opacity for tags (e.g., "Munduk, Kintamani Origin", "100% Arabica").
- **Lists:** Use subtle horizontal dividers in Limestone-Dark. Avoid "boxy" separators; prefer whitespace and clear typography hierarchy to distinguish items.
- **Interactive Elements:** Use a "Tactile" hover state—a slight increase in shadow depth and a 2px upward shift to simulate the physical feel of a button being released.
