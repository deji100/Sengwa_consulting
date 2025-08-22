"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUsers,        // sourcing
  FiTarget,       // search/headhunting
  FiEye,          // passive ID
  FiDatabase,     // talent pool
  FiShare2,       // multi-channel
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiUsers />,
    title: "Candidate sourcing & pipeline development",
    why:
      "Build a steady flow of qualified candidates mapped to your role requirements, seniority, and location preferences.",
    points: [
      "Role intake → ideal candidate profile & must-have criteria",
      "Boolean strings & X-ray searches across platforms",
      "Pipeline tracker with stages and status visibility",
    ],
  },
  {
    icon: <FiTarget />,
    title: "Executive search & headhunting",
    why:
      "Engage senior and hard-to-reach talent with discreet, tailored outreach and rigorous evaluation.",
    points: [
      "Longlist/shortlist process with calibration checkpoints",
      "Confidential approach & positioning narrative",
      "Structured scorecards for consistent evaluation",
    ],
  },
  {
    icon: <FiEye />,
    title: "Passive candidate identification & outreach",
    why:
      "Reach high-fit talent who aren’t actively applying but match the role’s impact, scope, and context.",
    points: [
      "Signals: tenure, scope growth, publications, impact markers",
      "Personalized multi-touch sequences (email/LinkedIn)",
      "Response tracking & reply templates to speed cycles",
    ],
  },
  {
    icon: <FiDatabase />,
    title: "Talent pool development & maintenance",
    why:
      "Keep a warm bench for recurring roles so future openings fill faster with pre-qualified candidates.",
    points: [
      "Segmented pools by function, level, geo, and specialization",
      "Nurture cadences with value-add check-ins",
      "Data hygiene & candidate consent management",
    ],
  },
  {
    icon: <FiShare2 />,
    title: "Multi-channel recruitment strategies",
    why:
      "Blend inbound and outbound to maximize qualified reach while protecting brand and candidate experience.",
    points: [
      "Sourcing: LinkedIn, GitHub/Behance, niche boards, communities",
      "Campaigns: referrals, alumni, events, content drops",
      "Funnel analytics to double-down on high-yield channels",
    ],
  },
];

const DELIVERABLES = [
  "Ideal Candidate Profile (ICP) & role scorecard",
  "Sourcing strategy with search strings and channel plan",
  "Calibrated longlist → shortlisted candidates with notes",
  "Outreach templates & sequence schedule",
  "Pipeline tracker (stages, statuses, reasons)",
  "Weekly progress report (funnel metrics & insights)",
];

const PROCESS = [
  { step: "01", title: "Intake & calibration", text: "Role discovery, must-haves, nice-to-haves, success criteria." },
  { step: "02", title: "Search map", text: "ICP, channels, queries, and evaluation scorecard." },
  { step: "03", title: "Sourcing sprint", text: "Build longlist, first-touch outreach, screening alignment." },
  { step: "04", title: "Shortlist & handoff", text: "Qualified candidates, notes, and interview scheduling support." },
  { step: "05", title: "Iterate & nurture", text: "Feedback loops, pool hygiene, and ongoing warm pipeline." },
];

const OUTCOMES = [
  "A repeatable sourcing engine instead of ad-hoc searches.",
  "Visibility into funnel health and candidate quality.",
  "Faster time-to-shortlist with better role fit.",
  "Positive candidate experience that reflects your brand.",
];

/* ------------------ Page ------------------ */
export default function TalentSourcingAcquisitionPage() {
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
              Talent Sourcing &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Acquisition
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Build a consistent pipeline of qualified candidates—executive to specialist—through targeted research, calibrated outreach, and clear funnel visibility.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Request candidates
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
                *We align on feedback every week and adjust sourcing focus based on funnel data.
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
                Prefer us to run screens too? We can add structured phone screens and scorecards.
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
              Start a sourcing sprint
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
            name: "Talent Sourcing & Acquisition",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Recruiting Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Talent Sourcing & Acquisition",
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
