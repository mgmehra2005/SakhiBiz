# SakhiBiz – Design System

**Last Updated:** 23 September 2026  
**Goal:** Extremely simple, rural-friendly, usable on low-end Android phones.

---

## 1. Design Principles

- Large touch targets (minimum 48px height for buttons)
- High contrast
- Minimal text
- Clear visual hierarchy
- Works well on 360px–400px width screens
- Feels trustworthy and friendly

---

---
name: Warm Dignity
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fbeae9'
  surface-container-high: '#f5e4e4'
  surface-container-highest: '#efdfde'
  on-surface: '#221a1a'
  on-surface-variant: '#57423d'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#feedec'
  outline: '#8b716b'
  outline-variant: '#dec0b9'
  surface-tint: '#a53b22'
  primary: '#a53b22'
  on-primary: '#ffffff'
  primary-container: '#ff7e5f'
  on-primary-container: '#721702'
  inverse-primary: '#ffb4a3'
  secondary: '#ac3231'
  on-secondary: '#ffffff'
  secondary-container: '#fd6d67'
  on-secondary-container: '#6d000c'
  tertiary: '#006e25'
  on-tertiary: '#ffffff'
  tertiary-container: '#40ba55'
  on-tertiary-container: '#004414'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0700'
  on-primary-fixed-variant: '#84240d'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#8b191d'
  tertiary-fixed: '#83fc8e'
  tertiary-fixed-dim: '#66df75'
  on-tertiary-fixed: '#002106'
  on-tertiary-fixed-variant: '#00531a'
  background: '#fff8f7'
  on-background: '#221a1a'
  surface-variant: '#efdfde'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies warmth, empowerment, and uncompromising visual clarity. Designed specifically for rural women micro-entrepreneurs, it honors their ambition and financial independence with an uplifting, dignified aesthetic. Rather than feeling clinical or utilitarian, the interface treats financial stewardship, stock monitoring, and customer communication with the vibrancy of an Indian market stall and the reassuring calm of a trusted community companion.

The design movement blends **Tactile Warmth** with **Optimized Functional Minimalism**:
- **Tactile & Welcoming:** Generous, soft rounded surfaces, tactile tap states, and warm sunset-tinted tones evoke natural earthen clay and marigold hues.
- **Empowering High Legibility:** Information hierarchy is direct and hyper-readable, designed to alleviate cognitive fatigue and build digital confidence for users with varying levels of literacy and screen familiarity.
- **Supportive Bilingual Flow:** Visual iconography, color cues, and bilingual text pairs (Hindi-English transliteration) sit side-by-side without clutter, maintaining generous touch-first affordances.

## Colors

The color palette reflects sunlight, clay, and growth, balanced strictly against high-contrast slate neutrals to guarantee AAA readability under direct sunlight and on budget smartphone screens.

### Palette Architecture
- **Primary Palette (Fresh Peach):**
  - Base Primary: `#FF7E5F` (Energetic, inviting, primary actions)
  - Light Tint / Hover: `#FF9E7D`
  - Active / Pressed: `#FF6B4A`
  - Gradient Primary: Linear gradient from `#FF9E7D` to `#FF6B4A` (used for high-priority Hero CTAs)
- **Secondary Palette (Terracotta):**
  - Accent / Warnings / Urgent Actions: `#D9534F` (Grounded earth tone, non-punitive alert)
  - Surface Accent: `#FBEBEA`
- **Tertiary Palette (Growth Mint & Prosperity Green):**
  - Income / Profit / Success: `#28A745` (Strict minimum 4.5:1 contrast against light backgrounds)
  - Positive Tint Container: `#E8F5E9` (Pill badges, transaction credits)
- **Neutral & Surface Hierarchy:**
  - Base Background Canvas: `#FFFDF9` (Ultra-warm off-white, reduces glare)
  - Surface Container / Card Base: `#FFFFFF`
  - Elevated Container / Secondary Sheet: `#FDF7F2` (Warm cream)
  - Subtle Borders & Separators: `#F3E3D3` (Soft sand line art)
  - High Contrast Text (Primary): `#2D2424` (Rich warm charcoal; 13:1 contrast ratio against `#FFFDF9`)
  - Subdued Text (Secondary / Subtitles): `#4A3E3D` (Warm slate; exceeds 7:1 contrast ratio)

## Typography

**Plus Jakarta Sans** provides open counters, tall x-height, and clean geometric curves that remain readable at low display resolutions.

### Typography Guidelines
- **Bilingual Stacking:** When rendering paired Hindi and English text, set the primary vernacular label at `label-md` or `body-md` (`#2D2424`) and place transliterated secondary microcopy directly below at `label-sm` (`#4A3E3D`). Maintain minimum 4px spacing between stacks.
- **Optical Accessibility:** Avoid light font weights (`300` or lower). The minimum weight across all body and utility labels is `400` (Regular) and `500` (Medium).
- **Numeric Clarity:** Numbers and monetary amounts (₹) must be rendered in `font-weight: 700` to prevent confusion during sales entry and account balances.

## Layout & Spacing

The layout is built mobile-first, targeting compact handheld devices with varying screen ratios.

### Layout Mechanics
- **Grid Structure:** Fluid 4-column layout on mobile devices (`<600px`), shifting to an 8-column layout on tablets (`600px - 1024px`).
- **Safe Margins:** Standard canvas margin is fixed at `16px` (`1rem`), with an internal screen gutters scale of `16px` (`1rem`) to maximize touch area without clipping thumb trajectories.
- **Rhythm & Spacing Scale:** Layout uses a base 4px/8px rhythm. 
  - `space-xs` (4px): Micro-spacing between icon and adjacent inline text.
  - `space-sm` (8px): Internal chip padding, spacing between stacked bilingual labels.
  - `space-md` (16px): Card internal padding, spacing between sibling list items.
  - `space-lg` (24px): Vertical spacing between distinct operational sections.
  - `space-xl` (32px): Separation before primary call-to-action blocks and sticky bottom bars.

## Elevation & Depth

To avoid confusing skeuomorphic clutter while maintaining physical touch confidence, the system pairs warm tonal depth with diffused ambient drop shadows.

### Elevation Levels
- **Level 0 (Flat / Canvas):** Surface color `#FFFDF9`. No shadow. Used for the overall page background.
- **Level 1 (Card & Content Surface):** `#FFFFFF` surface with a `1px` solid outline of `#F3E3D3` and an ambient shadow: `0 2px 8px rgba(74, 62, 61, 0.05)`. Used for passive content cards, inventory items, and record tiles.
- **Level 2 (Active Interactive Elements):** `#FFFFFF` or `#FDF7F2` surface with `0 4px 14px rgba(217, 83, 79, 0.08)`. Used for tapped cards, expanded accordion summaries, and dropdown panels.
- **Level 3 (Floating Controls / FAB / Bottom Sheets):** Gradient or pure peach tone with a warm directional drop: `0 8px 24px rgba(255, 126, 95, 0.35)`. Used for the Floating Action Button and the persistent Bottom Navigation Bar.

## Shapes

The shape vocabulary uses soft, welcoming geometry to communicate ease of use and friendliness.
- **Cards & Surfaces:** Standard radius is set to `16px` (`rounded-lg`), scaling up to `24px` (`rounded-xl`) for full-width highlight banners and modal containers.
- **Buttons & Chips:** Pill radii (`9999px`) are standard for action buttons, status pills, and interactive filters to clearly delineate them from structural content cards.
- **Form Inputs:** Uniform `12px` to `16px` rounded corners, preventing visual sharpness while preserving generous interior padding.

## Components

### Buttons
- **Touch Targets:** Absolute minimum height of `48px` (recommended `52px` to `56px` for primary actions) across all mobile touchpoints.
- **Primary Button:** Warm linear gradient (`#FF9E7D` to `#FF6B4A`), full pill radius (`9999px`), bold white text (`#FFFFFF`), with a subtle warm elevation shadow. Tap state transitions to `#FF6B4A`.
- **Secondary Button:** Outlined with `2px` solid `#FF7E5F`, surface transparent or `#FFFDF9`, text colored `#FF6B4A`.
- **Icon Support:** Every key transaction action (e.g., "Add Sale / बिक्री जोड़ें") is accompanied by a recognized, bold 24px icon aligned left.

### Floating Action Button (FAB)
- Fixed at the bottom-right viewport (`16px` right, `80px` bottom to clear navigation).
- Circular `56px × 56px` surface finished with Primary Peach Gradient and high-contrast white glyph (`+` or mic icon for voice entries).
- Elevation 3 shadow (`0 8px 24px rgba(255, 126, 95, 0.35)`).

### Pill Badges & Chips
- **Status / Profit Badge:** Mint container (`#E8F5E9`), `12px` internal horizontal padding, `6px` vertical padding, `9999px` radius. Text is `#28A745` (`label-sm`), displaying values like `+ ₹450 (प्राप्त)`.
- **Due / Terracotta Badge:** Soft clay container (`#FBEBEA`), text is `#D9534F` (`label-sm`), displaying values like `₹200 बाकी`.
- **Filter Chips:** Inactive in `#FFFFFF` with `#F3E3D3` border; active states fill with `#FF7E5F` and white text.

### Cards
- Standard background `#FFFFFF`, bordered by `1px solid #F3E3D3`, `16px` to `24px` border-radius.
- Internal padding is consistently `16px` (`space-md`).
- Clickable cards have a subtle scale effect (`transform: scale(0.98)`) and shadow boost on active touch.

### Input Fields
- Minimum height of `52px` with internal horizontal padding of `16px`.
- Border is `1.5px solid #F3E3D3` on default, animating to `2px solid #FF7E5F` on focus.
- Labels are persistent above the field (`label-md`), accompanied by supportive contextual placeholder examples (e.g., "Customer Name / ग्राहक का नाम").

### 5-Tab Bottom Navigation
- Anchored to the viewport bottom, height of `64px`, elevated by Level 3 subtle shadow and framed by top border `1px solid #F3E3D3` over `#FFFFFF`.
- 5 equidistant tabs: Home (होम), Khata/Ledger (खाता), Stock (सामान), Voice/Assistance (सखी सहायता), Profile (प्रोफाइल).
- Active item uses `#FF7E5F` for both the filled icon and label text; inactive items use `#4A3E3D`.
- Each tab consists of a `24px` icon stacked over a bilingual, concise subtext label (`11px`, `label-sm`).

## 6. Language

- UI labels: English
- Important content & scheme names: Hindi support where useful
- Keep language simple and direct
