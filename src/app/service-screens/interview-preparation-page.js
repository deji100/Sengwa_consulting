"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiVideo,        // mock sessions
  FiBriefcase,    // industry coaching
  FiStar,         // STAR method
  FiCpu,          // technical prep
  FiDollarSign,   // salary coaching
  FiSend,         // follow-ups
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/** ------------------ Content (now explanatory) ------------------ */
const SUBSERVICES = [
  {
    icon: <FiVideo />,
    title: "Mock interview sessions with feedback",
    why:
      "Rehearse in a realistic setting so you know what to expect and exactly how to improve before it counts.",
    points: [
      "Live role-play with realistic prompts",
      "Actionable scorecard and next steps",
      "Recording (optional) for review",
    ],
  },
  {
    icon: <FiBriefcase />,
    title: "Industry-specific interview coaching",
    why:
      "Every domain listens for different signals—learn the patterns, language, and metrics that matter for your target roles.",
    points: [
      "Domain patterns & hiring signals",
      "Role expectations & story mapping",
      "Vocabulary and metrics that resonate",
    ],
  },
  {
    icon: <FiStar />,
    title: "Behavioral training (STAR method)",
    why:
      "Tell concise, credible stories that prove impact—so interviewers remember you for the right reasons.",
    points: [
      "Build a bank of concise STAR stories",
      "Tighten outcomes with numbers",
      "Handling gaps, pivots, and setbacks",
    ],
  },
  {
    icon: <FiCpu />,
    title: "Technical interview preparation",
    why:
      "Cover the right depth with repeatable frameworks—whiteboards, cases, and take-homes without overwhelm.",
    points: [
      "Plan for core topics & depth probes",
      "Whiteboard/case frameworks",
      "Take-home review & dry runs",
    ],
  },
  {
    icon: <FiDollarSign />,
    title: "Salary negotiation coaching",
    why:
      "Walk in with a comp strategy—anchoring, counters, and trade-offs—so you don’t leave value on the table.",
    points: [
      "Comp bands & anchor strategy",
      "Counter templates & timing",
      "Total comp trade-offs (cash/equity/benefits)",
    ],
  },
  {
    icon: <FiSend />,
    title: "Post-interview follow-up strategies",
    why:
      "Keep momentum and signal professionalism with timely, high-signal follow-ups that add value.",
    points: [
      "Thank-you notes that add signal",
      "Polite nudges & momentum checks",
      "Multi-threading with recruiters & hiring managers",
    ],
  },
];

const DELIVERABLES = [
  "Personalized interview prep plan (role & company aligned)",
  "2–3 mock interviews + written scorecards",
  "Behavioral story bank (STAR) with metrics",
  "Technical/case checklist & practice prompts",
  "Negotiation brief: anchors, counters, scripts",
  "Follow-up email templates (thank-you, nudge, update)",
];

const PROCESS = [
  { step: "01", title: "Discovery", text: "Target roles, interview format, strengths & gaps." },
  { step: "02", title: "Prep Plan", text: "Custom plan: topics, stories, practice cadence." },
  { step: "03", title: "Mocks & Feedback", text: "Live sessions, scorecards, focused drills." },
  { step: "04", title: "Final Coaching", text: "Dry-run for onsites; negotiation & follow-ups." },
];

const OUTCOMES = [
  "Sharper answers and calmer delivery under pressure",
  "Stories that map to role expectations and metrics",
  "Confident whiteboard/case structure and pacing",
  "Professional follow-ups that move the process along",
  "Stronger negotiation with clear anchors and counters",
];

/** ------------------ Page ------------------ */
export default function InterviewPreparationPage() {
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
              Interview{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Preparation
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Practice with pros, tighten your stories, and walk into interviews with a plan—behavioral, technical, and negotiation.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/job-application"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Get Started
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

        {/* brand divider */}
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
                {s.why && <p className="mt-1 text-sm text-gray-600">{s.why}</p>}
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
                *We adapt to your timeline and interview format. You’ll always know the next drill.
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
                Final round coming up? We’ll simulate it end-to-end and fine-tune your responses.
              </p>
            </motion.ol>
          </div>

          {/* OUTCOMES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2"
          >
            {OUTCOMES.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <FiCheck className="mt-0.5 text-[#6C792D]" />
                <span className="text-sm text-gray-800">{o}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/talk2us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
              Book a mock interview
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Interview Preparation",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Career Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Interview Preparation",
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
