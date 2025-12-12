import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: {
    template: '%s | PUBG: Black Budget Intel',
    default: 'PUBG: Black Budget - Leaks, News, Alpha Test & Guide',
  },
  description: "The #1 community hub for PUBG: Black Budget (Project Black Budget). Breaking news, leaks, weapon stats, loot maps, and extraction guides for Krafton's new shooter.",
  keywords: ["PUBG Black Budget", "Project Black Budget", "PUBG 2", "Krafton Extraction Shooter", "Black Budget Leaks", "PUBG Black Budget Alpha", "Black Budget Release Date", "PUBG Extraction"],
  openGraph: {
    title: 'PUBG: Black Budget Intel',
    description: "The ultimate resource for PUBG: Black Budget. Get the latest leaks, maps, and loadouts.",
    url: 'https://bbpubg.com',
    siteName: 'BB:PUBG Intel',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://bbpubg.com/images/social.jpg',
        width: 1200,
        height: 630,
        alt: 'PUBG: Black Budget Intel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBG: Black Budget Intel',
    description: "The #1 community hub for PUBG: Black Budget. Leaks, guides, and more.",
    images: ['https://bbpubg.com/images/social.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    shortcut: ['/favicon/favicon.ico'],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${oswald.variable} antialiased bg-slate-900 text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TYMYC4K3H0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TYMYC4K3H0');
          `}
        </Script>

        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
