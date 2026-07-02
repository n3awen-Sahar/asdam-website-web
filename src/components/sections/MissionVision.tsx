"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const cubes = [
  {
    id: "mission",
    label: "Mission",
    icon: "◎",
    color: "#00E5FF",
    title: "Our Mission",
    content:
      "To manufacture and supply premium quality architectural glass that empowers Saudi Arabia's built environment. We combine decades of expertise with the latest international technology to deliver glass solutions that meet the highest global standards.",
    points: [
      "Uncompromising quality in every panel",
      "Customer-first engineering approach",
      "Sustainable production practices",
      "Fast & reliable nationwide delivery",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    icon: "◉",
    color: "#7ECFEA",
    title: "Our Vision",
    content:
      "To be recognized as the leading architectural glass manufacturer in the Middle East — a cornerstone of Saudi Vision 2030, supplying glass for the Kingdom's most iconic buildings and megaprojects.",
    points: [
      "Largest glass factory in Saudi Arabia",
      "Export across the GCC and beyond",
      "Pioneer in smart glass technology",
      "Benchmark for quality in the region",
    ],
  },
  {
    id: "values",
    label: "Values",
    icon: "◈",
    color: "#C0C8D8",
    title: "Our Values",
    content:
      "Built on a foundation of integrity, precision, and innovation. Every decision we make reflects our commitment to excellence and our respect for the trust our clients place in us.",
    points: [
      "Integrity in every transaction",
      "Precision in every process",
      "Innovation in every solution",
      "Partnership with every client",
    ],
  },
];

function FloatingCube({
  cube,
  index,
}: {
  cube: (typeof cubes)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setOpen(!open)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          borderColor: open ? `${cube.color}40` : "rgba(255,255,255,0.08)",
          background: open
            ? `linear-gradient(135deg, ${cube.color}08, rgba(255,255,255,0.04))`
            : "rgba(255,255,255,0.03)",
        }}
        animate={
          !open
            ? { y: [0, -8, 0] }
            : { y: 0 }
        }
        transition={
          !open
            ? { duration: 3 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
            : {}
        }
        whileHover={{ scale: 1.02, borderColor: `${cube.color}30` }}
      >
        {/* Glass shine */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${cube.color}60, transparent)`,
          }}
        />

        {/* Content */}
        <div className="p-8">
          {/* Icon + label */}
          <div className="flex items-center justify-between mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{
                background: `${cube.color}15`,
                border: `1px solid ${cube.color}30`,
              }}
            >
              {cube.icon}
            </div>
            <motion.div
              className="w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-white/50"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              +
            </motion.div>
          </div>

          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: cube.color }}
          >
            {cube.label}
          </h3>
          <p className="text-sm text-silver/50">
            Click to {open ? "close" : "reveal"}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/8">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {cube.title}
                  </h4>
                  <p className="text-silver/70 text-sm leading-relaxed mb-6">
                    {cube.content}
                  </p>

                  <div className="space-y-2">
                    {cube.points.map((point, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: cube.color }}
                        />
                        <span className="text-sm text-silver/70">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Light beam effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${cube.color}10, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 overflow-hidden bg-midnight-deep" id="mission">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,229,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(126,207,234,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              Foundation
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Built on{" "}
            <span className="text-gradient-cyan">Purpose</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            Click each crystal to reveal what drives ASDAM forward every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cubes.map((cube, i) => (
            <FloatingCube key={cube.id} cube={cube} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
