# Marketing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the new visual identity (colors, typography) and rebuild the Home page components based on the approved design spec.

**Architecture:** We will first update the global CSS and Tailwind configuration to introduce the new color palette and fonts. Then, we will create/update reusable UI components (Buttons, Cards). Finally, we will refactor the `src/app/page.tsx` and its child components to match the new layout.

**Tech Stack:** Next.js 15, React, Tailwind CSS v4, Lucide React.

---

### Task 1: Update Global Design System (CSS & Fonts)

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add Google Fonts to Layout**

Modify `src/app/layout.tsx` to include `Caprasimo` and `Inter`. Replace the existing font setup.

```tsx
import type { Metadata } from "next";
import { Caprasimo, Inter } from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caprasimo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Calmavet - Veterinaria a domicilio",
  description: "Cuidado veterinario en la comodidad de tu hogar, con calma y confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${caprasimo.variable} font-sans antialiased bg-ivory text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update Tailwind Theme Variables**

Modify `src/app/globals.css` to define the new color palette and map the fonts. Remove the old colors.

```css
@import "tailwindcss";

@theme {
  --color-forest: #1E3D2F;
  --color-sage: #A6B89E;
  --color-eucalyptus: #C7D6CB;
  --color-terracotta: #C97D5D;
  --color-ivory: #FAF7F2;
  --color-white: #FFFFFF;
  --color-charcoal: #1F1F1F;
  --font-heading: var(--font-caprasimo);
  --font-sans: var(--font-inter);
}

@layer base {
  body {
    background-color: var(--color-ivory);
    color: var(--color-charcoal);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: normal;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "style: apply new brand color palette and caprasimo font"
```

---

### Task 2: Create Reusable UI Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`

- [ ] **Step 1: Create Button Component**

Create `src/components/ui/Button.tsx`.

```tsx
import React from 'react';
import { cn } from '@/lib/utils'; // Assuming this exists from shadcn setup, or we'll create a simple one if not. Let's use simple clsx/tailwind-merge.

// If you don't have lib/utils, use: import { clsx, type ClassValue } from "clsx"; import { twMerge } from "tailwind-merge"; function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-forest text-white hover:bg-forest/90 focus:ring-forest",
      secondary: "bg-sage text-forest hover:bg-sage/90 focus:ring-sage",
      outline: "bg-transparent border border-forest text-forest hover:bg-ivory focus:ring-forest",
      accent: "bg-terracotta text-white hover:bg-terracotta/90 focus:ring-terracotta",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

- [ ] **Step 2: Create Card Component**

Create `src/components/ui/Card.tsx`.

```tsx
import React from 'react';
import { cn } from './Button';

export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]", className)}
      {...props}
    >
      {children}
    </div>
  );
};
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Button.tsx src/components/ui/Card.tsx
git commit -m "feat: add reusable button and card components"
```

---

### Task 3: Refactor Navbar & Hero

**Files:**
- Modify: `src/components/marketing/Navbar.tsx`
- Modify: `src/components/marketing/Hero.tsx`

- [ ] **Step 1: Update Navbar styling**

Modify `src/components/marketing/Navbar.tsx` to use the new colors and fonts.

```tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Cómo funciona', href: '/como-funciona' },
    { name: 'Zonas', href: '/zonas' },
    { name: 'Para veterinarios', href: '/para-veterinarios' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm border-b border-forest/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl text-forest flex items-center gap-2 font-heading">
          <div className="w-8 h-8 bg-eucalyptus rounded-lg flex items-center justify-center">
            <span className="text-forest text-lg">C</span>
          </div>
          <span className="mt-1">Calmavet</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/reservar">
            <Button variant="primary" className="px-6 py-2">Reservar visita</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory shadow-xl border-t border-forest/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xl text-charcoal py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/reservar"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <Button variant="primary" className="w-full">Reservar visita</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
```

- [ ] **Step 2: Update Hero styling**

Modify `src/components/marketing/Hero.tsx` with the new design.

```tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.1 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.8'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-ivory"
    >
      <div className="max-w-4xl mx-auto z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-forest leading-[1.1] mb-6"
        >
          Cuidado veterinario en la comodidad de tu hogar
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Atención veterinaria profesional, con calma y confianza. Reserva una visita para tu perro o gato con veterinarios colegiados.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/reservar" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full text-lg px-8 py-4">
              Reservar visita <span className="ml-2">→</span>
            </Button>
          </Link>
          <Link href="/para-veterinarios" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full text-lg px-8 py-4">
              Soy veterinario
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/marketing/Navbar.tsx src/components/marketing/Hero.tsx
git commit -m "feat: redesign Navbar and Hero with Caprasimo and new colors"
```

---

### Task 4: Refactor Home Page Content (Part 1)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with new structure (Trust bar & How it works)**

Modify `src/app/page.tsx`. We'll build the page incrementally. This step covers imports, Trust Bar, and How it Works.

```tsx
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Footer from "@/components/marketing/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Home, CreditCard, Stethoscope, Syringe, Bug, Activity, ClipboardHeart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="py-8 bg-white border-y border-forest/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-forest font-medium">
            <ShieldCheck size={24} className="text-sage" />
            Veterinarios colegiados
          </div>
          <div className="flex items-center gap-3 text-forest font-medium">
            <Home size={24} className="text-sage" />
            Atención en casa
          </div>
          <div className="flex items-center gap-3 text-forest font-medium">
            <CreditCard size={24} className="text-sage" />
            Pago seguro
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-forest mb-4">Cuidar de tu mascota en casa es sencillo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-eucalyptus -z-10"></div>
            
            {[
              { n: 1, t: "Elige tu zona", d: "Comprueba si hay veterinarios cerca." },
              { n: 2, t: "Selecciona el servicio", d: "Consulta, vacunación o revisión." },
              { n: 3, t: "Reserva una franja", d: "Elige el día y hora ideal." },
              { n: 4, t: "El veterinario acude", d: "Atención en su entorno seguro." },
              { n: 5, t: "Recibe seguimiento", d: "Indicaciones y próximos pasos." }
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-sage text-forest flex items-center justify-center text-2xl font-bold mb-6 font-heading border-4 border-ivory">
                  {step.n}
                </div>
                <h4 className="font-bold text-lg text-charcoal mb-2">{step.t}</h4>
                <p className="text-charcoal/70 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for the rest of the page to avoid errors in this step */}
      <div id="rest-of-page"></div>
      
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Trust Bar and How It Works sections to Home"
```

---

### Task 5: Refactor Home Page Content (Part 2)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add Services and Benefits sections**

Modify `src/app/page.tsx` to replace `<div id="rest-of-page"></div>` with the new sections.

```tsx
// Inside src/app/page.tsx, replace <div id="rest-of-page"></div> with:

      {/* Servicios Destacados */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-forest mb-4">Servicios veterinarios a domicilio</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Atención programada para el cuidado diario, preventivo y de seguimiento de tu mascota.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Stethoscope size={28}/>, title: "Consulta general", desc: "Para revisar síntomas, resolver dudas de salud o hacer seguimiento básico." },
              { icon: <Syringe size={28}/>, title: "Vacunación", desc: "Vacunas para perros y gatos sin desplazamientos ni sala de espera." },
              { icon: <Bug size={28}/>, title: "Desparasitación", desc: "Prevención adaptada a la edad, peso y estilo de vida de tu mascota." },
              { icon: <Activity size={28}/>, title: "Revisión geriátrica", desc: "Atención tranquila para mascotas mayores en su propio entorno." },
              { icon: <ClipboardHeart size={28}/>, title: "Analíticas y muestras", desc: "Recogida de muestras y coordinación con laboratorio cuando sea necesario." }
            ].map((service, i) => (
              <Card key={i} className="flex flex-col h-full border border-forest/5 hover:border-sage transition-colors">
                <div className="w-14 h-14 bg-eucalyptus rounded-full flex items-center justify-center text-forest mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading text-forest mb-3">{service.title}</h3>
                <p className="text-charcoal/80 mb-8 flex-grow">{service.desc}</p>
                <Link href="/reservar" className="text-forest font-semibold flex items-center gap-2 hover:text-terracotta transition-colors">
                  Reservar <span className="text-xl">→</span>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button variant="outline">Ver todos los servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Zonas y CTA Final */}
      <section className="py-24 px-6 bg-forest text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-ivory mb-6">Bienestar que se siente en casa.</h2>
          <p className="text-xl text-eucalyptus mb-12 max-w-2xl mx-auto">
            Empezamos en Madrid Sur. Comprueba si llegamos a tu código postal y dale a tu mascota la atención que merece sin estrés.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservar" className="w-full sm:w-auto">
              <Button variant="accent" className="w-full text-lg px-10 py-4">
                Comprobar zona y reservar
              </Button>
            </Link>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: complete Home page implementation with Services and CTA"
```

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-21-marketing-pages.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**