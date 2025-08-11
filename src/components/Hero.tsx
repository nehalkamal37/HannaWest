import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useMemo, useState } from "react";
import { Play, ArrowRight } from "lucide-react";

/**
 * Polished Hero section
 * - Deterministic particles (no hydration mismatch)
 * - Parallax with prefers-reduced-motion fallback
 * - Accessible buttons and semantics
 * - Smooth typing effect with reduced motion safety
 * - Minimal CLS, mobile-friendly, and dark-mode friendly
 */

interface HeroProps {
  bgImageUrl?: string;
  headlinePrimary?: string; // first line
  headlineTypingFull?: string; // second line (typed)
  subheadline?: string;
  primaryCtaLabel?: string;
  primaryTargetId?: string;
  secondaryCtaLabel?: string;
  secondaryTargetId?: string;
}

export default function Hero({
  bgImageUrl =
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1950&q=80",
  headlinePrimary = "Smart Software.",
  headlineTypingFull = "Smarter Solutions.",
  subheadline =
    "Transform your business with custom software development and expert virtual assistant consulting services",
  primaryCtaLabel = "Request Consultation",
  primaryTargetId = "contact",
  secondaryCtaLabel = "View Services",
  secondaryTargetId = "services",
}: HeroProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (fallback to 0 when reduce motion)
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "30%"]);

  // Smooth scroll helper (respects reduced motion by still using smooth but okay for accessibility)
  const scrollToId = (id?: string) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Typing animation effect (deterministic and disable when reduced motion)
  const [displayText, setDisplayText] = useState<string>("");
  const [idx, setIdx] = useState<number>(0);
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(headlineTypingFull);
      return;
    }
    if (idx < headlineTypingFull.length) {
      const t = setTimeout(() => {
        setDisplayText((prev) => prev + headlineTypingFull.charAt(idx));
        setIdx((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(t);
    }
  }, [idx, headlineTypingFull, shouldReduceMotion]);

  // Deterministic particles to avoid SSR hydration mismatch
  const particles = useMemo(() => {
    const N = shouldReduceMotion ? 0 : 18;
    const arr = Array.from({ length: N }, (_, i) => {
      // simple seeded variations using sin/cos so results are identical across SSR/CSR
      const seed = i + 1;
      const w = 2 + ((Math.sin(seed * 12.9898) + 1) / 2) * 5; // 2..7
      const h = 2 + ((Math.cos(seed * 4.233) + 1) / 2) * 5; // 2..7
      const left = ((Math.sin(seed * 2.1) + 1) / 2) * 100; // 0..100
      const top = ((Math.cos(seed * 1.7) + 1) / 2) * 100; // 0..100
      const dy = ((Math.sin(seed * 0.9) + 1) / 2) * 120 - 60; // -60..60
      const dx = ((Math.cos(seed * 1.3) + 1) / 2) * 80 - 40; // -40..40
      const duration = 10 + ((Math.sin(seed * 0.37) + 1) / 2) * 10; // 10..20s
      return { i, w, h, left, top, dy, dx, duration };
    });
    return arr;
  }, [shouldReduceMotion]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20"
      role="banner"
      aria-labelledby="hero-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${bgImageUrl})`, y: yBg as any }}
        aria-hidden="true"
      >
        {/* Gradient overlay to preserve text contrast */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Floating Particles (decorative) */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          {particles.map((p) => (
            <motion.span
              key={p.i}
              className="absolute rounded-full bg-white/80 dark:bg-white/70"
              style={{
                width: `${p.w}px`,
                height: `${p.h}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                filter: "blur(0.5px)",
              }}
              animate={{ y: [0, p.dy, 0], x: [0, p.dx, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: p.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 w-full px-6 lg:px-8 text-center" style={{ y: yText as any }}>
        <div className="mx-auto max-w-5xl">
          {/* Headline */}
          <motion.h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">{headlinePrimary}</span>
            <span className="relative inline-block">
              {displayText}
              {/* underline accent */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
            role="group"
            aria-label="Primary actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              type="button"
              onClick={() => scrollToId(primaryTargetId)}
              className="relative w-full sm:w-auto bg-white text-gray-900 font-semibold py-3.5 px-7 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition-transform will-change-transform"
              aria-label={`${primaryCtaLabel} — navigate to ${primaryTargetId}`}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {primaryCtaLabel}
                <motion.span animate={{ x: isHovered ? 6 : 0 }} transition={{ type: "spring", stiffness: 480 }}>
                  <ArrowRight size={20} />
                </motion.span>
              </span>
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-400/10"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.5 }}
                aria-hidden
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollToId(secondaryTargetId)}
              className="relative w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-3.5 px-7 rounded-xl hover:bg-white hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              aria-label={`${secondaryCtaLabel} — navigate to ${secondaryTargetId}`}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <AnimatePresence initial={false} mode="wait">
                  {isHovered && !shouldReduceMotion && (
                    <motion.span
                      key="play-icon"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.18 }}
                      aria-hidden
                    >
                      <Play size={18} fill="currentColor" />
                    </motion.span>
                  )}
                </AnimatePresence>
                {secondaryCtaLabel}
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10" aria-hidden />
            </motion.button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-24 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              className="text-white/90 mb-2"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <ArrowRight size={24} className="rotate-90" />
            </motion.span>
            <span className="text-white/80 text-sm">Scroll to explore</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
