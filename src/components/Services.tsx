"use client";

import { useState, useMemo } from "react";
import {
  Code, Bot, Smartphone, Database, Users, Settings,
  ChevronDown, ChevronUp, CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  bgGradient: string; // tailwind gradient utilities
}

interface FeaturePillItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  const services: Service[] = useMemo(
    () => [
      {
        id: 1,
        icon: Code,
        title: "Software Development",
        description: "Powerful custom solutions tailored to your business needs",
        features: [
          "Custom business applications (web & mobile)",
          "API integrations & automation",
          "HIPAA-compliant solutions",
          "Cloud-native architecture",
          "Continuous integration/deployment",
        ],
        bgGradient: "from-indigo-500/15 to-cyan-400/15",
      },
      {
        id: 2,
        icon: Bot,
        title: "Virtual Assistant Consultancy",
        description: "Expert guidance for scaling with remote support",
        features: [
          "Staffing and process setup",
          "Workflow optimization",
          "Remote assistant integration",
          "Performance tracking",
          "Cross-cultural team management",
        ],
        bgGradient: "from-cyan-400/15 to-indigo-500/15",
      },
    ],
    []
  );

  const additionalFeatures: FeaturePillItem[] = useMemo(
    () => [
      { icon: Smartphone, text: "Mobile-First Design" },
      { icon: Database, text: "Secure Data Management" },
      { icon: Users, text: "Team Collaboration" },
      { icon: Settings, text: "Process Automation" },
    ],
    []
  );

  return (
   <section
  id="services"
  ref={ref}
  className="
    relative py-20 md:py-28
    bg-gradient-to-b from-indigo-50 via-white to-cyan-44
    dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
    overflow-hidden
  "
>

      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_35%,#000,transparent)]">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[28rem] rounded-full bg-cyan-400/10 dark:bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-5">
            What We Do
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 mb-6" />
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that transform how you work—combining technical expertise with strategic consulting.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 md:mb-16">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} isVisible={inView} />
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-slate-900 dark:text-white mb-8">
            Our Expertise Includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((f, idx) => (
              <FeaturePill key={idx} feature={f} index={idx} isVisible={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service, index, isVisible
}: { service: Service; index: number; isVisible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const detailsId = `service-details-${service.id}`;

  const variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.45 },
    },
  } as const;

  return (
    <motion.article
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className="
        relative overflow-hidden rounded-2xl p-7 md:p-8
        bg-white/70 dark:bg-white/5 backdrop-blur
        ring-1 ring-black/5 dark:ring-white/10
        transition-all duration-300 shadow-sm hover:shadow-md
      "
    >
      {/* subtle gradient wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-80 mix-blend-overlay pointer-events-none`}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-5">
        <div
          className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center flex-shrink-0`}
          aria-hidden
        >
          <service.icon className="h-7 w-7 md:h-8 md:w-8 text-indigo-600 dark:text-cyan-300" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-1.5">
            {service.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          className="
            w-10 h-10 rounded-full bg-white/70 dark:bg-white/10
            ring-1 ring-black/5 dark:ring-white/10
            text-slate-700 dark:text-slate-200
            hover:bg-white/90 dark:hover:bg-white/15
            focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30
            transition
          "
          aria-expanded={expanded}
          aria-controls={detailsId}
        >
          {expanded ? <ChevronUp size={18} aria-hidden /> : <ChevronDown size={18} aria-hidden />}
          <span className="sr-only">{expanded ? "Collapse details" : "Expand details"}</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={detailsId}
            role="region"
            aria-label={`${service.title} details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
            className="overflow-hidden pt-5"
          >
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0 : idx * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600 dark:text-cyan-300" aria-hidden />
                  <span className="text-slate-800 dark:text-slate-200">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function FeaturePill({
  feature, index, isVisible
}: { feature: FeaturePillItem; index: number; isVisible: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.22 + index * 0.06, duration: 0.4 },
    },
  } as const;

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
      className="
        flex flex-col items-center text-center p-6 rounded-xl
        bg-white/70 dark:bg-white/5 backdrop-blur
        ring-1 ring-black/5 dark:ring-white/10
        transition-all duration-300 hover:shadow-md
      "
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/15 to-cyan-400/15 flex items-center justify-center mb-4" aria-hidden>
        <feature.icon className="h-6 w-6 text-indigo-600 dark:text-cyan-300" />
      </div>
      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{feature.text}</span>
    </motion.div>
  );
}
