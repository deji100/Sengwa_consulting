"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiHeart,        // emotional intelligence
  FiClock,        // time mgmt
  FiWind,         // stress & wellness
  FiMic,          // presentation skills
  FiUserCheck,    // mentoring & coaching
  FiBookOpen,     // etiquette & professionalism
  FiCheck,        // bullets
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiHeart />,
    title: "Emotional intelligence training",
    why:
      "Improve self-awareness, self-regulation, and social awareness to lead calmly and collaborate better.",
    points: [
      "EQ self-assessment & feedback mapping",
      "Triggers → responses plan with reflection routines",
      "Empathy drills for perspective-taking and rapport",
    ],
  },
  {
    icon: <FiClock />,
    title: "Time management & productivity optimization",
    why:
      "Move from busy to effective—focus on the highest-leverage work and protect deep time.",
    points: [
      "Prioritization frameworks (ICE, MoSCoW, Eisenhower)",
      "Time-blocking, capacity planning, and weekly reviews",
      "System setup: tasks, calendar, notes, decision logs",
    ],
  },
  {
    icon: <FiWind />,
    title: "Stress management & workplace wellness",
    why:
      "Build sustainable habits that reduce burnout and increase resilience.",
    points: [
      "Stressors inventory and coping toolkit (micro-breaks, breathwork)",
      "Boundaries, recovery rhythms, and workload negotiation",
      "Team norms for wellness: expectations, coverage, and support",
    ],
  },
  {
    icon: <FiMic />,
    title: "Presentation & public speaking skills",
    why:
      "Craft clear narratives and deliver them with confidence—remote or in-room.",
    points: [
      "Story structure (context → problem → proposal → impact)",
      "Slide craft: signal-first visuals; executive summaries",
      "Delivery coaching with video feedback and drills",
    ],
  },
  {
    icon: <FiUserCheck />,
    title: "Mentoring & coaching skills development",
    why:
      "Develop people through questions, feedback, and growth plans—not just advice.",
    points: [
      "Coach-like conversations (GROW, CLEAR) with practice",
      "Feedback loops: expectations, evidence, next steps",
      "Development plans and accountability cadences",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Workplace etiquette & professional behavior",
    why:
      "Align on standards that make collaboration smooth and respectful.",
    points: [
      "Meeting & async etiquette; decision records and follow-through",
      "Escalation paths, ownership clarity, and response SLAs",
      "Inclusive language and micro-behavior awareness",
    ],
  },
];

const DELIVERABLES = [
  "Personal development plan (objectives, habits, measures)",
  "Productivity system guide (templates for tasks/calendar/notes)",
  "Wellness toolkit (stress playbook, boundary scripts, rhythms)",
  "Presentation pack (story templates, slide patterns, checklist)",
  "Coaching toolkit (question banks, feedback scripts, GROW sheets)",
  "Professional standards guide (meeting, async, escalation norms)",
  "30/60 habit tracker with check-ins template",
];

const PROCESS = [
  { step: "01", title: "Assess", text: "Baseline skills & habits via self/peer input and quick diagnostics." },
  { step: "02", title: "Design", text: "Select modules; tailor templates and practice scenarios to role." },
  { step: "03", title: "Enable", text: "Workshops + 1:1 coaching; set up systems and rituals." },
  { step: "04", title: "Practice", text: "Apply on real work; record reps; receive structured feedback." },
  { step: "05", title: "Sustain", text: "Weekly reviews, habit tracking, and periodic refreshers." },
];

const OUTCOMES = [
  "Clear priorities and predictable execution rhythm.",
  "Lower stress and more sustainable performance.",
  "Stronger presentations that land decisions faster.",
  "Managers who coach, not micromanage.",
  "Professional norms that reduce friction across teams.",
  "Visible skill growth with measurable habits.",
];

/* ------------------ Page ------------------ */
export default function ProfessionalDevelopmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Practical modules, coaching, and tools that upgrade how people work—personally and together.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Start a development track
              </Link>
              <a
                href="#details"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm hover:shadow"
              >
                See what’s included
              </a>
            </div>
          </motion.header>
        </div>
        <div aria-hidden className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }} />
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="details" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.06 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SUBSERVICES.map((s) => (
              <motion.article
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
                }}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
              >
                <div
                  className="mb-3 inline-grid h-10 w-10 place-items-center rounded-full text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                >
                  <span className="text-lg">{s.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.why}</p>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 text-[#6C792D]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DELIVERABLES + PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">What you’ll receive</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <FiCheck className="mt-0.5 text-[#6C792D]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                *Programs can run as workshops, cohorts, or 1:1 coaching. All artifacts are editable for your teams.
              </p>
            </motion.div>

            {/* Process */}
            <motion.ol
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">How it works</h2>
              <div className="mt-4 space-y-4">
                {PROCESS.map((p) => (
                  <li key={p.step} className="list-none">
                    <div className="flex gap-3">
                      <span
                        className="mt-1 inline-flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                      >
                        {p.step}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                        <div className="text-sm text-gray-700">{p.text}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div
                aria-hidden
                className="mt-6 h-0.5 w-24 rounded-full"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
              />
              <p className="mt-2 text-sm text-gray-600">
                Want role-specific tracks (ICs, Managers, Leaders)? We can tailor modules and artifacts by level.
              </p>
            </motion.ol>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
              Launch a development program
            </Link>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white pb-14">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2"
          >
            {OUTCOMES.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <FiCheck className="mt-0.5 text-[#6C792D]" />
                <span className="text-sm text-gray-800">{o}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional Development",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Professional Development",
              itemListElement: SUBSERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title },
              })),
            },
          }),
        }}
      />
    </main>
  );
}
