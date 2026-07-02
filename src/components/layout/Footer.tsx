"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const footerLinks = {
  Products: [
    "Insulated Glass Units",
    "Tempered Glass",
    "Laminated Glass",
    "Low-E Glass",
    "Reflective Glass",
    "Decorative Glass",
  ],
  Company: ["About ASDAM", "Our Factory", "Projects", "Certificates", "Vision 2030"],
  Contact: [
    "Get a Quote",
    "Technical Support",
    "Careers",
    "info@asdam.com.sa",
    "+966 12 XXX XXXX",
  ],
};

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer className="relative overflow-hidden bg-midnight-deep border-t border-white/5">
      {/* Animated glass reflection */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.4) 30%, rgba(0,229,255,0.8) 50%, rgba(0,229,255,0.4) 70%, transparent 100%)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Moving light effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 w-96 h-96 rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: "#00E5FF" }}
          animate={{ x: ["-20%", "120%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl glass-strong border border-cyan-400/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1" fill="rgba(0,229,255,0.6)" />
                    <rect x="13" y="3" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="3" y="13" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="13" y="13" width="8" height="8" rx="1" fill="rgba(0,229,255,0.3)" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-white font-black text-xl tracking-wider">ASDAM</div>
                <div className="text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
                  Technical Glass
                </div>
              </div>
            </div>

            <p className="text-sm text-silver/50 leading-relaxed mb-6 max-w-xs">
              Saudi Arabia's premier architectural glass manufacturer since 1990. Supplying premium glass for the Kingdom's most iconic buildings.
            </p>

            {/* Vision 2030 badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-silver/60">
                Proud Contributor to{" "}
                <span className="text-white font-semibold">Vision 2030</span>
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg glass border border-white/5 flex items-center justify-center text-xs text-silver/40 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + ci * 0.1, duration: 0.6 }}
            >
              <h4 className="text-sm font-bold text-white mb-4 tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-silver/50 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs text-silver/30">
            © {new Date().getFullYear()} ASDAM Technical Glass Co. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-silver/30">
            <a href="#" className="hover:text-silver/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-silver/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-silver/60 transition-colors">ISO Certificates</a>
          </div>
          <div className="text-xs text-silver/20">
            Jeddah, Kingdom of Saudi Arabia
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
