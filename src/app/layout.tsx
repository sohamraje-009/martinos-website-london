import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Martino's London | Luxury Italian Dining",
    template: "%s | Martino's London",
  },
  description: siteConfig.description,
  keywords: [
    "Martino's",
    "London restaurant",
    "Italian fine dining",
    "Mayfair restaurant",
    "reserve table",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Martino's London",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    locale: "en_GB",
    siteName: "Martino's London",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martino's London",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
