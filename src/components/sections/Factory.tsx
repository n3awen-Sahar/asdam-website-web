"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const factorySteps = [
  {
    id: 1,
    title: "Raw Glass Storage",
    description: "Premium float glass sheets sourced from top global manufacturers, stored in temperature-controlled warehouses.",
    icon: "▦",
    color: "#7ECFEA",
    detail: "Up to 3,210 × 6,000mm jumbo sizes",
  },
  {
    id: 2,
    title: "Automatic Jumbo Cutting",
    description: "CNC-controlled automatic cutting line slices jumbo glass sheets with sub-millimeter precision.",
    icon: "✦",
    color: "#00E5FF",
    detail: "±0.3mm accuracy, 600m²/hr capacity",
  },
  {
    id: 3,
    title: "CNC Processing",
    description: "Computer-controlled machining centers perform complex shapes, notches, and special forms.",
    icon: "◉",
    color: "#C0C8D8",
    detail: "5-axis CNC for complex geometries",
  },
  {
    id: 4,
    title: "Drilling",
    description: "Precision diamond-tip drilling for hardware mounting points, countersinks, and special openings.",
    icon: "◎",
    color: "#7ECFEA",
    detail: "Diameter range: 3mm to 120mm",
  },
  {
    id: 5,
    title: "Edge Polishing",
    description: "Automated double-edging machines produce flawless bevels, polished edges, and ground finishes.",
    icon: "◇",
    color: "#00E5FF",
    detail: "7-step polishing sequence",
  },
  {
    id: 6,
    title: "Washing",
    description: "Industrial glass washing systems ensure spotless, contamination-free surfaces before coating or laminating.",
    icon: "≋",
    color: "#C0C8D8",
    detail: "DI water rinse, hot air dry",
  },
  {
    id: 7,
    title: "Heat Tempering Furnace",
    description: "Glass enters our 10-zone tempering furnace, heated to 620°C then rapidly quenched to achieve 4× base strength.",
    icon: "⊕",
    color: "#FF6B35",
    detail: "620°C, 15 tonnes/day capacity",
  },
  {
    id: 8,
    title: "Laminating",
    description: "PVB, EVA, or SGP interlayer bonded under heat and pressure in our autoclave for laminated safety glass.",
    icon: "≡",
    color: "#7ECFEA",
    detail: "Autoclave: 145°C, 12 bar",
  },
  {
    id: 9,
    title: "IGU Assembly",
    description: "Insulated Glass Units assembled with precision aluminum or warm-edge spacers, argon-filled for thermal performance.",
    icon: "□",
    color: "#00E5FF",
    detail: "U-value as low as 0.6 W/m²K",
  },
  {
    id: 10,
    title: "Quality Inspection",
    description: "Every unit passes through automated optical inspection and manual quality check to ensure zero defects.",
    icon: "◈",
    color: "#C0C8D8",
    detail: "100% inspection, ISO 9001:2015",
  },
  {
    id: 11,
    title: "Packaging",
    description: "Custom crating with edge protectors, foam padding, and moisture barriers for safe transport.",
    icon: "◼",
    color: "#7ECFEA",
    detail: "Export-grade packaging standards",
  },
  {
    id: 12,
    title: "Delivery",
    description: "Our dedicated fleet delivers across Saudi Arabia with GPS tracking and on-site unloading services.",
    icon: "▷",
    color: "#00E5FF",
    detail: "Same-week delivery across KSA",
  },
];

function StepCard({
  step,
  index,
  active,
  onClick,
}: {
  step: (typeof factorySteps)[0];
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer rounded-xl border transition-all duration-500 overflow-hidden ${
        active
          ? "border-cyan-400/50 bg-cyan-400/5"
          : "border-white/6 bg-white/2 hover:border-white/15 hover:bg-white/4"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {active && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${step.color}10, transparent 70%)`,
          }}
          layoutId="activeGlow"
        />
      )}

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-mono"
            style={{
              background: active ? `${step.color}20` : "rgba(255,255,255,0.05)",
              border: `1px solid ${active ? step.color + "40" : "rgba(255,255,255,0.1)"}`,
              color: active ? step.color : "#C0C8D8",
            }}
          >
            {step.id}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white truncate">{step.title}</div>
            <div
              className="text-xs mt-0.5 truncate"
              style={{ color: active ? step.color : "rgba(192,200,216,0.4)" }}
            >
              {step.detail}
            </div>
          </div>
        </div>
      </div>

      {/* Active indicator */}
      {active && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-0.5"
          style={{ background: step.color }}
          layoutId="activeBar"
        />
      )}
    </motion.div>
  );
}

export default function Factory() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const step = factorySteps[activeStep];

  return (
    <section id="factory" className="relative py-32 overflow-hidden bg-midnight-deep">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,53,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              Production Line
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Factory{" "}
            <span className="text-gradient-cyan">Experience</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            Follow the complete journey of glass through our state-of-the-art production facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Step list */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-2 content-start">
            {factorySteps.map((s, i) => (
              <StepCard
                key={s.id}
                step={s}
                index={i}
                active={activeStep === i}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>

          {/* Main view */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="relative rounded-3xl overflow-hidden border border-white/8 aspect-[4/3] flex flex-col"
                style={{ borderColor: `${step.color}20` }}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Animated scene */}
                <div className="flex-1 relative bg-graphite/50 flex items-center justify-center overflow-hidden">
                  {/* Grid floor */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${step.color}20 1px, transparent 1px), linear-gradient(90deg, ${step.color}20 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                      transform: "perspective(400px) rotateX(60deg)",
                      transformOrigin: "50% 100%",
                    }}
                  />

                  {/* Glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 50% 50%, ${step.color}15, transparent 70%)`,
                    }}
                  />

                  {/* Step icon */}
                  <motion.div
                    className="relative z-10 text-center"
                    animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div
                      className="text-8xl mb-4 mx-auto w-32 h-32 flex items-center justify-center rounded-3xl glass-strong border"
                      style={{ borderColor: `${step.color}30`, color: step.color }}
                    >
                      {step.icon}
                    </div>

                    {/* Orbiting particles */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: step.color,
                          top: "50%",
                          left: "50%",
                        }}
                        animate={{
                          x: Math.cos((i / 4) * Math.PI * 2) * 80,
                          y: Math.sin((i / 4) * Math.PI * 2) * 80,
                          rotate: [0, 360],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.75,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Step counter */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-white/30">
                    {String(activeStep + 1).padStart(2, "0")} / {String(factorySteps.length).padStart(2, "0")}
                  </div>

                  {/* Scan line animation */}
                  <motion.div
                    className="absolute left-0 right-0 h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)`,
                    }}
                    animate={{ y: [-50, 200] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Info panel */}
                <div className="p-6 glass border-t border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="text-xs font-mono tracking-wider"
                      style={{ color: step.color }}
                    >
                      STATION {String(step.id).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-white/20 font-mono">{step.detail}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed">{step.description}</p>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white disabled:opacity-20 transition-colors"
                    >
                      ← Previous
                    </button>
                    <div className="flex gap-1">
                      {factorySteps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStep(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all"
                          style={{
                            background: i === activeStep ? step.color : "rgba(255,255,255,0.2)",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveStep(Math.min(factorySteps.length - 1, activeStep + 1))}
                      disabled={activeStep === factorySteps.length - 1}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white disabled:opacity-20 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
