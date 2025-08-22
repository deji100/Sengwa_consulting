"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCalendar,      // scheduling
  FiList,          // structured guides
  FiUsers,         // panels
  FiClipboard,     // evaluation
  FiCheckCircle,   // final recommendation
  FiDollarSign,    // offer support
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiCalendar />,
    title: "Interview scheduling & coordination",
    why:
      "Keep momentum high with tight scheduling and clear communication for candidates and interviewers.",
    points: [
      "Single point of coordination across calendars & time zones",
      "Briefing emails with role context and interview expectations",
      "Reschedule handling + reminders to reduce no-shows",
    ],
  },
  {
    icon: <FiList />,
    title: "Structured interview development",
    why:
      "Ask the right questions every time—reduce bias and compare apples to apples.",
    points: [
      "Role-aligned question banks mapped to competencies",
      "Guides for behavioral, situational, and technical topics",
      "Pass/fail anchors and weighted rubrics for clarity",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Panel interview facilitation",
    why:
      "Run smooth panels where interviewers play to strengths and avoid redundancy.",
    points: [
      "Panel design (roles, topics, timeboxes, rotation)",
      "Live facilitation or moderator scripts & timing cues",
      "Backchannel coordination for escalations or clarifications",
    ],
  },
  {
    icon: <FiClipboard />,
    title: "Candidate evaluation & scoring",
    why:
      "Turn interviews into signal—capture evidence, score consistently, decide faster.",
    points: [
      "Competency scorecards with example evidence",
      "Red/amber/green framework & tie-breaker guidance",
      "Funnel dashboards to spot gaps and bottlenecks",
    ],
  },
  {
    icon: <FiCheckCircle />,
    title: "Final selection recommendations",
    why:
      "Consolidate feedback into a clear, defensible recommendation for hiring managers.",
    points: [
      "Written decision summaries with strengths/risks",
      "Side-by-side comparisons across finalists",
      "Next-step guidance (additional probe, reference focus)",
    ],
  },
  {
    icon: <FiDollarSign />,
    title: "Offer negotiation support",
    why:
      "Close with confidence—align comp, role scope, and start dates to secure great talent.",
    points: [
      "Comp bands & market data for anchoring",
      "Scenario planning & counteroffer templates",
      "Candidate expectation management & close plan",
    ],
  },
];

const DELIVERABLES = [
  "Interview plan (timeline, panel design, responsibilities)",
  "Structured interview guides & question banks",
  "Competency scorecards with rubrics and examples",
  "Debrief templates + consolidated candidate summaries",
  "Weekly funnel report (stage speed, pass rates, drop-offs)",
  "Offer strategy brief (ranges, levers, scripts)",
];

const PROCESS = [
  { step: "01", title: "Plan & calibrate", text: "Define competencies, panel, timelines, and scoring rules." },
  { step: "02", title: "Schedule & prep", text: "Coordinate calendars, send briefs, align interviewers." },
  { step: "03", title: "Run interviews", text: "Facilitate panels; capture evidence on structured scorecards." },
  { step: "04", title: "Debrief & decide", text: "Consolidate feedback; provide a clear, documented recommendation." },
  { step: "05", title: "Offer & close", text: "Align on comp; coach negotiation; guide candidate to signature." },
];

const OUTCOMES = [
  "Faster scheduling and fewer drop-offs.",
  "Consistent, fair interviews that produce clear signal.",
  "Confident decisions with documented rationale.",
  "Higher close rates and stronger candidate experience.",
];

/* ------------------ Page ------------------ */
export default function InterviewSelectionPage() {
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
              Interview &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Selection Process
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From scheduling to offer—run fair, efficient interviews that generate strong signal and drive confident hires.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Optimize interviews
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
                *We can plug into your ATS/HRIS for smoother scheduling and feedback capture.
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
                Need structured training for interviewers? We’ll run a short calibration workshop.
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
              Level up interviews
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
            name: "Interview & Selection Process",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Recruiting Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Interview & Selection Process",
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
