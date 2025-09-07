"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiTool,
  FiRefreshCw,
  FiTrendingUp,
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ---------- Content ---------- */
const SUBSERVICES = [
  {
    icon: <FiTarget />,
    title: "Career consultation & goal setting",
    why:
      "Get clarity on direction, constraints, and what ‘great’ looks like for your next 12–18 months.",
    points: [
      "Role/level targeting (IC vs. Manager) and compensation guardrails",
      "Strengths inventory, values, and location/remote preferences",
      "Outcome-based goals with measurable milestones",
    ],
  },
  {
    icon: <FiTool />,
    title: "Skills gap analysis & development planning",
    why:
      "See exactly what’s missing for your target roles—and how to close the gaps efficiently.",
    points: [
      "Competency matrix mapped to target job descriptions",
      "Prioritized learning plan (projects, courses, reps)",
      "Accountability cadence and quick wins to build signal",
    ],
  },
  {
    icon: <FiRefreshCw />,
    title: "Career transition guidance",
    why:
      "Pivot without starting over—translate past wins into the language of your new role/industry.",
    points: [
      "Transferable skills mapping and story reframes",
      "Starter portfolio/case ideas aligned to the pivot",
      "Tactical plan for internal moves or external switches",
    ],
  },
  {
    icon: <FiTrendingUp />,
    title: "Industry research & market mapping",
    why:
      "Focus your energy where demand exists and your profile stands out.",
    points: [
      "Company & sector shortlists with hiring patterns",
      "Title/level equivalence, comp bands, and location signals",
      "Networking map: recruiters, managers, and communities",
    ],
  },
];

const DELIVERABLES = [
  "Career Roadmap PDF (12–18 month plan with milestones)",
  "Competency Matrix + skills gap highlight",
  "Prioritized Learning Path (projects/courses/resources)",
  "Target Role & Company Map (titles, sectors, geos)",
  "Networking & Outreach Playbook (templates & cadence)",
  "Quarterly Review checklist to stay on track",
];

const PROCESS = [
  { step: "01", title: "Discovery", text: "Intake on goals, constraints, wins, and preferences." },
  { step: "02", title: "Assessment", text: "Competency matrix + gap analysis against target roles." },
  { step: "03", title: "Strategy", text: "Role map, learning plan, and networking approach." },
  { step: "04", title: "Activation", text: "Roadmap handoff + optional check-ins for momentum." },
];

const OUTCOMES = [
  "You know the exact roles to target—and why.",
  "You have a realistic timeline and measurable milestones.",
  "You can speak your value clearly with 2–3 high-signal stories.",
  "You’re executing a focused plan (learning + networking) weekly.",
];

/* ---------- Page ---------- */
export default function CareerStrategyAssessmentPage() {
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
              Career Strategy &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Get clarity, a plan, and momentum. We map your goals to the market,
              identify skill gaps, and build a focused roadmap you can execute weekly.
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
        <div
          aria-hidden
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
        />
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="details" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.06 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            {SUBSERVICES.map((s) => (
              <motion.article
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 90, damping: 16 },
                  },
                }}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
              >
                <div
                  className="mb-3 inline-grid h-10 w-10 place-items-center rounded-full text-white"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, #6C792D)`,
                  }}
                >
                  <span className="text-lg">{s.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {s.title}
                </h3>
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
              <h2 className="text-xl font-semibold text-gray-900">
                What you’ll receive
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <FiCheck className="mt-0.5 text-[#6C792D]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                *Plans adapt to your pace and interview timelines. We keep the path clear and practical.
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
              <h2 className="text-xl font-semibold text-gray-900">
                How it works
              </h2>
              <div className="mt-4 space-y-4">
                {PROCESS.map((p) => (
                  <li key={p.step} className="list-none">
                    <div className="flex gap-3">
                      <span
                        className="mt-1 inline-flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${BRAND}, #6C792D)`,
                        }}
                      >
                        {p.step}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {p.title}
                        </div>
                        <div className="text-sm text-gray-700">{p.text}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div
                aria-hidden
                className="mt-6 h-0.5 w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${BRAND}, #6C792D)`,
                }}
              />
              <p className="mt-2 text-sm text-gray-600">
                We’ll align on target roles and market focus, then activate a weekly plan to build signal and traction.
              </p>
            </motion.ol>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-12">
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

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/talk2us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg,#A9C52A,#6C792D)",
                boxShadow: "0 12px 36px rgba(169,197,42,.25)",
              }}
            >
              Book a strategy session
            </Link>
          </div>
        </div>
      </section>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Career Strategy & Assessment",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Career Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Career Strategy & Assessment",
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
