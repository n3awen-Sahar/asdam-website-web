"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Factory", href: "#factory" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-dark py-3" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-lg glass-strong border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <GlassLogo />
              </div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-cyan" />
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-wider leading-none">
                ASDAM
              </div>
              <div className="text-xs text-cyan-400/70 tracking-[0.2em] uppercase">
                Technical Glass
              </div>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative text-sm text-silver/80 hover:text-white transition-colors duration-300 tracking-wide group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/10 text-sm text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Get Quote
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GlassLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="1"
        fill="rgba(0,229,255,0.6)"
        stroke="rgba(0,229,255,0.9)"
        strokeWidth="0.5"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="1"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.5"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="1"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.5"
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="1"
        fill="rgba(0,229,255,0.3)"
        stroke="rgba(0,229,255,0.6)"
        strokeWidth="0.5"
      />
    </svg>
  );
}
