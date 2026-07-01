"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    id: "oscar",
    name: "Oscar Tower",
    city: "Jeddah",
    type: "Commercial Tower",
    description:
      "42-story commercial tower featuring ASDAM's premium Low-E IGU curtain wall system, reducing energy consumption by 35% compared to standard glazing.",
    specs: { area: "18,000 m²", glass: "Low-E IGU", floors: "42", year: "2022" },
    position: { x: 22, y: 55 },
    color: "#00E5FF",
  },
  {
    id: "saudi-airlines",
    name: "Saudi Airlines HQ",
    city: "Jeddah",
    type: "Corporate Headquarters",
    description:
      "Flagship headquarters featuring structural point-fixed glazing and a monumental glass entrance atrium that welcomes millions of passengers.",
    specs: { area: "12,500 m²", glass: "Structural Glazing", floors: "28", year: "2021" },
    position: { x: 24, y: 52 },
    color: "#7ECFEA",
  },
  {
    id: "hira",
    name: "Hira Project",
    city: "Makkah",
    type: "Mixed-Use Development",
    description:
      "Sacred city development combining acoustic laminated glass with decorative Arabic-pattern sandblasting for a unique architectural identity.",
    specs: { area: "8,200 m²", glass: "Laminated + Decorative", floors: "16", year: "2023" },
    position: { x: 35, y: 48 },
    color: "#C0C8D8",
  },
  {
    id: "downey",
    name: "Downey Medical Center",
    city: "Riyadh",
    type: "Healthcare Facility",
    description:
      "State-of-the-art medical center requiring specialized X-ray protection glass, anti-bacterial surfaces, and safety-rated laminated panels throughout.",
    specs: { area: "6,800 m²", glass: "Medical Grade", floors: "12", year: "2023" },
    position: { x: 55, y: 42 },
    color: "#00E5FF",
  },
  {
    id: "yemenia",
    name: "Yemenia Hotel",
    city: "Jeddah",
    type: "5-Star Hotel",
    description:
      "Luxury hospitality project featuring floor-to-ceiling reflective glass facades with integrated smart glass privacy systems in all guest suites.",
    specs: { area: "15,000 m²", glass: "Reflective + Smart", floors: "32", year: "2020" },
    position: { x: 20, y: 58 },
    color: "#7ECFEA",
  },
  {
    id: "abha",
    name: "Abha Projects",
    city: "Abha",
    type: "Residential Complex",
    description:
      "Mountain city development using ASDAM's thermally broken IGU systems optimized for Abha's unique highland climate conditions.",
    specs: { area: "9,500 m²", glass: "Triple IGU", floors: "8", year: "2024" },
    position: { x: 48, y: 68 },
    color: "#A8B4C8",
  },
];

function ProjectMarker({
  project,
  selected,
  onClick,
}: {
  project: (typeof projects)[0];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className="absolute -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${project.position.x}%`, top: `${project.position.y}%` }}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
    >
      {/* Pulse rings */}
      {selected && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${project.color}` }}
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${project.color}` }}
            animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </>
      )}

      {/* Dot */}
      <div
        className="relative w-3 h-3 rounded-full border-2 transition-all duration-300"
        style={{
          background: selected ? project.color : `${project.color}40`,
          borderColor: project.color,
          boxShadow: selected ? `0 0 15px ${project.color}` : "none",
        }}
      />

      {/* Label */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded glass transition-all duration-300"
        style={{
          color: project.color,
          opacity: selected ? 1 : 0,
          background: `${project.color}10`,
          border: `1px solid ${project.color}30`,
        }}
      >
        {project.name}
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(projects[0]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-midnight-deep">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,229,255,0.04),transparent_70%)]" />

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
              Portfolio
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="display-lg text-white mb-4">
            Projects Across{" "}
            <span className="text-gradient-cyan">Saudi Arabia</span>
          </h2>
          <p className="text-silver/60 max-w-lg mx-auto">
            Landmark projects that define the built environment of the Kingdom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden glass border border-white/6" style={{ height: 450 }}>
              {/* KSA Map SVG placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, #0A1628, #020712)",
                }}
              />

              {/* Simplified Saudi Arabia outline using SVG */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid lines */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 10}
                    y1={0}
                    x2={i * 10}
                    y2={100}
                    stroke="rgba(0,229,255,0.05)"
                    strokeWidth="0.5"
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1={0}
                    y1={i * 10}
                    x2={100}
                    y2={i * 10}
                    stroke="rgba(0,229,255,0.05)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Saudi Arabia shape - simplified polygon */}
                <polygon
                  points="15,15 70,10 85,25 90,45 80,75 65,85 40,80 20,70 10,50 12,30"
                  fill="rgba(0,229,255,0.04)"
                  stroke="rgba(0,229,255,0.2)"
                  strokeWidth="0.5"
                />

                {/* Connection lines between projects */}
                {projects.map((p, i) =>
                  projects.slice(i + 1, i + 2).map((p2) => (
                    <line
                      key={`${p.id}-${p2.id}`}
                      x1={p.position.x}
                      y1={p.position.y}
                      x2={p2.position.x}
                      y2={p2.position.y}
                      stroke="rgba(0,229,255,0.1)"
                      strokeWidth="0.3"
                      strokeDasharray="2,2"
                    />
                  ))
                )}
              </svg>

              {/* Project markers */}
              {projects.map((project) => (
                <ProjectMarker
                  key={project.id}
                  project={project}
                  selected={selected?.id === project.id}
                  onClick={() => setSelected(selected?.id === project.id ? null : project)}
                />
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 text-xs text-white/30 tracking-wider font-mono">
                KINGDOM OF SAUDI ARABIA
              </div>
            </div>
          </div>

          {/* Project details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  className="h-full rounded-3xl glass border overflow-hidden flex flex-col"
                  style={{ borderColor: `${selected.color}20` }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Header */}
                  <div
                    className="h-32 relative flex items-end p-6"
                    style={{
                      background: `linear-gradient(135deg, ${selected.color}15, ${selected.color}05)`,
                    }}
                  >
                    <div>
                      <div
                        className="text-xs tracking-widest font-mono mb-1"
                        style={{ color: selected.color }}
                      >
                        {selected.type.toUpperCase()}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{selected.name}</h3>
                      <div className="text-sm text-silver/50">{selected.city}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <p className="text-sm text-silver/70 leading-relaxed mb-6">
                      {selected.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(selected.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-lg p-3 border border-white/5 bg-white/2"
                        >
                          <div className="text-xs text-silver/40 capitalize mb-1">{key}</div>
                          <div
                            className="text-sm font-semibold"
                            style={{ color: selected.color }}
                          >
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
                      style={{ color: selected.color }}
                    >
                      Request Similar Project →
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="h-full rounded-3xl glass border border-white/6 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-silver/40 text-sm">Select a project on the map</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Project list */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className={`text-left rounded-xl p-3 border transition-all duration-300 ${
                selected?.id === project.id
                  ? "border-cyan-400/30 bg-cyan-400/5"
                  : "border-white/5 bg-white/2 hover:border-white/15"
              }`}
            >
              <div
                className="w-1.5 h-1.5 rounded-full mb-2"
                style={{ background: project.color }}
              />
              <div className="text-xs font-semibold text-white truncate">{project.name}</div>
              <div className="text-xs text-silver/40">{project.city}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
