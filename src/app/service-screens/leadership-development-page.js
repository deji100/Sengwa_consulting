"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiTrendingUp,   // exec coaching
  FiUsers,        // manager training
  FiCompass,      // strategy & decisions
  FiRefreshCw,    // change mgmt
  FiTarget,       // performance & development
  FiLayers,       // succession & pipeline
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiTrendingUp />,
    title: "Executive leadership coaching & mentoring",
    why:
      "Strengthen executive effectiveness with targeted coaching on vision, communication, and decision velocity.",
    points: [
      "360° feedback synthesis and growth roadmap",
      "Executive presence: narrative, influence, stakeholder management",
      "Decision hygiene: frameworks, trade-offs, escalation ladders",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Management skills training for new supervisors",
    why:
      "Give first-time managers the tools to lead confidently from day one.",
    points: [
      "Foundations: expectations, trust, psychological safety",
      "1:1s, feedback, delegation, and outcome-based planning",
      "Tough conversations & conflict basics with role-play",
    ],
  },
  {
    icon: <FiCompass />,
    title: "Strategic thinking & decision-making workshops",
    why:
      "Upgrade from task management to strategy—clarity, focus, and measurable impact.",
    points: [
      "Strategy stack: mission → objectives → bets → metrics",
      "Decision frameworks (RAPID, DACI, cost-of-delay)",
      "Scenario planning and risk registers for critical bets",
    ],
  },
  {
    icon: <FiRefreshCw />,
    title: "Change management & organizational transformation",
    why:
      "Land org changes with adoption, not disruption.",
    points: [
      "Change thesis, stakeholder map, comms & champion network",
      "Readiness checks, pilots, and feedback loops",
      "Benefits realization metrics and course correction",
    ],
  },
  {
    icon: <FiTarget />,
    title: "Performance management & employee development",
    why:
      "Create a fair, motivating system that grows skills and results.",
    points: [
      "Role levels/competencies; clear expectations & rubrics",
      "OKRs/KPIs cascaded to team plans",
      "Growth plans: skill ladders, coaching and learning paths",
    ],
  },
  {
    icon: <FiLayers />,
    title: "Succession planning & talent pipeline building",
    why:
      "De-risk key roles and build internal mobility.",
    points: [
      "Critical role mapping and bench depth analysis",
      "Talent reviews, nine-box, and readiness plans",
      "Targeted development rotations & mentorship programs",
    ],
  },
];

const DELIVERABLES = [
  "Leadership capability assessment & 360° summary",
  "Customized coaching plan (objectives, milestones, measures)",
  "Manager toolkit: 1:1 templates, feedback guides, meeting cadences",
  "Strategy & decision playbook (frameworks, worksheets)",
  "Change plan with comms calendar & adoption metrics",
  "Performance rubric & growth plan templates",
  "Succession map with bench strength and development actions",
];

const PROCESS = [
  { step: "01", title: "Assess", text: "Interviews, 360° inputs, and capability baselines per level." },
  { step: "02", title: "Align", text: "Define outcomes, competencies, and success measures with sponsors." },
  { step: "03", title: "Enable", text: "Run workshops, 1:1 coaching, and manager bootcamps." },
  { step: "04", title: "Apply", text: "Embed tools in real work: plans, reviews, decision forums." },
  { step: "05", title: "Sustain", text: "Metrics, refreshers, and mentorship to lock in habits." },
];

const OUTCOMES = [
  "Leaders who communicate strategy and drive execution.",
  "First-time managers confident in feedback, delegation, and planning.",
  "Faster, clearer decisions with documented rationale.",
  "Changes that land with adoption and minimal disruption.",
  "Fair, motivating performance & growth systems.",
  "A visible leadership bench and de-risked succession.",
];

/* ------------------ Page ------------------ */
export default function LeadershipDevelopmentPage() {
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
              Leadership <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Level up executives and new managers with practical coaching, strategic tools, and systems that stick.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Start a leadership program
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
                *Programs are tailored by level (IC→Mgr, Mgr→Dir, Dir→VP/Exec) and can run as cohorts or 1:1.
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
                Need a manager bootcamp or exec offsite? We’ll tailor the format and artifacts to your goals.
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
              Build your leadership bench
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
            name: "Leadership Development",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Leadership Development",
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
