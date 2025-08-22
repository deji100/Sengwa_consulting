"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield,        // pre-employment verification
  FiAlertTriangle, // criminal history
  FiBriefcase,     // employment history
  FiBookOpen,      // education/credentials
  FiAward,         // licenses/certifications
  FiUserCheck,     // references
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiShield />,
    title: "Pre-employment background verification",
    why:
      "A structured, compliant verification workflow that protects your organization and candidates.",
    points: [
      "Identity & address history validation with candidate consent",
      "Jurisdiction-aware checks via accredited partners (CRA)",
      "Clear SLAs, privacy controls, and secure data handling",
    ],
  },
  {
    icon: <FiAlertTriangle />,
    title: "Criminal history screening & analysis",
    why:
      "Right-sized, lawful checks aligned to role risk and local regulations.",
    points: [
      "County/state/federal searches (where permitted by law)",
      "Role-based adjudication matrix & documented rationale",
      "Adverse action support (pre/post notices, dispute handling)",
    ],
  },
  {
    icon: <FiBriefcase />,
    title: "Employment history verification",
    why:
      "Confirm past roles, dates, titles, and scope to reduce misrepresentation risk.",
    points: [
      "Direct employer/payroll provider verification where possible",
      "Gap analysis and clarification outreach",
      "Written summaries mapped to your scorecard/ICP",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Education & credential verification",
    why:
      "Validate degrees, majors, graduation dates, and professional coursework.",
    points: [
      "University registrar/clearinghouse verification",
      "International education checks as needed",
      "Documentation snapshots attached to each candidate file",
    ],
  },
  {
    icon: <FiAward />,
    title: "Professional license & certification checks",
    why:
      "Ensure active, good-standing licenses for regulated roles.",
    points: [
      "License number/state/expiry verification",
      "Disciplinary action review (where available)",
      "Renewal reminders & tracking options",
    ],
  },
  {
    icon: <FiUserCheck />,
    title: "Reference check coordination & evaluation",
    why:
      "Structured, bias-aware references that corroborate results and working style.",
    points: [
      "2–3 professional references with scripted, role-specific questions",
      "Evidence capture aligned to competencies & outcomes",
      "Written summaries and signal highlights for final review",
    ],
  },
];

const DELIVERABLES = [
  "Background screening policy alignment & role/region matrix",
  "Consent forms, candidate comms, and privacy notices",
  "Verification packet per candidate (evidence & summaries)",
  "Adjudication guide + adverse action templates",
  "Reference summaries mapped to competencies",
  "Weekly screening dashboard (turnaround, pass rates, flags)",
];

const PROCESS = [
  { step: "01", title: "Scope & align", text: "Define checks by role/region; align SLAs, privacy, and decision rules." },
  { step: "02", title: "Consent & intake", text: "Collect candidate consent and required PII via secure channels." },
  { step: "03", title: "Run checks", text: "Coordinate accredited third-party screenings and verifications." },
  { step: "04", title: "Review & adjudicate", text: "Compile results; apply matrix; support adverse action if needed." },
  { step: "05", title: "Report & retain", text: "Deliver packet, log decisions, and archive per retention policy." },
];

const OUTCOMES = [
  "Compliant, consistent screening with clear documentation.",
  "Faster time-to-hire and fewer late-stage surprises.",
  "Better candidate experience with transparent communications.",
  "Defensible decisions aligned to policy and regulation.",
];

/* ------------------ Page ------------------ */
export default function BackgroundChecksPage() {
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
              Background Check &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Screening Services
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Verified, jurisdiction-aware screening flows that balance speed, fairness, and compliance—end to end.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Set up screening
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
                *We coordinate with accredited screening providers; candidate consent is required. Results are delivered securely to authorized client contacts.
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
                Need multi-country checks or union/regulated role workflows? We’ll tailor scope and partners by jurisdiction.
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
              Configure your screening flow
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
            Compliance note: We support FCRA/GDPR/EEOC-aligned workflows and “ban-the-box” practices where applicable. This content is informational—not legal advice. Final employment decisions remain with the client.
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
            name: "Background Check & Screening Services",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Screening Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Background Check & Screening Services",
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
