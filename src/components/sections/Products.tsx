"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const products = [
  {
    id: "igu",
    name: "Insulated Glass Units",
    shortName: "IGU",
    tagline: "Maximum Thermal Performance",
    description:
      "Double and triple glazed units with argon or krypton fill, warm-edge spacer bars, and Low-E coatings achieving U-values as low as 0.6 W/m²K.",
    specs: [
      { label: "U-Value", value: "0.6 W/m²K" },
      { label: "Thickness", value: "Up to 60mm" },
      { label: "Max Size", value: "3.2 × 6.0m" },
      { label: "Gas Fill", value: "Argon / Krypton" },
    ],
    layers: ["Outer Glass", "Air Gap", "Spacer", "Inner Glass"],
    color: "#00E5FF",
    icon: "⊟",
  },
  {
    id: "tempered",
    name: "Tempered Glass",
    shortName: "TEMP",
    tagline: "4× Stronger than Standard",
    description:
      "Heat-treated in our state-of-the-art tempering furnace to create glass that is 4-5 times stronger than annealed glass with safe fragmentation on breakage.",
    specs: [
      { label: "Strength", value: "4-5× base" },
      { label: "Thickness", value: "4mm - 19mm" },
      { label: "Max Size", value: "2.44 × 5.0m" },
      { label: "Standard", value: "EN 12150" },
    ],
    layers: ["Tempered Surface", "Core", "Tempered Surface"],
    color: "#7ECFEA",
    icon: "◈",
  },
  {
    id: "laminated",
    name: "Laminated Glass",
    shortName: "LAM",
    tagline: "Safety & Security",
    description:
      "Two or more glass layers bonded with PVB, EVA, or SGP interlayers. Remains intact when broken — critical for overhead, facade, and security applications.",
    specs: [
      { label: "Interlayer", value: "PVB / EVA / SGP" },
      { label: "Thickness", value: "6.38mm+" },
      { label: "Max Size", value: "3.2 × 6.0m" },
      { label: "Standard", value: "EN 14449" },
    ],
    layers: ["Glass Layer", "PVB Interlayer", "Glass Layer"],
    color: "#C0C8D8",
    icon: "≡",
  },
  {
    id: "low-e",
    name: "Low-E Glass",
    shortName: "LOW-E",
    tagline: "Intelligent Energy Control",
    description:
      "Microscopically thin metallic coating reflects infrared heat while allowing visible light to pass through, dramatically reducing cooling loads in Saudi Arabia's climate.",
    specs: [
      { label: "Solar Factor", value: "0.24 - 0.68" },
      { label: "VLT", value: "Up to 72%" },
      { label: "Coating", value: "Soft / Hard" },
      { label: "Standard", value: "EN 1096" },
    ],
    layers: ["Glass", "Low-E Coating", "Protective Layer"],
    color: "#00E5FF",
    icon: "◎",
  },
  {
    id: "reflective",
    name: "Reflective Glass",
    shortName: "REFL",
    tagline: "Mirror the Sky",
    description:
      "Metallic coatings create stunning mirror-like exteriors while providing solar control and privacy. Available in silver, gold, bronze, and blue finishes.",
    specs: [
      { label: "Reflectance", value: "Up to 45%" },
      { label: "Shading Coef.", value: "0.3 - 0.5" },
      { label: "Colors", value: "6 standard" },
      { label: "Application", value: "Facade / Curtain Wall" },
    ],
    layers: ["Metallic Coating", "Glass Substrate"],
    color: "#A8B4C8",
    icon: "◇",
  },
  {
    id: "decorative",
    name: "Decorative Glass",
    shortName: "DECO",
    tagline: "Art Meets Architecture",
    description:
      "Sandblasted, acid-etched, ceramic frit, and digitally printed glass for stunning interior and architectural applications.",
    specs: [
      { label: "Techniques", value: "5 methods" },
      { label: "Custom Print", value: "Full color" },
      { label: "Opacity", value: "5% - 100%" },
      { label: "Application", value: "Interior / Facade" },
    ],
    layers: ["Decorative Surface", "Glass"],
    color: "#7ECFEA",
    icon: "◉",
  },
  {
    id: "heat-strengthened",
    name: "Heat Strengthened",
    shortName: "HS",
    tagline: "Balanced Strength",
    description:
      "Partially tempered glass offering 2× the strength of annealed glass with larger breakage fragments — ideal for overhead glazing.",
    specs: [
      { label: "Strength", value: "2× base" },
      { label: "Thickness", value: "4mm - 19mm" },
      { label: "Breakage", value: "Large fragments" },
      { label: "Standard", value: "EN 1863" },
    ],
    layers: ["Strengthened Surface", "Core"],
    color: "#C0C8D8",
    icon: "◆",
  },
  {
    id: "sandblasted",
    name: "Sandblasted Glass",
    shortName: "SAND",
    tagline: "Textured Elegance",
    description:
      "High-pressure sand blasting creates a frosted, translucent surface with infinite pattern possibilities — perfect for privacy partitions and design features.",
    specs: [
      { label: "Opacity", value: "Adjustable" },
      { label: "Custom Patterns", value: "Yes" },
      { label: "Thickness", value: "4mm - 19mm" },
      { label: "Finish", value: "Uniform / Gradient" },
    ],
    layers: ["Sandblasted Surface", "Glass"],
    color: "#A8B4C8",
    icon: "≋",
  },
];

function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: (typeof products)[0];
  index: number;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onSelect}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-white/6 glass h-full"
        whileHover={{ scale: 1.03, y: -6 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ borderColor: hovered ? `${product.color}30` : undefined }}
      >
        {/* Glass panel visual */}
        <div
          className="relative h-40 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${product.color}08 0%, ${product.color}03 100%)`,
          }}
        >
          {/* Layers visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            {product.layers.map((layer, i) => (
              <motion.div
                key={i}
                className="absolute w-24 h-28 rounded-lg border"
                style={{
                  borderColor: `${product.color}${30 + i * 15}`,
                  background: `rgba(255,255,255,${0.02 + i * 0.02})`,
                  backdropFilter: "blur(2px)",
                  transform: `translateX(${(i - product.layers.length / 2) * 10}px) translateZ(${i * 5}px)`,
                  zIndex: i,
                }}
                animate={
                  hovered
                    ? { x: (i - product.layers.length / 2) * 20 }
                    : { x: (i - product.layers.length / 2) * 10 }
                }
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>

          {/* Icon */}
          <div
            className="absolute bottom-3 right-3 text-2xl"
            style={{ color: product.color, opacity: 0.7 }}
          >
            {product.icon}
          </div>

          {/* Shine */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${product.color}10 0%, transparent 50%)`,
            }}
            animate={{ opacity: hovered ? 1 : 0.3 }}
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <div
            className="text-xs font-mono tracking-widest mb-2"
            style={{ color: product.color }}
          >
            {product.shortName}
          </div>
          <h3 className="text-base font-bold text-white mb-1">{product.name}</h3>
          <p className="text-xs text-silver/50 mb-3">{product.tagline}</p>

          <motion.div
            className="flex items-center gap-1 text-xs"
            style={{ color: product.color }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
          >
            View Details →
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: (typeof products)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-midnight-deep/80 backdrop-blur-xl" />
      <motion.div
        className="relative max-w-2xl w-full glass-strong rounded-3xl border border-white/10 overflow-hidden"
        style={{ borderColor: `${product.color}30` }}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative h-48 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${product.color}10, ${product.color}03)`,
          }}
        >
          {/* Animated layers */}
          <div className="flex gap-3">
            {product.layers.map((layer, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-24 rounded-lg border"
                  style={{
                    borderColor: `${product.color}40`,
                    background: `rgba(255,255,255,${0.03 + i * 0.03})`,
                    backdropFilter: "blur(4px)",
                  }}
                />
                <span
                  className="text-xs text-center"
                  style={{ color: product.color, maxWidth: 60 }}
                >
                  {layer}
                </span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div
            className="text-xs tracking-widest font-mono mb-2"
            style={{ color: product.color }}
          >
            {product.shortName} · TECHNICAL SPECIFICATIONS
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
          <p className="text-sm text-silver/50 italic mb-6">{product.tagline}</p>
          <p className="text-silver/70 leading-relaxed mb-8">{product.description}</p>

          <div className="grid grid-cols-2 gap-4">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl p-4 border border-white/5 bg-white/2"
              >
                <div className="text-xs text-silver/40 mb-1">{spec.label}</div>
                <div
                  className="text-base font-semibold"
                  style={{ color: product.color }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href="#contact"
            onClick={onClose}
            className="mt-8 flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm tracking-wide transition-all"
            style={{
              background: `${product.color}20`,
              border: `1px solid ${product.color}40`,
              color: product.color,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Quote for {product.shortName}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="products" className="relative py-32 overflow-hidden bg-midnight-deep">
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
              Glass Portfolio
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Our{" "}
            <span className="text-gradient-cyan">Glass Products</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            From thermal insulation to architectural beauty — explore our complete range of premium glass solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={() => setSelected(product)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
