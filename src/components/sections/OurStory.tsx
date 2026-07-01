"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const storySteps = [
  {
    step: "01",
    title: "From Desert Sand",
    subtitle: "The Beginning",
    description:
      "Pure silica sand from the Arabian Peninsula — the same raw material that has been transformed into glass for thousands of years. ASDAM begins with the finest ingredients.",
    visual: "🌊",
    color: "#C8A87A",
  },
  {
    step: "02",
    title: "Molten Transformation",
    subtitle: "1600°C Precision",
    description:
      "At temperatures exceeding 1600°C, raw materials fuse into liquid crystal. Our proprietary melting process ensures unmatched purity and optical clarity.",
    visual: "🔥",
    color: "#FF6B35",
  },
  {
    step: "03",
    title: "Architectural Panels",
    subtitle: "Formed & Refined",
    description:
      "Molten glass is precisely formed into large architectural panels. Float glass, bent glass, curved facades — every form is possible with our advanced forming lines.",
    visual: "⬜",
    color: "#7ECFEA",
  },
  {
    step: "04",
    title: "Skylines of Tomorrow",
    subtitle: "Built to Last",
    description:
      "ASDAM glass rises into the Saudi skyline. From luxury hotels to hospitals, airports to mosques — our glass becomes the windows through which the Kingdom sees its future.",
    visual: "🏙️",
    color: "#00E5FF",
  },
];

function StoryCard({
  step: { step, title, subtitle, description, visual, color },
  index,
}: {
  step: (typeof storySteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center gap-12 mb-24 last:mb-0"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Step number */}
      <div className="absolute -left-4 top-0 text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
        {step}
      </div>

      {/* Visual side */}
      <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div
          className="relative rounded-3xl overflow-hidden glass border border-white/8 aspect-video flex items-center justify-center group"
          style={{ borderColor: `${color}20` }}
        >
          {/* Animated bg */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}40, transparent 70%)`,
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(${color}50 1px, transparent 1px), linear-gradient(90deg, ${color}50 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Main icon / animation */}
          <motion.div
            className="text-8xl select-none relative z-10"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {visual}
          </motion.div>

          {/* Step badge */}
          <div
            className="absolute top-4 left-4 text-xs font-mono tracking-wider px-2 py-1 rounded"
            style={{
              color,
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
          >
            STEP {step}
          </div>

          {/* Flowing particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: color }}
              initial={{
                x: Math.random() * 300 - 150,
                y: 100,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 300 - 150,
                y: -100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Text side */}
      <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div
          className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
          style={{ color }}
        >
          {subtitle}
        </div>
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
        <div
          className="w-12 h-0.5 mb-6"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
        <p className="text-silver/70 leading-relaxed text-lg">{description}</p>
      </div>
    </motion.div>
  );
}

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 overflow-hidden" id="story">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep via-graphite/20 to-midnight-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              The Process
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            From Sand to{" "}
            <span className="text-gradient-cyan">Skyline</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            The remarkable journey of glass — from raw earth to architectural masterpiece.
          </p>
        </motion.div>

        {storySteps.map((step, i) => (
          <StoryCard key={step.step} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
