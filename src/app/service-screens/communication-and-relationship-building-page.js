"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMessageCircle,  // communication training
  FiHeart,          // empathy & listening
  FiUsers,          // relationships
  FiGlobe,          // cross-cultural
  FiSmile,          // client relationships
  FiLink2,          // networking
  FiCheck,          // bullets
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiMessageCircle />,
    title: "Professional communication skills training",
    why:
      "Write and speak with clarity, brevity, and impact—async or live.",
    points: [
      "Frameworks for concise updates (BLUF, 5-sentence rule)",
      "Email/Slack hygiene: subject lines, TL;DRs, decisions",
      "Narrative skills for presenting proposals and updates",
    ],
  },
  {
    icon: <FiHeart />,
    title: "Active listening & empathy development",
    why:
      "Understand before persuading—reduce friction and build trust.",
    points: [
      "Listening drills: paraphrase, reflect, and clarify",
      "NVC/LEAP patterns to acknowledge emotions & needs",
      "Bias/interruption checks; questions that unlock context",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Workplace relationship building strategies",
    why:
      "Map stakeholders, earn influence, and keep momentum between teams.",
    points: [
      "Stakeholder mapping & influence without authority",
      "1:1 cadences, commitments, and follow-through habits",
      "Recognition/feedback rituals to strengthen bonds",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Cross-cultural communication & sensitivity",
    why:
      "Communicate effectively across cultures, time zones, and norms.",
    points: [
      "Directness, formality, and context differences",
      "Timezone etiquette and async-first playbook",
      "Inclusive language & accessibility guidelines",
    ],
  },
  {
    icon: <FiSmile />,
    title: "Customer service & client relationship management",
    why:
      "Handle tough conversations and keep accounts healthy and renewing.",
    points: [
      "Complaint handling & escalation matrix",
      "CSAT/NPS loops; QBR narrative & deck templates",
      "Expectation setting and proactive risk updates",
    ],
  },
  {
    icon: <FiLink2 />,
    title: "Networking & professional relationship skills",
    why:
      "Build a durable network that creates opportunities and support.",
    points: [
      "Warm outreach templates & follow-up cadence",
      "Event strategies (prep → engage → debrief → nurture)",
      "LinkedIn presence: profile, posting, and DM etiquette",
    ],
  },
];

const DELIVERABLES = [
  "Communication playbook (BLUF, async norms, meeting hygiene)",
  "Email/Slack templates + decision log format",
  "Stakeholder map & 1:1 cadence guide",
  "Active listening scripts and feedback prompts",
  "Inclusive language & cross-cultural quick reference",
  "Client comms kit (QBR deck, status, escalation notes)",
  "Networking toolkit (outreach scripts, cadence, tracker)",
];

const PROCESS = [
  { step: "01", title: "Discover", text: "Audit comms channels, pain points, and stakeholder map." },
  { step: "02", title: "Design", text: "Tailor curriculum, templates, and practice scenarios." },
  { step: "03", title: "Enable", text: "Run workshops with live role-play and peer feedback." },
  { step: "04", title: "Apply", text: "Shadow key interactions; coach and refine artifacts." },
  { step: "05", title: "Sustain", text: "Set rituals, metrics (CSAT/NPS), and refresh sessions." },
];

const OUTCOMES = [
  "Clearer updates and fewer meetings.",
  "Stronger cross-team relationships and faster decisions.",
  "Higher CSAT/NPS and fewer escalations.",
  "Confident difficult conversations with better outcomes.",
  "Inclusive, async-friendly communication habits.",
  "A visible, valuable professional network.",
];

/* ------------------ Page ------------------ */
export default function CommunicationRelationshipBuildingPage() {
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
              Communication &{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Relationship Building
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Practical frameworks, role-plays, and toolkits that make every message clearer—and every relationship stronger.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
              >
                Level up communication
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
                *Programs can run as workshops, cohorts, or 1:1 coaching—onsite, virtual, or hybrid.
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
                Want role-specific tracks (Support, Sales, Eng, Ops)? We tailor artifacts and scenarios to each function.
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
              Build stronger relationships
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
            name: "Communication & Relationship Building",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Communication & Relationship Building",
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

/* ------------------ Helpers ------------------ */
// const DELIVERABLES = [
//   "Comms playbook (BLUF, async norms, decision notes)",
//   "Email/Slack templates & meeting hygiene guide",
//   "Stakeholder map + 1:1 toolkit",
//   "Active listening & feedback scripts",
//   "Cross-cultural & inclusive language quick guide",
//   "Client comms kit (status/QBR, escalation notes)",
//   "Networking toolkit (scripts, cadence, tracker)",
// ];
