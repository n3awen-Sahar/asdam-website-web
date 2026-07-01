"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const certificates = [
  {
    name: "ISO 9001:2015",
    issuer: "Quality Management System",
    description: "International standard for quality management systems, ensuring consistent product quality.",
    color: "#00E5FF",
    icon: "◈",
  },
  {
    name: "EN 12150",
    issuer: "Tempered Glass Standard",
    description: "European standard for thermally toughened soda lime silicate safety glass.",
    color: "#7ECFEA",
    icon: "◇",
  },
  {
    name: "EN 14449",
    issuer: "Laminated Glass Standard",
    description: "European standard for laminated glass and laminated safety glass.",
    color: "#C0C8D8",
    icon: "◉",
  },
  {
    name: "EN 1279",
    issuer: "IGU Standard",
    description: "Glass in building — Insulating glass units. Complete series compliance.",
    color: "#00E5FF",
    icon: "□",
  },
  {
    name: "SASO Certified",
    issuer: "Saudi Standards",
    description: "Saudi Standards, Metrology and Quality Organization certification for all products.",
    color: "#A8B4C8",
    icon: "★",
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certificates)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative cursor-default"
      initial={{ opacity: 0, y: 40, rotateY: 30 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500 p-6"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${cert.color}10, rgba(255,255,255,0.04))`
            : "rgba(255,255,255,0.03)",
          borderColor: hovered ? `${cert.color}40` : "rgba(255,255,255,0.06)",
        }}
        animate={{
          rotateY: hovered ? 5 : 0,
          scale: hovered ? 1.04 : 1,
          y: hovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Glass shine on hover */}
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: `linear-gradient(135deg, ${cert.color}08 0%, transparent 50%)`,
            }}
          />
        )}

        {/* Rotating frame border on hover */}
        {hovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: `2px solid ${cert.color}20`,
              boxShadow: `0 0 30px ${cert.color}20, inset 0 0 30px ${cert.color}05`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* Frame decoration */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l" style={{ borderColor: `${cert.color}40` }} />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r" style={{ borderColor: `${cert.color}40` }} />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l" style={{ borderColor: `${cert.color}40` }} />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: `${cert.color}40` }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-4">
          <motion.div
            className="text-4xl mb-4"
            style={{ color: cert.color }}
            animate={{ rotate: hovered ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            {cert.icon}
          </motion.div>

          <div
            className="text-lg font-black mb-1 tracking-wider"
            style={{ color: cert.color }}
          >
            {cert.name}
          </div>

          <div className="text-xs text-white/60 tracking-widest uppercase mb-4">
            {cert.issuer}
          </div>

          <p className="text-xs text-silver/50 leading-relaxed">{cert.description}</p>

          {/* Verification badge */}
          <div
            className="mt-4 flex items-center gap-1 text-xs px-3 py-1 rounded-full"
            style={{
              background: `${cert.color}10`,
              border: `1px solid ${cert.color}20`,
              color: cert.color,
            }}
          >
            <span>✓</span>
            <span>Verified</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="certificates" className="relative py-32 overflow-hidden bg-midnight-deep">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,229,255,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              Certifications
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Globally{" "}
            <span className="text-gradient-cyan">Certified</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            Our certifications prove what our clients already know — ASDAM delivers to the highest international standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certificates.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
