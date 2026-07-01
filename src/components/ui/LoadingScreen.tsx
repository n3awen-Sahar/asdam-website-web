"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GLASS_SHARDS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  rotation: Math.random() * 360,
  scale: Math.random() * 0.5 + 0.5,
  delay: Math.random() * 0.5,
}));

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(Math.floor(p));
      if (p < 100) requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight-deep overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,229,255,0.06),transparent_70%)]" />

          {/* Assembling glass shards */}
          <div className="relative w-32 h-32 mb-12">
            {GLASS_SHARDS.map((shard) => (
              <motion.div
                key={shard.id}
                className="absolute"
                style={{
                  width: 20 + (shard.id % 3) * 10,
                  height: 20 + (shard.id % 4) * 8,
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  x: shard.x,
                  y: shard.y,
                  rotate: shard.rotation,
                  scale: shard.scale,
                  opacity: 0,
                }}
                animate={{
                  x: (shard.id % 4 - 1.5) * 22,
                  y: (Math.floor(shard.id / 4) - 1.5) * 22,
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: shard.delay,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="w-full h-full rounded-sm"
                  style={{
                    background: `rgba(0,229,255,${0.1 + (shard.id % 3) * 0.1})`,
                    border: "1px solid rgba(0,229,255,0.3)",
                    backdropFilter: "blur(2px)",
                    boxShadow: `0 0 10px rgba(0,229,255,${0.1 + (shard.id % 3) * 0.05})`,
                  }}
                />
              </motion.div>
            ))}

            {/* Logo center */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <span className="text-cyan-400 font-black text-2xl tracking-wider z-10">A</span>
            </motion.div>
          </div>

          {/* Brand */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-3xl font-black text-white tracking-[0.3em] mb-1">ASDAM</div>
            <div className="text-xs text-cyan-400/60 tracking-[0.4em] uppercase">
              Technical Glass
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48">
            <div className="flex justify-between text-xs text-silver/30 mb-2 font-mono">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
            <div className="h-px bg-white/5 rounded overflow-hidden">
              <motion.div
                className="h-full rounded"
                style={{
                  background: "linear-gradient(90deg, #00E5FF, #7ECFEA)",
                  width: `${progress}%`,
                  boxShadow: "0 0 8px rgba(0,229,255,0.6)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
