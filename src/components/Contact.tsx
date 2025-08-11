"use client";

import { useState, useMemo, useRef } from "react";
import { MapPin, Phone, Mail, Send, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Status = "idle" | "sending" | "ok" | "err";
const WEB3FORMS_KEY = "a98c8db2-f1af-49c9-a60f-7351c90d2368";

export default function Contact() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  // form state
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactMethods = useMemo(
    () => [
      { icon: Phone, label: "Call us", text: "+1 (901) 697-0621", href: "tel:+19016970621" },
      { icon: Mail, label: "Email", text: "m.a.hannalla@gmail.com", href: "mailto:m.a.hannalla@gmail.com" },
      { icon: MapPin, label: "Address", text: "1337 Whitewater Rd, Memphis, TN 38117" },
    ],
    []
  );

  const reasons = [
    "Custom software & integrations",
    "Virtual assistant setup & scaling",
    "HIPAA-aware workflows",
    "Timelines & estimates",
  ];

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type, checked } = e.target as any;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? (checked ? "1" : "") : value }));
    setErrors((er) => ({ ...er, [name]: "" }));
  }

  function validate() {
    const er: Record<string, string> = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Please enter a valid email.";
    if (!form.message.trim()) er.message = "Please add a short message.";
    return er;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      setStatus("err");
      return;
    }
    if (form.botcheck) return;

    setStatus("sending");
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        from_name: "Hannalla Website",
        subject: form.subject?.trim() ? form.subject : `New contact from ${form.name}`,
        name: form.name,
        email: form.email,
        message: form.message,
        reply_to: form.email,
        // redirect: "https://yourdomain.com/thanks",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.success) {
        setStatus("ok");
        setForm({ name: "", email: "", subject: "", message: "", botcheck: "" });
        setErrors({});
      } else {
        setStatus("err");
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      console.error(err);
      setStatus("err");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="
        relative py-20 md:py-28
        bg-gradient-to-b from-indigo-50 via-white to-cyan-5
        dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
        overflow-hidden
      "
    >
      {/* decorative */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]">
        <div className="absolute -top-20 -left-24 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-24 w-96 h-96 rounded-full bg-cyan-400/10 dark:bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-indigo-700/80 dark:text-cyan-300/90 bg-indigo-100/60 dark:bg-white/10 rounded-full px-3 py-1 mb-4">
            <ShieldCheck className="h-4 w-4" /> We reply within 24 hours
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Let’s start a conversation
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Tell us about your goals, and we’ll suggest the fastest, safest way to get there.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {contactMethods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="rounded-xl p-5 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/15 to-cyan-400/15 grid place-items-center">
                  <m.icon className="h-6 w-6 text-indigo-700 dark:text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{m.label}</div>
                  {m.href ? (
                    <a href={m.href} className="text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-cyan-300 break-words">
                      {m.text}
                    </a>
                  ) : (
                    <p className="text-slate-600 dark:text-slate-300">{m.text}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            className="lg:col-span-2 rounded-2xl p-6 md:p-8 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Send us a message</h3>

            {/* Alerts */}
            {status === "ok" && (
              <div role="alert" className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800/40 dark:text-emerald-200">
                ✅ Message sent! We’ll get back to you within 24 hours.
              </div>
            )}
            {status === "err" && Object.keys(errors).length > 0 && (
              <div role="alert" className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800/40 dark:text-amber-200">
                Please fix the highlighted fields.
              </div>
            )}
            {status === "err" && Object.keys(errors).length === 0 && (
              <div role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800 dark:bg-red-900/20 dark:border-red-800/40 dark:text-red-200">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  id="name"
                  label="Name *"
                  error={errors.name}
                  input={
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      className={cnInput(errors.name)}
                      placeholder="Your full name"
                      required
                    />
                  }
                />
                <Field
                  id="email"
                  label="Email *"
                  error={errors.email}
                  input={
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      className={cnInput(errors.email)}
                      placeholder="you@company.com"
                      required
                    />
                  }
                />
              </div>

              <Field
                id="subject"
                label="Subject"
                input={
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={onChange}
                    className={cnInput()}
                    placeholder="How can we help?"
                  />
                }
              />

              <Field
                id="message"
                label="Message *"
                error={errors.message}
                input={
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className={cnInput(errors.message) + " resize-none"}
                    placeholder="Tell us a bit about your goals, timeline, and constraints."
                    required
                  />
                }
              />

              {/* Honeypot (hidden) */}
              <input
                type="checkbox"
                name="botcheck"
                checked={!!form.botcheck}
                onChange={onChange as any}
                tabIndex={-1}
                className="hidden"
                style={{ display: "none" }}
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="
                  w-full rounded-lg px-6 py-3.5 font-semibold text-white
                  bg-gradient-to-r from-indigo-600 to-cyan-500
                  hover:from-indigo-500 hover:to-cyan-400
                  shadow-md hover:shadow-lg transition-all
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {status === "sending" ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden />
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Send className="h-5 w-5" aria-hidden />
                    Send Message
                  </span>
                )}
              </button>
            </form>

            {/* small trust strip */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
              <span>Secure delivery via Web3Forms • Replies within 24h • No spam</span>
            </div>
          </motion.div>

          {/* Side details */}
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-indigo-700 dark:text-cyan-300" aria-hidden />
                <h3 className="font-semibold text-slate-900 dark:text-white">Business Hours (CST)</h3>
              </div>
              <dl className="space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between"><dt>Mon–Fri</dt><dd>9:00 AM – 6:00 PM</dd></div>
                <div className="flex justify-between"><dt>Saturday</dt><dd>10:00 AM – 4:00 PM</dd></div>
                <div className="flex justify-between"><dt>Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>

            <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Why reach out?</h3>
              <ul className="space-y-2">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-indigo-600 dark:text-cyan-300" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- small helpers ---------- */

function Field({
  id, label, input, error,
}: { id: string; label: string; input: React.ReactNode; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">
        {label}
      </label>
      {input}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-300">{error}</p>}
    </div>
  );
}

function cnInput(hasError?: string) {
  return `
    w-full px-4 py-3 rounded-lg
    bg-white/60 dark:bg-white/10
    border ${hasError ? "border-red-400 dark:border-red-500" : "border-slate-200/80 dark:border-white/10"}
    text-slate-900 dark:text-white
    placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:outline-none focus:ring-2 ${hasError ? "focus:ring-red-200 dark:focus:ring-red-800" : "focus:ring-indigo-200 dark:focus:ring-cyan-700"} focus:border-indigo-500
    transition
  `;
}
