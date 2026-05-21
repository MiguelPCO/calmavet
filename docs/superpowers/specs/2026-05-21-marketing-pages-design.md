# Calmavet - Marketing Pages & Global Design System

**Goal:** Establish the global design system (colors, typography, UI components) and implement the primary marketing landing pages (Home, Services, How it Works, Zones, Vets, Pricing, FAQ) based on the approved brand identity.

## 1. Global Design System

The visual identity transmits calmness, professional medical care, warmth, and trust. It avoids looking like a cheap app, a cold clinic, or a childish brand.

### 1.1 Typography
- **Headings:** `Caprasimo` (Google Fonts). Used for major titles to provide a premium, editorial, and solid feel while maintaining warmth.
- **Body & UI:** `Inter` (Google Fonts). Used for body text, buttons, and UI elements for maximum legibility and clean aesthetics.

### 1.2 Color Palette
Based on the approved brand board:
- **Forest Green (`#1E3D2F`):** Primary. Trust, solidity, professionalism. Used for main headings, primary buttons, and dark text over light backgrounds.
- **Sage Green (`#A6B89E`):** Secondary. Equilibrium, calm. Used for soft backgrounds, secondary buttons, and UI accents.
- **Eucalyptus (`#C7D6CB`):** Secondary. Freshness, harmony. Used for soft backgrounds and cards.
- **Terracotta (`#C97D5D`):** Accent. Warmth, humanity. Used for highlights, accent buttons, and specific emotional calls to action.
- **Warm Ivory (`#FAF7F2`):** Background. Warm, soft background providing serenity. Default app background.
- **Soft White (`#FFFFFF`):** Surface. Clean surfaces for content (cards, forms).
- **Charcoal (`#1F1F1F`):** Text. Main text color for maximum legibility.

### 1.3 UI Components
- **Buttons:** Rounded pills (`rounded-full`).
  - Primary: Forest Green background, White text.
  - Secondary: Sage Green background, Forest Green text.
  - Outline: Transparent background, Forest Green border and text.
  - Accent: Terracotta background, White text.
- **Cards:** Soft White background, generous padding (e.g., 24px/32px), subtle rounded corners (`rounded-2xl` or `rounded-3xl`), and very soft shadows (`shadow-sm` or custom `0 4px 20px rgba(0,0,0,0.05)`).
- **Icons:** Linear, clean, usually rendered in Forest Green or placed inside Eucalyptus/Sage circular containers.

---

## 2. Home Page Structure

The Home page must quickly explain what Calmavet is, who it is for, and why it is better, driving users to check their zone or start a booking.

### 2.1 Hero Section
- **Title:** "Cuidado veterinario en la comodidad de tu hogar" (or "Veterinaria en casa, con calma y confianza.") using Caprasimo.
- **Subtitle:** "Atención veterinaria profesional, con calma y confianza."
- **CTAs:** Primary ("Reservar visita"), Secondary Outline ("Soy veterinario").
- **Visuals:** Warm, realistic image of a vet with a pet in a home environment.

### 2.2 Trust Bar
- Badges with icons: "Veterinarios colegiados", "Atención en casa", "Pago seguro".

### 2.3 Cómo Funciona (How it Works)
- 5 simple steps: Elige tu zona -> Selecciona el servicio -> Reserva una franja -> El veterinario acude -> Recibe seguimiento.
- Visual: Numbers inside Sage Green circles.

### 2.4 Servicios Destacados (Cards)
- Grid of services (Consulta general, Vacunación, Desparasitación, etc.).
- Cards use Soft White background, Forest Green icons.
- Each card has a short description and a "Reservar" link.

### 2.5 Beneficios (Grid)
- Highlight benefits: Sin transportín, Sin sala de espera, Atención sin prisas, Más comodidad.
- Focus on reducing stress for the pet.

### 2.6 Zonas de Cobertura (Buscador CP)
- "Empezamos en Madrid Sur."
- An input field for the Zip Code (Código Postal) to quickly check coverage, pushing users into the booking flow if covered, or a waitlist if not.

### 2.7 Veterinarios (Cards)
- "Profesionales colegiados, trato cercano."
- Cards showing vet photo, name, collegiate number, and a short humanizing quote.

### 2.8 FAQ (Accordion)
- Common questions regarding coverage, emergencies, and payment.

### 2.9 CTA Final
- "Bienestar que se siente en casa."
- Large section, possibly with Terracotta or Forest Green background, driving to the booking flow.

---

## 3. Other Marketing Pages (Briefly)

- **Servicios:** Detailed catalog of all services with filters.
- **Cómo funciona:** Extended explanation of the booking and visit process.
- **Zonas:** Map and list of active municipalities (Getafe, Leganés, Fuenlabrada, etc.).
- **Para Veterinarios:** B2B landing page focused on capturing veterinary supply.
- **Precios & FAQ:** Standard informational pages.

## 4. Technical Architecture for Marketing

- **Framework:** Next.js 15 (App Router).
- **Styling:** Tailwind CSS v4 using CSS variables mapped to the new color palette in `globals.css`.
- **Components:** React components for UI elements (Buttons, Cards, Accordions). Animations via `motion/react` (GSAP is installed but `motion` is often simpler for standard UI transitions; we will use standard Tailwind or Motion for UI).

## 5. Scope & Next Steps

This spec covers ONLY the Marketing Pages and the implementation of the Global Design System in Tailwind/CSS. 
The Multi-step Booking Flow (Option A) and the Dashboards (Option C) will be handled in separate subsequent specifications and plans.