import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vignan High School",
    template: "%s | Vignan High School",
  },
  description: "Welcome to Vignan High School. Providing quality education since 1990.",
  openGraph: {
    title: "Vignan High School",
    description: "Welcome to Vignan High School. Providing quality education since 1990.",
    url: "https://www.vignanschool.in",
    siteName: "Vignan High School",
    images: [
      {
        url: "https://vignanschool.in/branch_02.jpg",
        width: 800,
        height: 600,
        alt: "Vignan High School",
      },
    ],
    locale: "en_IN",
    type: "website",
  }
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the desired font weights
  variable: "--font-montserrat", // Optional: Create a CSS variable for reusability
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Vignan High School" />
        <meta property="og:description" content="Welcome to Vignan High School. Providing quality education since 1990." />
        <meta property="og:url" content="https://www.vignanhighschool.com" />
        <meta name="geo.position" content="16.900756° N;80.099477° E" />
        <meta name="geo.placename" content="Jaggaiahpet, Andhra Pradesh" />
        <meta name="geo.region" content="IN" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className={`min-h-screen ${montserrat.className}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
