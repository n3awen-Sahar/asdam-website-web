"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const contactInfo = [
  { icon: "📍", label: "Location", value: "Jeddah, Saudi Arabia", sub: "Industrial Zone" },
  { icon: "📞", label: "Phone", value: "+966 12 XXX XXXX", sub: "Sat–Thu, 8AM–6PM" },
  { icon: "✉", label: "Email", value: "info@asdam.com.sa", sub: "Reply within 24hrs" },
  { icon: "⏰", label: "Working Hours", value: "Sat – Thu", sub: "8:00 AM – 6:00 PM" },
];

function GlassInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block text-xs text-silver/50 tracking-wider uppercase mb-2">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full px-4 py-3 rounded-xl bg-white/3 border text-white placeholder-white/20 text-sm outline-none transition-all duration-300"
          style={{
            borderColor: focused ? "rgba(0,229,255,0.5)" : "rgba(255,255,255,0.08)",
            boxShadow: focused ? "0 0 0 1px rgba(0,229,255,0.2), 0 0 20px rgba(0,229,255,0.05)" : "none",
          }}
        />
        {/* Animated bottom border */}
        <div
          className="absolute bottom-0 left-0 h-px transition-all duration-300"
          style={{
            width: focused ? "100%" : "0%",
            background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
          }}
        />
      </div>
    </div>
  );
}

function GlassTextarea({
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block text-xs text-silver/50 tracking-wider uppercase mb-2">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <div className="relative">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/3 border text-white placeholder-white/20 text-sm outline-none transition-all duration-300 resize-none"
          style={{
            borderColor: focused ? "rgba(0,229,255,0.5)" : "rgba(255,255,255,0.08)",
            boxShadow: focused ? "0 0 0 1px rgba(0,229,255,0.2)" : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-midnight-deep">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(0,229,255,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(126,207,234,0.04),transparent_50%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

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
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="display-lg text-white mb-4">
            Start Your{" "}
            <span className="text-gradient-cyan">Project</span>
          </h2>

          <p className="text-silver/60 max-w-lg mx-auto">
            Tell us about your project and our glass specialists will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* HQ Visual */}
            <div className="rounded-2xl glass border border-white/6 overflow-hidden mb-6">
              <div
                className="h-40 relative flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.08), rgba(5,10,26,0.9))",
                }}
              >
                {/* Building silhouette */}
                <div className="flex items-end gap-2 h-28">
                  {[40, 70, 100, 80, 55].map((h, i) => (
                    <div
                      key={i}
                      className="w-8 rounded-t overflow-hidden"
                      style={{
                        height: `${h}%`,
                        background: "linear-gradient(to bottom, rgba(0,229,255,0.2), rgba(0,229,255,0.05))",
                        border: "1px solid rgba(0,229,255,0.15)",
                        borderBottom: "none",
                      }}
                    >
                      <div className="p-1 grid grid-cols-2 gap-0.5">
                        {[...Array(6)].map((_, wi) => (
                          <div
                            key={wi}
                            className="aspect-square"
                            style={{ background: "rgba(0,229,255,0.3)" }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-2 text-xs text-cyan-400/50 tracking-widest font-mono">
                  ASDAM HEADQUARTERS · JEDDAH
                </div>
              </div>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5 group hover:border-cyan-400/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg glass-strong border border-white/8 flex items-center justify-center text-lg flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs text-silver/40 tracking-wider uppercase mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm font-semibold text-white">{info.value}</div>
                  <div className="text-xs text-silver/40">{info.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="rounded-3xl glass-strong border border-white/8 p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 border-2 border-cyan-400/40"
                      style={{ background: "rgba(0,229,255,0.1)" }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-silver/60 max-w-sm">
                      Thank you for reaching out. Our glass specialists will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <GlassInput
                        label="Full Name"
                        placeholder="Ahmed Al-..."
                        value={form.name}
                        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                        required
                      />
                      <GlassInput
                        label="Company"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <GlassInput
                        label="Email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                        required
                      />
                      <GlassInput
                        label="Phone"
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        value={form.phone}
                        onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-silver/50 tracking-wider uppercase mb-2">
                        Product Interest
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white text-sm outline-none focus:border-cyan-400/50 transition-all"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="">Select glass product...</option>
                        <option>Insulated Glass Units (IGU)</option>
                        <option>Tempered Glass</option>
                        <option>Laminated Glass</option>
                        <option>Low-E Glass</option>
                        <option>Reflective Glass</option>
                        <option>Decorative Glass</option>
                        <option>Other / Custom</option>
                      </select>
                    </div>

                    <GlassTextarea
                      label="Project Details"
                      placeholder="Tell us about your project — size, application, timeline..."
                      value={form.message}
                      onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                      required
                    />

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      className="relative w-full py-4 rounded-xl text-midnight-deep font-bold text-sm tracking-wider overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #00E5FF, #7ECFEA)",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={sending}
                    >
                      <AnimatePresence mode="wait">
                        {sending ? (
                          <motion.div
                            key="sending"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div
                              className="w-4 h-4 border-2 border-midnight-deep/30 border-t-midnight-deep rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            Send Message →
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Shine animation */}
                      <motion.div
                        className="absolute inset-0 -translate-x-full"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          skewX: -20,
                        }}
                        animate={{ x: ["−100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
