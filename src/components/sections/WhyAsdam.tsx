"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "◎",
    title: "30+ Years Experience",
    description: "Founded in 1990, we bring three decades of glass manufacturing expertise to every project.",
    color: "#00E5FF",
    stat: "30+",
    statLabel: "Years",
  },
  {
    icon: "⚙",
    title: "Latest International Machinery",
    description: "State-of-the-art European and Asian machinery ensures precision and quality impossible to replicate.",
    color: "#7ECFEA",
    stat: "12",
    statLabel: "Machines",
  },
  {
    icon: "◈",
    title: "Vision 2030 Aligned",
    description: "Proudly contributing to Saudi Arabia's grand Vision 2030 infrastructure transformation.",
    color: "#C0C8D8",
    stat: "100%",
    statLabel: "Saudi",
  },
  {
    icon: "✦",
    title: "Strict Quality Control",
    description: "Every unit undergoes ISO 9001:2015 certified quality inspection before leaving our facility.",
    color: "#00E5FF",
    stat: "ISO",
    statLabel: "Certified",
  },
  {
    icon: "▷",
    title: "Fast Nationwide Delivery",
    description: "Our dedicated logistics network delivers anywhere in the Kingdom within days, not weeks.",
    color: "#7ECFEA",
    stat: "KSA",
    statLabel: "Coverage",
  },
  {
    icon: "◇",
    title: "Certified Manufacturing",
    description: "Multiple international certifications ensure our products meet the most demanding specifications.",
    color: "#A8B4C8",
    stat: "5+",
    statLabel: "Certs",
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className="relative rounded-2xl border border-white/6 glass p-6 h-full overflow-hidden"
        whileHover={{ scale: 1.03, y: -6, borderColor: `${reason.color}30` }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Mouse gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${reason.color}08, transparent 70%)`,
          }}
        />

        {/* Top shine */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${reason.color}50, transparent)`,
          }}
        />

        {/* Stat */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${reason.color}10`,
              border: `1px solid ${reason.color}20`,
              color: reason.color,
            }}
          >
            {reason.icon}
          </div>

          <div className="text-right">
            <div
              className="text-2xl font-black"
              style={{ color: reason.color }}
            >
              {reason.stat}
            </div>
            <div className="text-xs text-silver/40 tracking-widest">{reason.statLabel}</div>
          </div>
        </div>

        <h3 className="text-base font-bold text-white mb-3 group-hover:text-gradient-cyan transition-all duration-300">
          {reason.title}
        </h3>
        <p className="text-sm text-silver/60 leading-relaxed">{reason.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function WhyAsdam() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="why" className="relative py-32 overflow-hidden">
      {/* Glass wall background */}
      <div className="absolute inset-0 bg-midnight-deep" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,229,255,0.06),transparent_60%)]" />

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
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            The ASDAM{" "}
            <span className="text-gradient-cyan">Difference</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            Six reasons why Saudi Arabia's most demanding projects trust ASDAM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
