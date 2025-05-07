import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import NavigationProgressBar from '@/components/NavigationProgressBar';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "UTC - Entreprise d'Exportation Industrielle",
  description: "Fournisseur leader de produits industriels de haute qualité pour l'exportation mondiale. Spécialiste en solutions automatisées, capteurs et technologies industrielles.",
  keywords: ["produits industriels", "automatisation", "export", "capteurs", "solutions industrielles", "ifm", "wago", "lenze"],
  authors: [{ name: "UTC" }],
  creator: "UTC",
  metadataBase: new URL('https://utc-export.com'),
  openGraph: {
    title: "UTC - Entreprise d'Exportation Industrielle",
    description: "Fournisseur leader de produits industriels de haute qualité pour l'exportation mondiale.",
    url: 'https://utc-export.com',
    siteName: 'UTC Export',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "UTC - Solutions Industrielles",
    description: "Produits industriels de haute qualité pour l'exportation mondiale",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/LOGO-UTC.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#F97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} 
          font-sans min-h-screen flex flex-col`}
      >
        <NavigationProgressBar />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
