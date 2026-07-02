"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence", sublabel: "Since 1990", color: "#00E5FF" },
  { value: 100, suffix: "+", label: "Landmark Projects", sublabel: "Across the Kingdom", color: "#7ECFEA" },
  { value: 1000, suffix: "+", label: "Satisfied Clients", sublabel: "Nationwide Trust", color: "#C0C8D8" },
  { value: 50000, suffix: "m²", label: "Glass Installed", sublabel: "Per Year", color: "#00E5FF" },
];

function CountUp({
  target,
  duration = 2,
  suffix,
  color,
}: {
  target: number;
  duration?: number;
  suffix: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = Date.now();
    const end = start + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (now < end) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black tracking-tight" style={{ color }}>
      {count.toLocaleString()}
      <span className="text-3xl">{suffix}</span>
    </div>
  );
}

function StatPillar({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Pillar visual */}
      <div className="relative mb-8">
        {/* Pillar */}
        <motion.div
          className="relative w-24 rounded-t-2xl overflow-hidden"
          style={{ height: 180 + index * 20 }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass pillar */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${stat.color}20, ${stat.color}08)`,
              border: `1px solid ${stat.color}20`,
              borderBottom: "none",
            }}
          />

          {/* Shine */}
          <div
            className="absolute top-0 left-0 bottom-0 w-1/3"
            style={{
              background: `linear-gradient(to right, ${stat.color}15, transparent)`,
            }}
          />

          {/* Rising light */}
          <motion.div
            className="absolute left-0 right-0 h-8"
            style={{
              background: `linear-gradient(to bottom, ${stat.color}30, transparent)`,
            }}
            animate={inView ? { y: [180, -20] } : { y: 180 }}
            transition={{
              duration: 1.5,
              delay: index * 0.15 + 0.5,
              ease: "easeOut",
            }}
          />

          {/* Crystal top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded rotate-45 border"
            style={{
              background: `${stat.color}30`,
              borderColor: stat.color,
              boxShadow: `0 0 15px ${stat.color}`,
            }}
          />
        </motion.div>

        {/* Glow beneath */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full blur-xl"
          style={{ background: `${stat.color}30` }}
        />
      </div>

      {/* Number */}
      <CountUp
        target={stat.value}
        suffix={stat.suffix}
        color={stat.color}
        duration={2}
      />

      <div className="text-sm font-semibold text-white mt-2">{stat.label}</div>
      <div className="text-xs text-silver/40 mt-1 tracking-wider">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep via-graphite/10 to-midnight-deep" />

      {/* Horizontal lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${20 + i * 15}%`,
            background: "rgba(0,229,255,0.03)",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase font-medium">
              Numbers
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Excellence in{" "}
            <span className="text-gradient-cyan">Numbers</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-end justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <StatPillar key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
