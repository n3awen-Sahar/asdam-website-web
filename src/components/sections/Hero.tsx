"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-graphite to-midnight-deep animate-pulse" />
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-midnight-deep"
      id="home"
    >
      {/* 3D Scene */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <HeroScene />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-deep pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep/60 via-transparent to-midnight-deep/40 pointer-events-none" />

      {/* Scan lines effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
            Premium Technical Glass
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            className="display-xl font-bold text-white leading-none mb-2"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            BEYOND
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="display-xl font-bold text-gradient-cyan leading-none mb-6"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            GLASS
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-silver/80 font-light tracking-wide mb-2 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          Building Dreams in Glass
        </motion.p>

        <motion.p
          className="text-sm text-chrome/60 tracking-[0.15em] uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          Premium Technical Glass Manufacturing Since 1990
        </motion.p>

        {/* Caption */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          <div className="w-8 h-px bg-cyan-400/50" />
          <span className="text-xs text-silver/50 tracking-widest uppercase">
            30+ Years of Excellence · Trusted Across Saudi Arabia
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <MagneticButton href="#products" primary>
            Explore Solutions
          </MagneticButton>
          <MagneticButton href="#factory">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Watch Factory
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <span className="text-xs text-silver/40 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-cyan-400 to-transparent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ height: "50%" }}
          />
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 hidden lg:block">
        <motion.div
          className="glass rounded-xl p-4 border border-white/5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <div className="text-xs text-silver/40 tracking-widest uppercase mb-2">Est.</div>
          <div className="text-3xl font-bold text-white">1990</div>
          <div className="text-xs text-cyan-400/60 mt-1">Saudi Arabia</div>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
        primary
          ? "bg-cyan-400 text-midnight-deep hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
          : "glass border border-white/15 text-white hover:border-cyan-400/50 hover:text-cyan-400"
      }`}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.3s, color 0.3s, box-shadow 0.3s" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
