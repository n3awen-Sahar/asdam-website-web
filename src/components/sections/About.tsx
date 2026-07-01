"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const milestones = [
  {
    year: "1990",
    title: "Company Founded",
    description:
      "ASDAM Technical Glass established in Saudi Arabia with a vision to redefine architectural glass.",
    icon: "◆",
    color: "#00E5FF",
  },
  {
    year: "1998",
    title: "Regional Expansion",
    description:
      "Expanded operations across the Kingdom with state-of-the-art production facilities.",
    icon: "◈",
    color: "#7ECFEA",
  },
  {
    year: "2005",
    title: "Architectural Glass",
    description:
      "Pioneered premium architectural glass solutions for landmark buildings in Jeddah and Riyadh.",
    icon: "◉",
    color: "#C0C8D8",
  },
  {
    year: "2012",
    title: "Advanced Factory",
    description:
      "Launched our fully automated factory with international machinery and ISO certification.",
    icon: "◇",
    color: "#00E5FF",
  },
  {
    year: "2024",
    title: "Vision 2030",
    description:
      "Aligned with Saudi Vision 2030, supplying premium glass for megaprojects across the Kingdom.",
    icon: "★",
    color: "#7ECFEA",
  },
];

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} mb-16`}
    >
      {/* Card */}
      <motion.div
        className="w-5/12 glass rounded-2xl p-6 border border-white/8 group hover:border-cyan-400/30 transition-all duration-500 cursor-default"
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02, y: -4 }}
      >
        {/* Year badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-mono tracking-wider"
          style={{
            background: `${milestone.color}15`,
            border: `1px solid ${milestone.color}30`,
            color: milestone.color,
          }}
        >
          <span className="text-lg">{milestone.icon}</span>
          {milestone.year}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-cyan transition-all duration-300">
          {milestone.title}
        </h3>
        <p className="text-sm text-silver/60 leading-relaxed">
          {milestone.description}
        </p>

        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 30px ${milestone.color}10`,
          }}
        />
      </motion.div>

      {/* Center dot */}
      <div className="w-2/12 flex justify-center">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
        >
          <div
            className="w-4 h-4 rounded-full border-2 z-10"
            style={{
              borderColor: milestone.color,
              background: `${milestone.color}30`,
              boxShadow: `0 0 15px ${milestone.color}50`,
            }}
          />
          <motion.div
            className="absolute w-8 h-8 rounded-full"
            style={{ background: `${milestone.color}10` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Empty space */}
      <div className="w-5/12" />
    </div>
  );
}

function BlueprintBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 30}
            y1={0}
            x2={i * 30}
            y2={800}
            stroke="#7ECFEA"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 30}
            x2={1200}
            y2={i * 30}
            stroke="#7ECFEA"
            strokeWidth="0.5"
          />
        ))}

        {/* Building silhouettes */}
        <rect x="100" y="200" width="80" height="400" stroke="#7ECFEA" strokeWidth="1" fill="none" />
        <rect x="300" y="100" width="60" height="500" stroke="#7ECFEA" strokeWidth="1" fill="none" />
        <rect x="500" y="150" width="100" height="450" stroke="#7ECFEA" strokeWidth="1" fill="none" />
        <rect x="750" y="250" width="70" height="350" stroke="#7ECFEA" strokeWidth="1" fill="none" />
        <rect x="950" y="180" width="90" height="420" stroke="#7ECFEA" strokeWidth="1" fill="none" />

        {/* Windows */}
        {[100, 300, 500, 750, 950].map((x, bi) => {
          const w = [80, 60, 100, 70, 90][bi];
          const y = [200, 100, 150, 250, 180][bi];
          return Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <rect
                key={`w${bi}-${row}-${col}`}
                x={x + 10 + col * (w / 3 - 2)}
                y={y + 20 + row * 50}
                width={w / 3 - 8}
                height={30}
                stroke="#7ECFEA"
                strokeWidth="0.5"
                fill="none"
              />
            ))
          );
        })}
      </svg>

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        animate={{ y: [0, 800, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-midnight-deep"
    >
      <BlueprintBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              Our Journey
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Three Decades of{" "}
            <span className="text-gradient-cyan">Glass Excellence</span>
          </h2>

          <p className="text-silver/60 max-w-xl mx-auto text-base leading-relaxed">
            From a vision in 1990 to becoming Saudi Arabia's premier architectural
            glass manufacturer — every milestone shaped by precision and passion.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
          </div>

          {milestones.map((milestone, i) => (
            <MilestoneCard key={milestone.year} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
