"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiFilter,         // initial screen
  FiClipboard,      // skills tests
  FiUsers,          // behavioral/culture
  FiBookOpen,       // references
  FiShield,         // background check
  FiActivity,       // drug screen
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiFilter />,
    title: "Initial candidate screening & qualification",
    why:
      "Quickly separate high-fit candidates using objective criteria aligned to the role’s must-haves.",
    points: [
      "10–15 min structured phone screen (role, scope, salary, location)",
      "ICP alignment: skills, seniority, domain, eligibility",
      "Standardized scorecard to reduce bias and keep consistency",
    ],
  },
  {
    icon: <FiClipboard />,
    title: "Skills-based assessments & testing",
    why:
      "Validate capabilities with practical, job-relevant exercises—not generic puzzles.",
    points: [
      "Work-sample tasks or coding/case exercises tied to role outcomes",
      "Clear rubrics, timeboxing, and candidate guidance",
      "Optional proctoring and plagiarism checks when appropriate",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Behavioral & cultural fit evaluations",
    why:
      "Assess how candidates work, communicate, and make decisions—beyond the resume.",
    points: [
      "Structured behavioral interview using STAR prompts",
      "Team values & collaboration signals (feedback, ownership, learning)",
      "Calibration guide so interviewers score consistently",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Reference checks & verification",
    why:
      "Corroborate achievements and working style with credible sources.",
    points: [
      "2–3 professional references with scripted, role-specific questions",
      "Validation of scope, outcomes, and collaboration patterns",
      "Written summaries mapped to the role scorecard",
    ],
  },
  {
    icon: <FiShield />,
    title: "Background check coordination & review",
    why:
      "Safely verify identities and histories with accredited third parties.",
    points: [
      "Identity, education, employment history per client policy",
      "Compliance-first workflows; candidate consent managed",
      "Flag review & adjudication support (client-owned decisions)",
    ],
  },
  {
    icon: <FiActivity />,
    title: "Drug screening coordination",
    why:
      "Coordinate screenings where required by policy or regulation.",
    points: [
      "Scheduling at approved facilities and chain-of-custody handling",
      "Result routing to client contacts only",
      "Local-law and client-policy alignment",
    ],
  },
];

const DELIVERABLES = [
  "Role-specific screen guide & standardized scorecard",
  "Skills assessment design + rubrics (with sample prompts)",
  "Behavioral interview kit (question bank, red/green flags)",
  "Reference summaries mapped to competencies",
  "Compliance checklist for checks & screenings",
  "Weekly pipeline/assessment report with funnel metrics",
];

const PROCESS = [
  { step: "01", title: "Define & calibrate", text: "Agree on competencies, pass/fail criteria, and assessment flow." },
  { step: "02", title: "Screen & assess", text: "Run structured screens, skills tasks, and behavioral interviews." },
  { step: "03", title: "Verify & finalize", text: "References and (if required) background/drug checks coordinated." },
  { step: "04", title: "Recommend", text: "Consolidated scorecards + decision support & next-step guidance." },
];

const OUTCOMES = [
  "Objective, repeatable hiring decisions across teams.",
  "Lower false-positives (mis-hires) and false-negatives (missed talent).",
  "Faster time-to-decision with clearer signal per candidate.",
  "Candidate-friendly experience that reflects your brand.",
];

/* ------------------ Page ------------------ */
export default function ScreeningAssessmentPage() {
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
              Screening &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Consistent, fair, and job-relevant evaluations—so every hiring decision is backed by clear signal, not gut feel.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/solution-for-organizations"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Add structured screens
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
                *Assessments and checks are configurable per role & region. We prioritize fairness, privacy, and candidate experience.
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
                Need us to host the interviews? We can coordinate panels and provide structured notes.
              </p>
            </motion.ol>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/talk2us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
              Standardize your screening
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
          <p className="mt-4 text-xs text-gray-500">
            Compliance note: Background and drug screening are conducted by accredited third parties with candidate consent and are subject to local laws and client policies. Sengwa Consulting does not make employment decisions based solely on protected information.
          </p>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Screening & Assessment",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Recruiting Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Screening & Assessment",
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

/* ------------------ Helpers ------------------ */
// const DELIVERABLES = [
//   "Role-aligned screen guide & scorecard templates",
//   "Custom skills assessments with grading rubrics",
//   "Behavioral interview kit + calibration guide",
//   "Reference check summaries tied to competencies",
//   "Background/drug screening coordination workflow",
//   "Weekly assessment report with funnel metrics",
// ];
