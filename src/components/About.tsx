import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo } from "react";

const MotionVideo = motion.video;
interface StatItem { value: string; label: string }
interface AboutProps {
  heading?: string;
  paragraphs?: string[];
  stats?: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function About({
  heading = "About HannaWest",
  paragraphs = [
    "Headquartered in Memphis, TN, HannaWest Solutions helps businesses streamline operations through cutting-edge software and expert virtual assistant consulting.",
    "Whether you're building a custom tool or looking to scale with remote support, our team delivers tailored, scalable solutions that grow with your business. We combine technical excellence with strategic insights to drive meaningful results.",
    "Our commitment to quality, security, and client success has made us a trusted partner for businesses across various industries, from healthcare to technology startups.",
  ],
  stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ],
  imageSrc = "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "Team collaborating around laptops in a bright office",
}: AboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: reduceMotion ? 0 : 0.12 },
      },
    }),
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 18, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
    }),
    []
  );

  const statVariants = useMemo(
    () => ({
      hidden: { scale: 0.96, opacity: 0 },
      visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: { delay: reduceMotion ? 0 : 0.18 + i * 0.06, duration: 0.35, type: "spring", stiffness: 140 },
      }),
    }),
    [reduceMotion]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="
        relative py-20 md:py-28
        bg-gradient-to-b from-slate-50 via-white to-slate-50
        dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950
        overflow-hidden
      "
    >
      {/* soft blobs */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]">
        <div className="absolute -top-16 -left-24 size-80 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-96 rounded-full bg-cyan-400/10 dark:bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              id="about-heading"
              className="
                text-4xl md:text-5xl font-semibold tracking-tight mb-6
                text-slate-900 dark:text-white
              "
              initial={{ y: -14, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.45 }}
            >
              {heading}
            </motion.h2>

            {/* accent underline */}
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 mb-8" />

            <motion.div
              className="space-y-5 md:space-y-6 leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl"
              variants={containerVariants}
            >
              {paragraphs.map((p, i) => (
                <motion.p key={i} className="text-base md:text-lg" variants={itemVariants}>
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10 md:mt-12"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={statVariants}
                  custom={i}
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                  className="
                    text-center p-4 rounded-xl
                    bg-white/70 dark:bg-white/5 backdrop-blur
                    ring-1 ring-black/5 dark:ring-white/10
                    shadow-sm hover:shadow-md transition-all
                  "
                >
                  <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
         
         
         
          </motion.div>

          {/* Image with gradient border frame */}
         {/* Video with gradient border frame */}

{/* Video with gradient border frame */}
<motion.div
  className="relative"
  initial={{ x: 36, opacity: 0, rotate: 1 }}
  animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
  transition={{ duration: 0.55, ease: "easeOut" }}
>
  <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500/60 to-cyan-400/60 dark:from-indigo-500 to-cyan-400">
    <div className="rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden">
      {/* decorative overlay */}
      <div
        className="absolute -inset-1 rounded-2xl blur-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 -z-10"
        aria-hidden
      />

      <MotionVideo
        src="/about/vid.mov" // make sure file is inside public/about/vid.mov
        width={1200}
        height={900}
        className="relative rounded-[14px] shadow-xl w-full h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
        whileHover={!reduceMotion ? { scale: 1.012 } : undefined}
        transition={{ type: "spring", stiffness: 380 }}
      />
    </div>
  </div>
</motion.div>

        </motion.div>

      </div>
    </section>
  );
}
