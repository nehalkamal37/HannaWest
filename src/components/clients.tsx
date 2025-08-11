"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import medisearchProject from '../assets/medisearch-project.jpg';

const LOGOS: { name: string; src: string; href?: string }[] = [
  {
    name: "Medisearch",
    src: medisearchProject, // imported at top like in your projects[] array
    href: "#medisearch"
  },
  {
    name: "Axiom Management System",
    src: "/logos/axio.png",
    href: "#axiom"
  },
  {
    name: "California Rheumatology Institute",
    src: "/logos/ca.png",
    href: "#california-rheumatology"
  },
  {
    name: "Apple Specialty Pharmacy",
    src: "/logos/apple.png",
    href: "#apple-specialty"
  },
  {
    name: "EssentialRx",
    src: "/ess.jpg",
    href: "#essentialrx"
  },
  {
    name: "MediHive Rx",
    src: "/medi.jpg",
    href: "#medihive-rx"
  },
  {
    name: "BrightPoint",
    src: "/logos/bri.jpg",
    href: "#"
  },
  {
    name: "DR.RiZK",
    src: "/logos/rizk.png",
    href: "#"
  },
];


export default function ClientsPro() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    // SECTION (replace className on <section> and the two blobs)
<section
  ref={ref}
  className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
  aria-labelledby="clients-heading"
>
  <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]">
    <div className="absolute -top-10 -left-10 size-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-0 right-0 size-72 rounded-full bg-accent/5 blur-3xl" />
  </div>


      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="clients-heading" className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Trusted by forward‑thinking teams
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of partners and clients who rely on our software expertise.
          </p>
        </motion.div>

        {/* marquee — single row */}
<div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
  <motion.div
    className="flex items-center gap-10 py-6 will-change-transform"
    animate={reduce ? undefined : { x: [0, -900, 0] }}
    transition={reduce ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
  >
    {[...LOGOS, ...LOGOS].map((c, i) => (
      <LogoPill key={`a-${c.name}-${i}`} {...c} />
    ))}
  </motion.div>
</div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {LOGOS.map((c) => (
            <LogoCard key={`g-${c.name}`} {...c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoPill({ name, src, href }: { name: string; src: string; href?: string }) {
  const img = (
    <img
      src={src}
      alt={`${name} logo`}
      width={140}
      height={56}
      loading="lazy"
      className="h-7 w-auto object-contain opacity-80 group-hover:opacity-100 transition"
    />
  );

  // max width keeps pills tidy on small screens; text truncates with ellipsis
  return (
    <div
      className="
        group relative flex items-center gap-3 rounded-full border border-gray-200 bg-white
        px-5 py-2.5 shadow-sm hover:shadow-md transition-all mx-3
        max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem]
      "
      title={name}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className="inline-flex items-center gap-3 w-full min-w-0"
        >
          {img}
          <span className="text-sm font-medium text-foreground/90 truncate whitespace-nowrap min-w-0">
            {name}
          </span>
        </a>
      ) : (
        <div className="inline-flex items-center gap-3 w-full min-w-0">
          {img}
          <span className="text-sm font-medium text-foreground/90 truncate whitespace-nowrap min-w-0">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

function LogoCard({ name, src, href }: { name: string; src: string; href?: string }) {
  const content = (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      className="h-full w-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-xl border border-gray-200 
        bg-gradient-to-br from-white via-gray-50 to-gray-100 
        shadow-md hover:shadow-xl 
        transition-all duration-500 hover:-translate-y-2
      "
    >
      {/* Decorative glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

      {/* Card Content */}
      <div className="relative flex flex-col items-center p-6 space-y-4">
        {/* Circular Logo */}
     {/* Circular Logo */}
<div className="flex items-center justify-center h-20 w-20 rounded-full overflow-hidden border-2 border-gray-100 shadow-inner">
  {href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={name}>
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </a>
  ) : (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  )}
</div>


        {/* Name */}
        <div className="text-center">
          <h4 className="text-base font-semibold text-gray-800">{name}</h4>
          <span className="block w-8 h-0.5 bg-primary/40 mx-auto mt-2 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

