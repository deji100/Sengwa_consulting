"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiLinkedin,
  FiUsers,
  FiFileText,
  FiLayers,
  FiFeather,
  FiBriefcase,
  FiGlobe,
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/** ----- Content (now explanatory) ----- */
const SUBSERVICES = [
  {
    icon: <FiLinkedin />,
    title: "LinkedIn profile optimization & strategy",
    why:
      "Turn your profile into a recruiter magnet that ranks in search and converts views into messages.",
    points: [
      "Headline, About, Experience, Skills & keywords tuned for recruiter search",
      "Banner & headshot guidance + featured section setup",
      "Profile SEO & settings to increase discovery and response rates",
    ],
  },
  {
    icon: <FiUsers />,
    title: "LinkedIn networking & outreach support",
    why:
      "Stop guessing what to say and who to message—build a repeatable, respectful outreach cadence.",
    points: [
      "Target list building (roles, companies, recruiters, hiring managers)",
      "Warm connection strategy with message frameworks & cadence",
      "Lightweight CRM-style tracker to keep conversations moving",
    ],
  },
  {
    icon: <FiFileText />,
    title: "Professional resume writing & design",
    why:
      "An ATS-friendly, metrics-forward resume that tells a clear impact story for your target roles.",
    points: [
      "ATS-friendly layout with a clean visual system",
      "Achievement-focused bullet writing (metrics, scope, impact)",
      "Keyword alignment to target roles without keyword stuffing",
    ],
  },
  {
    icon: <FiLayers />,
    title: "Resume tailoring for specific positions",
    why:
      "Match job descriptions precisely—hit must-haves and show immediate role fit.",
    points: [
      "JD-to-resume mapping for skills/keywords & must-have criteria",
      "1–2 tailored variants per role cluster (e.g., Product/OPS/CSM)",
      "Quick-turn tweaks for live opportunities",
    ],
  },
  {
    icon: <FiFeather />,
    title: "Cover letter writing & customization",
    why:
      "Concise, high-signal letters that add context and edge without filler.",
    points: [
      "Concise, high-signal master letter that scales",
      "Company-specific intro & value hook blocks you can swap in",
      "Ready-to-use snippets for referrals & cold submissions",
    ],
  },
  {
    icon: <FiBriefcase />,
    title: "Professional portfolio development",
    why:
      "Show—not just tell—your work, decisions, and results in a clean, skimmable format.",
    points: [
      "Portfolio structure (case studies, outcomes, artifacts) that tells your story",
      "Simple, fast site setup or templated Notion/Google Site option",
      "Guided proof curation with STAR storytelling",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Online presence audit & enhancement",
    why:
      "Make your Google footprint consistent, credible, and on-brand across platforms.",
    points: [
      "Search results review (Google yourself), GitHub/Behance/Medium checks",
      "Signal-boost recommendations & cleanup plan",
      "Consistency (name/title), contact, and brand alignment",
    ],
  },
];

const DELIVERABLES = [
  "Optimized LinkedIn profile with keyword strategy",
  "ATS-ready master resume + 2 tailored variants",
  "Master cover letter + 2 customization templates",
  "Outreach message pack (intro, follow-up, referral ask)",
  "Portfolio structure + first case study outline",
  "Online presence audit report with 30-day action plan",
];

const PROCESS = [
  { step: "01", title: "Kickoff & goals", text: "30–45 min intake; target roles, constraints, wins." },
  { step: "02", title: "Materials sprint", text: "Resume, LinkedIn, cover letter first pass." },
  { step: "03", title: "Tailor & polish", text: "Role-aligned variants, portfolio outline, message kit." },
  { step: "04", title: "Go live", text: "Outreach cadence, tracker, and weekly check-ins." },
];

const OUTCOMES = [
  "Higher recruiter discovery and response rates",
  "Clear, metrics-driven narrative across resume and LinkedIn",
  "Faster tailoring for each application without starting over",
  "More quality conversations from targeted outreach",
  "A credible, on-brand online footprint",
];

export default function ProfileApplicationPage() {
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
              Profile & Application{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Stand out to recruiters, pass ATS, and convert views to interviews—without guesswork.
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
                *Turnaround depends on inputs/feedback pace. We keep you updated with clear milestones.
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
                Ready to roll? We’ll align on roles, then sprint your materials to “interview-ready”.
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
              href="/contact-us"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
              Talk to a strategist
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
            name: "Profile & Application Services",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Career Services",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Profile & Application Services",
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
