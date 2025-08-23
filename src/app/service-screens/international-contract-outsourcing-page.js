"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiGlobe, FiUserCheck, FiCreditCard, FiUsers, FiMessageCircle,
  FiClock, FiActivity, FiShield, FiDollarSign, FiBookOpen, FiCheck
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiGlobe />,
    title: "Global talent sourcing & recruitment",
    why: "Tap curated international pipelines across roles and regions—balanced for quality, cost, and time-to-fill.",
    points: [
      "Country/region feasibility mapping (talent depth, costs, risk)",
      "Sourcing playbooks + outreach in local channels",
      "ICP/rubrics tuned to remote-first collaboration",
    ],
  },
  {
    icon: <FiUserCheck />,
    title: "International contractor vetting & onboarding",
    why: "Verify identity, credentials, and work history; onboard with compliant agreements and clear expectations.",
    points: [
      "KYC/identity checks, employment/education verification",
      "Standardized contractor packs (MSA/SOW, IP assignment, confidentiality)",
      "Readiness checklist: tools, security, SLAs, comms",
    ],
  },
  {
    icon: <FiCreditCard />,
    title: "Cross-border payroll & compliance management",
    why: "Pay accurately, on time, and in local currencies—without tax or classification surprises.",
    points: [
      "Invoice → approval → payout workflows with FX handling",
      "Tax docs & retention policies aligned by jurisdiction",
      "Integrations with EOR/PEO or contractor payout providers",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Remote team integration & management",
    why: "Blend global hires into your rhythm—goals, rituals, and tooling that keep work moving.",
    points: [
      "Onboarding sprint (90-day plan, mentors, rituals)",
      "Tool access, permissions, and security posture",
      "Operating cadence (standups, demos, reviews)",
    ],
  },
  {
    icon: <FiMessageCircle />,
    title: "Cultural bridging & communication facilitation",
    why: "Reduce friction with shared norms for feedback, directness, and decision-making.",
    points: [
      "Cross-cultural primers & inclusive language guidelines",
      "Async-first templates (status, decisions, handoffs)",
      "Facilitated kickoff to align expectations & norms",
    ],
  },
  {
    icon: <FiClock />,
    title: "Time zone coordination & workflow optimization",
    why: "Follow-the-sun without chaos—design handoffs and overlaps that accelerate delivery.",
    points: [
      "Overlap windows & handoff SLAs by team/function",
      "Work parceling & ticket hygiene for clarity",
      "Automation for alerts, rotations, and on-call",
    ],
  },
  {
    icon: <FiActivity />,
    title: "Quality assurance & performance monitoring",
    why: "Make quality visible—evidence-based feedback and continuous improvement.",
    points: [
      "Definition of Done + acceptance criteria standards",
      "Scorecards, peer review, and demo cadence",
      "SLA dashboards (throughput, quality, cycle time)",
    ],
  },
  {
    icon: <FiShield />,
    title: "Legal compliance for international employment",
    why: "Operate safely with region-aware agreements, data protection, and export controls.",
    points: [
      "Contractor vs. employee classification guidance*",
      "Data processing, IP assignment, confidentiality terms",
      "Export control & sanctions screening where applicable",
    ],
  },
  {
    icon: <FiDollarSign />,
    title: "Cost-effective staffing across multiple markets",
    why: "Balance cost, capability, and risk with a multi-country strategy.",
    points: [
      "Market benchmarks (rate bands, availability, seniority)",
      "Portfolio mix modeling & ramp plans",
      "Quarterly review for rebalancing & savings",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Multilingual support & translation services",
    why: "Keep context crisp across languages and stakeholders.",
    points: [
      "Localized documentation & templates",
      "Human-in-the-loop translation for critical artifacts",
      "Terminology/brand glossary & reviewer workflow",
    ],
  },
];

const DELIVERABLES = [
  "Country feasibility map (talent depth, cost, compliance notes)",
  "Contractor pack: MSA/SOW, IP & confidentiality, onboarding checklist",
  "Payroll & payouts runbook (approvals, FX, calendars, retention)",
  "Operating cadence kit (rituals, templates, handoff SLAs)",
  "Quality playbook (DoD, scorecards, demo/PR checklist)",
  "Compliance matrix (classification, tax docs, data handling)",
  "Quarterly portfolio review (cost, risk, performance)",
];

const PROCESS = [
  { step: "01", title: "Scope & map", text: "Interviews to define roles, timelines, markets; feasibility & risk scan." },
  { step: "02", title: "Recruit & vet", text: "Source globally; verify identity/credentials; align on SLAs & norms." },
  { step: "03", title: "Contract & onboard", text: "Execute agreements; provision tools; kick off 30/60/90 plan." },
  { step: "04", title: "Run & pay", text: "Operate cadence; track SLAs; approve invoices; pay in local currency." },
  { step: "05", title: "Monitor & optimize", text: "Review quality, costs, risk; rebalance markets as needed." },
];

const OUTCOMES = [
  "Faster time-to-productive with structured global onboarding.",
  "Compliant payments and documentation across jurisdictions.",
  "Higher quality and predictability via SLAs and scorecards.",
  "Cost-effective scaling with a diversified country mix.",
  "Healthier cross-cultural collaboration and fewer handoff misses.",
];

/* ------------------ Page ------------------ */
export default function InternationalContractOutsourcingPage() {
  return (
    <main className="bg-white pt-10 md:pt-24">
      {/* HERO */}
      <section className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-10 md:pt-8 md:pb-16">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              International Contract{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Outsourcing
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Build and run global contractor teams—safely, efficiently, and at quality—without spinning up entities in every country.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Start your global build
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

      {/* WHAT'S INCLUDED (mobile-safe in-view animations) */}
      <section id="details" className="bg-white scroll-mt-24 relative z-0">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SUBSERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group min-w-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
              >
                <div
                  className="mb-3 inline-grid h-10 w-10 place-items-center rounded-full text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                >
                  <span className="text-lg">{s.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600 break-words">{s.why}</p>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <FiCheck className="mt-0.5 shrink-0 text-[#6C792D]" />
                      <span className="break-words">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES + PROCESS */}
      <section className="bg-white relative z-0">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid gap-10 md:grid-cols-2">
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
                    <FiCheck className="mt-0.5 shrink-0 text-[#6C792D]" />
                    <span className="break-words">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                *We can operate via your entities, EOR/PEO partners, or contractor payout platforms depending on country and role.
              </p>
            </motion.div>

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
                Need SOC2-friendly access controls, DPA templates, or export-control screening? We’ll bundle them into your runbook.
              </p>
            </motion.ol>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
              Start your global build
            </Link>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white pb-14 relative z-0">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2"
          >
            {OUTCOMES.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <FiCheck className="mt-0.5 shrink-0 text-[#6C792D]" />
                <span className="text-sm text-gray-800 break-words">{o}</span>
              </div>
            ))}
          </motion.div>

          <p className="mt-4 text-xs text-gray-500">
            Compliance note: Classification and payroll rules vary by country. We provide operational guidance and coordinate with EOR/PEO or legal partners; this is not legal advice.
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "International Contract Outsourcing",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Global Workforce Solutions",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "International Contract Outsourcing",
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
