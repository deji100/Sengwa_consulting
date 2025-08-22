"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUsers,           // mediation
  FiMessageCircle,   // difficult conversations
  FiDollarSign,      // negotiation
  FiAlertTriangle,   // de-escalation & crisis
  FiFileText,        // grievance procedures
  FiHeart,           // restorative justice
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiUsers />,
    title: "Workplace conflict mediation & resolution",
    why:
      "Neutral, structured mediation that surfaces interests, aligns expectations, and documents agreements.",
    points: [
      "Pre-briefs with each party to understand context & desired outcomes",
      "Facilitated session with guardrails, timeboxes, and shared notes",
      "Written agreement with owners, actions, and review dates",
    ],
  },
  {
    icon: <FiMessageCircle />,
    title: "Difficult conversation training",
    why:
      "Give managers and ICs the tools to address issues early—clearly and respectfully.",
    points: [
      "Conversation frameworks (SBI, NVC) and role-play scenarios",
      "Language patterns for clarity, empathy, and boundary-setting",
      "Prep checklist and follow-up templates for accountability",
    ],
  },
  {
    icon: <FiDollarSign />,
    title: "Negotiation skills development",
    why:
      "Move from positions to interests—create durable agreements and avoid stalemates.",
    points: [
      "Interest mapping, BATNA identification, and option generation",
      "Concession strategy and objective criteria selection",
      "Playbooks for manager–employee and cross-team negotiations",
    ],
  },
  {
    icon: <FiAlertTriangle />,
    title: "De-escalation techniques & crisis management",
    why:
      "Stabilize tense moments and reduce risk with calm, repeatable protocols.",
    points: [
      "Signals, triggers, and step-down techniques (tone, space, options)",
      "Crisis path: contain → stabilize → document → escalate if needed",
      "After-action review template to learn without blame",
    ],
  },
  {
    icon: <FiFileText />,
    title: "Grievance handling procedures",
    why:
      "Fair, timely, and well-documented processes that meet policy and regional requirements.",
    points: [
      "Intake forms, triage rules, and confidentiality standards",
      "Investigation steps, evidence handling, and communication plan",
      "Closure letters and appeal workflow with timelines",
    ],
  },
  {
    icon: <FiHeart />,
    title: "Restorative justice approaches in the workplace",
    why:
      "Repair trust and reintegrate teams through accountability and shared commitments.",
    points: [
      "Restorative circles with facilitator guides and prompts",
      "Harm acknowledgment, impact mapping, and repair actions",
      "Commitment tracking and periodic health checks",
    ],
  },
];

const DELIVERABLES = [
  "Mediation plan & documented agreements",
  "Difficult conversations toolkit (scripts, checklists, templates)",
  "Negotiation playbook (interests, options, criteria, BATNA)",
  "De-escalation protocol & crisis response guide",
  "Grievance SOP with compliant forms and timelines",
  "Restorative practices guide & follow-up schedule",
  "Weekly/biweekly status summary (trends, risks, actions)",
];

const PROCESS = [
  { step: "01", title: "Assess", text: "Intake, confidentiality alignment, and risk/urgency screen." },
  { step: "02", title: "Prepare", text: "Brief parties, define goals, and set ground rules & logistics." },
  { step: "03", title: "Facilitate", text: "Run mediation or training; capture evidence & actions." },
  { step: "04", title: "Agree", text: "Draft commitments, owners, timelines, and success measures." },
  { step: "05", title: "Follow up", text: "Check-ins, coaching, and adjustments to lock in behavior change." },
];

const OUTCOMES = [
  "Faster, fair resolutions with documented agreements.",
  "Managers skilled at early, respectful intervention.",
  "De-risked escalations and fewer repeat incidents.",
  "Healthier team climate and restored trust.",
];

/* ------------------ Page ------------------ */
export default function ConflictResolutionManagementPage() {
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
              Conflict Resolution &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Neutral facilitation, practical training, and compliant procedures—so tense situations become clear agreements and better habits.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Request mediation/support
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
                *We prioritize confidentiality and psychological safety. Legal/HR involvement is included when policy requires it.
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
                Need manager training or policy updates? We can bundle enablement and SOP refresh.
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
              Resolve conflicts with confidence
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
            Disclaimer: We provide conflict resolution services and training; this is not legal advice. When required, we coordinate with your HR/legal teams.
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
            name: "Conflict Resolution & Management",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Conflict Resolution & Management",
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
