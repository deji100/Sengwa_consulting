"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiLayers,       // industry-specific
  FiClock,        // contract/temp
  FiAward,        // exec placement
  FiUsers,        // volume hiring
  FiHeart,        // D&I
  FiCheck,        // bullets
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiLayers />,
    title: "Industry-specific recruitment (IT, healthcare, finance, etc.)",
    why:
      "Hire with domain nuance—signals, certifications, tooling, and regulatory context differ by industry.",
    points: [
      "Ideal Candidate Profile (ICP) per function, seniority, and domain",
      "Niche channels & communities (e.g., GitHub for eng, HIMSS for HC, CFA for finance)",
      "Competency mapping to role outcomes (impact, scope, metrics)",
    ],
  },
  {
    icon: <FiClock />,
    title: "Contract & temporary staffing",
    why:
      "Flex headcount for projects, coverage, or seasonal spikes—without sacrificing quality or compliance.",
    points: [
      "On-demand talent bench with verified skills and availability",
      "Timekeeping, invoicing, and conversion-to-hire options",
      "Compliance alignment by region (classification, documentation)",
    ],
  },
  {
    icon: <FiAward />,
    title: "Executive & C-suite placement",
    why:
      "Confidential, high-touch searches that align leadership DNA with strategy and culture.",
    points: [
      "Search thesis, market map, and stakeholder calibration",
      "Longlist → shortlist with narrative positioning",
      "360° references and decision brief with risk/strength trade-offs",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Volume hiring & mass recruitment",
    why:
      "Scale quickly for multi-role ramps while protecting candidate experience and bar.",
    points: [
      "Centralized screen hub and standardized scorecards",
      "Campaigns: events, referrals, campus & community programs",
      "Funnel dashboards (speed, pass rates, drop-offs) for iteration",
    ],
  },
  {
    icon: <FiHeart />,
    title: "Diversity & inclusion recruitment strategies",
    why:
      "Broaden pipelines and reduce bias with inclusive practices end-to-end.",
    points: [
      "Inclusive JD rewrites & structured interviews to limit noise",
      "Sourcing across diverse networks and affinity communities",
      "Interviewer calibration + evidence-based scoring frameworks",
    ],
  },
];

const DELIVERABLES = [
  "Role-specific ICPs and evaluation scorecards",
  "Sourcing plan: channels, queries, and outreach templates",
  "Shortlists with notes, evidence, and risk/strength summary",
  "Interview plan (panel design, structured guides) as needed",
  "Weekly funnel report (time-to-stage, pass rates, drop-offs)",
  "Offer/contract support and onboarding checklist",
];

const PROCESS = [
  { step: "01", title: "Intake & mapping", text: "Align on roles, bar, domains, and success criteria." },
  { step: "02", title: "Search plan", text: "ICP, channels, strings, and scorecards per role." },
  { step: "03", title: "Sourcing & outreach", text: "Activate campaigns; build and qualify longlists." },
  { step: "04", title: "Shortlist & interviews", text: "Structured screens; coordinate panels and debriefs." },
  { step: "05", title: "Offer/contract & onboarding", text: "Close candidates; manage handoff and start readiness." },
];

const OUTCOMES = [
  "Domain-aligned hires with faster time-to-shortlist.",
  "Predictable ramps for volume programs without quality loss.",
  "Confidential, defensible executive decisions.",
  "Flexible capacity via contract/temporary pipelines.",
  "More inclusive, higher-signal hiring funnels.",
];

/* ------------------ Page ------------------ */
export default function SpecializedRecruitmentPage() {
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
              Specialized{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Recruitment
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Industry-tuned searches, high-touch executive placements, flexible contracting, and scalable volume programs—built on structured, inclusive hiring.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Start a specialized search
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
                *We can integrate with your ATS/HRIS for streamlined scheduling, notes, and reporting.
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
                Need multi-country coverage or 24/7 scheduling? We’ll tailor the workflow to your regions and time zones.
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
              Request a specialized search
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
            Compliance note: Executive and contract placements include confidentiality and regional compliance workflows. Inclusive hiring practices are built into our process design.
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
            name: "Specialized Recruitment",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Recruiting Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Specialized Recruitment",
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
