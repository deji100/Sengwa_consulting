"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiHeart,          // bonding & retreats
  FiShare2,         // cross-functional collab
  FiGlobe,          // remote & virtual
  FiShield,         // trust-building
  FiMessageCircle,  // communication
  FiZap,            // problem-solving & innovation
  FiCheck,
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiHeart />,
    title: "Team bonding activities & retreats",
    why:
      "Strengthen relationships and shared identity with curated experiences that translate into day-to-day teamwork.",
    points: [
      "Onsite/offsite agendas with facilitation and reflection blocks",
      "Budgeting, venue/vendor shortlist, accessibility planning",
      "Post-retreat action capture so momentum becomes habits",
    ],
  },
  {
    icon: <FiShare2 />,
    title: "Cross-functional collaboration workshops",
    why:
      "Reduce handoff friction and align on outcomes across Product, Eng, Ops, GTM, and more.",
    points: [
      "RACI & workflow mapping to clarify ownership and SLAs",
      "“Define-Decide-Deliver” framework for smoother execution",
      "Playbooks for cross-team rituals (standups, reviews, demos)",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Remote team building & virtual engagement",
    why:
      "Keep distributed teams connected with lightweight, repeatable touchpoints.",
    points: [
      "Virtual activities catalog (15–60 min) by team size/energy",
      "Async icebreakers, shout-outs, and recognition cadences",
      "Tooling guidance (channels, norms, time-zone etiquette)",
    ],
  },
  {
    icon: <FiShield />,
    title: "Trust-building exercises & initiatives",
    why:
      "Create psychological safety: the foundation for transparency, feedback, and speed.",
    points: [
      "Safety check-ins, norms charter, and commitments ceremony",
      "Feedback frameworks and practice rounds",
      "Metrics: safety pulse, follow-through, escalation clarity",
    ],
  },
  {
    icon: <FiMessageCircle />,
    title: "Team communication enhancement",
    why:
      "Replace noise with signal—clear updates, crisp decisions, fewer meetings.",
    points: [
      "Meeting hygiene: agendas, timeboxes, decision notes",
      "Async communication guide & templates",
      "“One-pager” update format for status and risks",
    ],
  },
  {
    icon: <FiZap />,
    title: "Group problem-solving & innovation sessions",
    why:
      "Unlock creativity and velocity with structured ideation and decision workflows.",
    points: [
      "Problem framing canvas & assumptions map",
      "Diverge → converge ideation with voting & criteria",
      "Pilot plans with owners, milestones, and success metrics",
    ],
  },
];

const DELIVERABLES = [
  "Retreat/Workshop agenda pack (timings, activities, materials)",
  "Collaboration playbook (RACI maps, handoff SLAs, rituals)",
  "Remote engagement toolkit (activity library, cadence, norms)",
  "Trust & feedback toolkit (exercises, safety pulse template)",
  "Communication guide (meeting/async templates, examples)",
  "Innovation sprint kit (canvases, voting sheets, pilot plan)",
  "Impact report with NPS, actions, and next-step roadmap",
];

const PROCESS = [
  { step: "01", title: "Discover", text: "Goals, constraints, team dynamics, and recent friction points." },
  { step: "02", title: "Design", text: "Tailored agenda, materials, logistics, and success measures." },
  { step: "03", title: "Facilitate", text: "Live sessions (onsite/virtual) with inclusive participation." },
  { step: "04", title: "Debrief", text: "Capture decisions, owners, timelines, and adoption metrics." },
  { step: "05", title: "Sustain", text: "Follow-ups, pulse checks, and enablement for team leads." },
];

const OUTCOMES = [
  "Stronger cohesion and shared identity.",
  "Clearer ownership and faster cross-team execution.",
  "Higher engagement for remote and hybrid teams.",
  "Healthier feedback culture and psychological safety.",
  "Fewer, better meetings and crisper decisions.",
  "Repeatable innovation rituals with real business impact.",
];

/* ------------------ Page ------------------ */
export default function TeamBuildingCollaborationPage() {
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
              Team Building &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Collaboration
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Practical, energizing programs that build trust, sharpen collaboration, and turn meetings into momentum.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Plan a session
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
                *All programs can run onsite, virtual, or hybrid. We tailor for team size, time zones, and accessibility.
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
                Want an offsite or virtual series? We’ll package agendas, comms, and logistics end-to-end.
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
              Design your program
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
            name: "Team Building & Collaboration",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Team Building & Collaboration",
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

// /* ------------------ Helpers ------------------ */
// const DELIVERABLES = [
//   "Agenda & materials pack (onsite/virtual)",
//   "Collaboration playbook (RACI, SLAs, rituals)",
//   "Remote engagement toolkit & norms charter",
//   "Trust & feedback exercises with pulse template",
//   "Communication templates (meeting/async)",
//   "Innovation sprint kit + pilot plan",
//   "Impact report with NPS & action roadmap",
// ];
