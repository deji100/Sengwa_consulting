"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiFileText,     // JD optimization
  FiCompass,      // strategy
  FiDollarSign,   // compensation
  FiSettings,     // process optimization
  FiSmile,        // candidate experience
  FiLifeBuoy,     // post-placement support
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiFileText />,
    title: "Job description development & optimization",
    why:
      "Attract the right talent and reduce drop-offs with clear, inclusive, and searchable JDs.",
    points: [
      "Role scorecard: must-haves vs. nice-to-haves, outcomes, success metrics",
      "Inclusive language rewrite + bias checks",
      "JD SEO: title normalization, keywords, and differentiation",
    ],
  },
  {
    icon: <FiCompass />,
    title: "Recruitment strategy consulting",
    why:
      "Pick the right channels, cadences, and SLAs for predictable hiring velocity.",
    points: [
      "Channel mix & campaign plan (inbound/outbound/referrals/events)",
      "Budget, SLA, and ownership model (RACI)",
      "Sourcing KPIs & dashboards for weekly steering",
    ],
  },
  {
    icon: <FiDollarSign />,
    title: "Market salary analysis & benchmarking",
    why:
      "Make competitive, defensible offers that close—without overpaying.",
    points: [
      "Bands by geo/level; total comp modeling (cash/equity/benefits)",
      "Offer guardrails, negotiation levers & approval workflow",
      "Refresh cadence as markets move",
    ],
  },
  {
    icon: <FiSettings />,
    title: "Hiring process optimization",
    why:
      "Shorten time-to-hire while improving signal and fairness.",
    points: [
      "Stage design, SLAs, and automation (ATS/HRIS)",
      "Structured interviews & interviewer calibration toolkit",
      "Feedback standards and decision gates",
    ],
  },
  {
    icon: <FiSmile />,
    title: "Candidate experience enhancement",
    why:
      "Boost acceptance rates with a clear, respectful journey.",
    points: [
      "Branded touchpoints & comms templates (briefs, thank-yous, updates)",
      "Expectation setting: timelines, prep guides, who’s who",
      "Experience surveys (NPS) and close-loss analysis",
    ],
  },
  {
    icon: <FiLifeBuoy />,
    title: "Post-placement follow-up & retention support",
    why:
      "Ensure new hires ramp fast and stay engaged.",
    points: [
      "30/60/90 plan templates aligned to scorecard",
      "Manager check-ins & early-risk flags",
      "Optional backfill warranty terms",
    ],
  },
];

const DELIVERABLES = [
  "JD pack: scorecard, inclusive rewrite, SEO recommendations",
  "Recruitment strategy deck: channels, SLAs, KPIs, budget",
  "Salary benchmark brief: bands, guardrails, negotiation guidance",
  "Process map: stages, automations, interviewer playbooks",
  "Candidate comms kit: email/DM templates & brand assets",
  "Weekly hiring dashboard & executive summary",
  "30/60/90 onboarding framework + post-placement schedule",
];

const PROCESS = [
  { step: "01", title: "Discovery & audit", text: "Assess roles, funnels, tools, SLAs, and candidate feedback." },
  { step: "02", title: "Plan & alignment", text: "Agree on targets, KPIs, and resourcing; finalize roadmap." },
  { step: "03", title: "Build & enable", text: "Draft JDs, scorecards, playbooks; configure ATS automations." },
  { step: "04", title: "Launch & monitor", text: "Run campaigns; track KPIs and experience metrics weekly." },
  { step: "05", title: "Iterate & optimize", text: "A/B test channels, refine interviews, tighten guardrails." },
  { step: "06", title: "Post-placement", text: "Onboarding checks, risk flags, retention follow-ups." },
];

const OUTCOMES = [
  "Higher-quality pipelines and better onsite pass rates.",
  "Lower time-to-hire with clearer ownership and SLAs.",
  "Competitive, consistent offers that close faster.",
  "Improved candidate NPS and stronger employer brand.",
  "Executive-ready visibility into funnel health.",
];

/* ------------------ Page ------------------ */
export default function ClientPartnershipServicesPage() {
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
              Client <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">Partnership Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From JD to offer to retention—we co-design your hiring engine for speed, fairness, and lasting results.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Partner with Sengwa
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
                *We can integrate with your ATS/HRIS for automation, reporting, and audit trails.
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
                Need executive dashboards or board-ready reporting? We’ll tailor metrics and cadence.
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
              Partner with us
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
            name: "Client Partnership Services",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Recruiting Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Client Partnership Services",
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
