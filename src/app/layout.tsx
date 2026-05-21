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