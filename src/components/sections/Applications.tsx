"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const applications = [
  {
    id: "hotels",
    label: "Hotels & Resorts",
    icon: "🏨",
    color: "#00E5FF",
    description:
      "From lobby atriums to ocean-view facades, ASDAM glass creates the signature luminous environments that define 5-star hospitality in Saudi Arabia.",
    features: ["Floor-to-ceiling facades", "Structural glass lobbies", "Pool enclosures", "Privacy smart glass"],
    height: "h-64",
  },
  {
    id: "hospitals",
    label: "Hospitals",
    icon: "🏥",
    color: "#7ECFEA",
    description:
      "Hygienic, safety-rated laminated glass for medical environments. Our products meet international healthcare standards.",
    features: ["Anti-bacterial surfaces", "X-ray protection glass", "Safety laminated", "Easy-clean coatings"],
    height: "h-48",
  },
  {
    id: "towers",
    label: "Commercial Towers",
    icon: "🏢",
    color: "#C0C8D8",
    description:
      "High-performance curtain wall systems and structural glazing for Saudi Arabia's soaring commercial skylines.",
    features: ["Curtain wall systems", "Structural sealant glazing", "Solar control IGU", "Point-fixed facades"],
    height: "h-72",
  },
  {
    id: "airports",
    label: "Airports",
    icon: "✈️",
    color: "#00E5FF",
    description:
      "Large-format blast-resistant and solar-control glass for Saudi Arabia's world-class aviation infrastructure.",
    features: ["Blast-resistant glazing", "Large format panels", "Anti-reflective coating", "Security laminated"],
    height: "h-56",
  },
  {
    id: "mosques",
    label: "Mosques",
    icon: "🕌",
    color: "#A8B4C8",
    description:
      "Decorative and structural glass solutions that blend tradition with modernity for sacred Islamic architecture.",
    features: ["Stained glass effects", "Acoustic glass", "Decorative sandblasted", "UV filtering"],
    height: "h-60",
  },
  {
    id: "villas",
    label: "Residential Villas",
    icon: "🏡",
    color: "#7ECFEA",
    description:
      "Premium glass solutions for luxury homes — bi-fold systems, pool fencing, balustrades, and smart glass privacy.",
    features: ["Smart glass privacy", "Pool fencing", "Glass balustrades", "Bi-fold systems"],
    height: "h-44",
  },
  {
    id: "malls",
    label: "Shopping Centers",
    icon: "🛍️",
    color: "#00E5FF",
    description:
      "Dramatic glass atriums, skylights, and storefronts that maximize natural light and create memorable retail experiences.",
    features: ["Glass skylights", "Structural atriums", "Shop fronts", "Interior partitions"],
    height: "h-52",
  },
  {
    id: "industrial",
    label: "Industrial Buildings",
    icon: "🏭",
    color: "#C0C8D8",
    description:
      "Robust, energy-efficient glass systems for warehouses, factories, and industrial facilities across the Kingdom.",
    features: ["Polycarbonate roofing", "Industrial curtain wall", "Safety rated", "Thermal insulation"],
    height: "h-40",
  },
];

export default function Applications() {
  const [selected, setSelected] = useState<(typeof applications)[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="applications" className="relative py-32 overflow-hidden bg-graphite/20">
      <div className="absolute inset-0 bg-midnight-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,229,255,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              Applications
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="display-lg text-white mb-4">
            Glass for Every{" "}
            <span className="text-gradient-cyan">Application</span>
          </h2>
          <p className="text-silver/60 max-w-lg mx-auto">
            From sacred mosques to soaring towers — our glass transforms every type of building.
          </p>
        </motion.div>

        {/* City skyline visualization */}
        <div className="relative mb-16 overflow-hidden rounded-3xl glass border border-white/6" style={{ height: 320 }}>
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A1A] via-[#0A1628] to-[#0d1f3a]" />

          {/* Stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}

          {/* Buildings */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4">
            {applications.map((app, i) => (
              <motion.div
                key={app.id}
                className="relative cursor-pointer group flex-1 max-w-[100px]"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "bottom" }}
                onClick={() => setSelected(selected?.id === app.id ? null : app)}
              >
                {/* Building */}
                <div
                  className={`relative rounded-t-sm overflow-hidden transition-all duration-300 ${app.height} ${
                    selected?.id === app.id ? "brightness-125" : "brightness-75 group-hover:brightness-100"
                  }`}
                  style={{
                    background: `linear-gradient(to bottom, ${app.color}20, ${app.color}08)`,
                    border: `1px solid ${selected?.id === app.id ? app.color + "60" : app.color + "20"}`,
                    borderBottom: "none",
                  }}
                >
                  {/* Windows */}
                  <div className="p-1 grid grid-cols-3 gap-0.5 mt-2">
                    {[...Array(15)].map((_, wi) => (
                      <div
                        key={wi}
                        className="aspect-square rounded-[1px] transition-all duration-500"
                        style={{
                          background:
                            selected?.id === app.id || Math.random() > 0.4
                              ? `${app.color}50`
                              : `${app.color}10`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Glow on selection */}
                  {selected?.id === app.id && (
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${app.color}20, transparent)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>

                {/* Label */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-center whitespace-nowrap transition-colors"
                  style={{ color: selected?.id === app.id ? app.color : "rgba(192,200,216,0.4)" }}
                >
                  {app.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Moon */}
          <div className="absolute top-6 right-12 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#0A1628] translate-x-1 translate-y-0.5" />
          </div>

          {/* Click instruction */}
          {!selected && (
            <motion.div
              className="absolute bottom-8 right-8 text-xs text-silver/30 tracking-wider"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑ Click a building
            </motion.div>
          )}
        </div>

        {/* Selected application info */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              className="rounded-3xl glass border overflow-hidden"
              style={{ borderColor: `${selected.color}20` }}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl mb-4">{selected.icon}</div>
                  <div className="text-xs tracking-widest mb-3" style={{ color: selected.color }}>
                    APPLICATION
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{selected.label}</h3>
                  <p className="text-silver/70 leading-relaxed">{selected.description}</p>
                </div>
                <div>
                  <div className="text-xs tracking-widest text-silver/40 mb-4 uppercase">Glass Solutions Used</div>
                  <div className="space-y-2">
                    {selected.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 py-2 px-4 rounded-lg"
                        style={{ background: `${selected.color}08`, border: `1px solid ${selected.color}15` }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: selected.color }} />
                        <span className="text-sm text-white/80">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: `${selected.color}15`,
                      border: `1px solid ${selected.color}30`,
                      color: selected.color,
                    }}
                  >
                    Get Consultation →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
