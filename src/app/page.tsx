"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OurStory from "@/components/sections/OurStory";
import MissionVision from "@/components/sections/MissionVision";
import Factory from "@/components/sections/Factory";
import Products from "@/components/sections/Products";
import Applications from "@/components/sections/Applications";
import Projects from "@/components/sections/Projects";
import WhyAsdam from "@/components/sections/WhyAsdam";
import Statistics from "@/components/sections/Statistics";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative">
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <Navigation />

      <Hero />
      <About />
      <OurStory />
      <MissionVision />
      <Factory />
      <Products />
      <Applications />
      <Projects />
      <WhyAsdam />
      <Statistics />
      <Certificates />
      <Contact />

      <Footer />
    </main>
  );
}
