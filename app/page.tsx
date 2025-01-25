"use client";

import * as React from "react";

import Hero from "@/components/Hero";
import SubNav from "@/components/SubNav";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div>
      <Hero />
      <SubNav />
      <HomeContent />
    </div>
  );
}
