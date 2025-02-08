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
    url: "https://www.vignanhighschool.com",
    siteName: "Vignan High School",
    images: [
      {
        url: "https://www.vignanhighschool.com/branch_02.jpg",
        width: 800,
        height: 600,
        alt: "Vignan High School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  geo: {
    position: "16.900756° N;80.099477° E",
    placename: "Jaggaiahpet, Andhra Pradesh",
  },
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
