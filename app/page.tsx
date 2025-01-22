"use client";

// import  'Montserrat', sans-serif !important;
import * as React from "react";
import { Montserrat } from "next/font/google";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import HomeContent from "@/components/HomeContent";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the desired font weights
  variable: "--font-montserrat", // Optional: Create a CSS variable for reusability
});

export default function Home() {
  return (
    <div>
      <Hero />
      <SubNav />
      <HomeContent />
    </div>
  );
}
