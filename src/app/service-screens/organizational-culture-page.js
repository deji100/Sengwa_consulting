"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUsers,        // DEI
  FiLayers,       // culture alignment
  FiFlag,         // values-based leadership
  FiSmile,        // engagement
  FiShield,       // harassment prevention
  FiBookOpen,     // ethics & integrity
  FiCheck,        // bullets
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Content ------------------ */
const SUBSERVICES = [
  {
    icon: <FiUsers />,
    title: "Diversity, equity, & inclusion training",
    why:
      "Build an inclusive environment where people can contribute fully and fairly.",
    points: [
      "Foundations: identity, bias, allyship, & inclusive behaviors",
      "Team rituals: inclusive meetings, hiring, feedback & growth",
      "Measurement: perception pulses and action tracking",
    ],
  },
  {
    icon: <FiLayers />,
    title: "Company culture alignment workshops",
    why:
      "Translate values into observable behaviors and operating norms.",
    points: [
      "Culture code canvas: principles → behaviors → examples",
      "Norms charter (collaboration, decision, communication)",
      "Rollout plan with leader modeling & reinforcement loops",
    ],
  },
  {
    icon: <FiFlag />,
    title: "Values-based leadership development",
    why:
      "Leaders who model values create clarity, trust, and accountability.",
    points: [
      "Values → decisions playbook with trade-off guidance",
      "Coaching on narratives, consistency, and recognition",
      "Case labs: practice calls on real dilemmas",
    ],
  },
  {
    icon: <FiSmile />,
    title: "Employee engagement strategies",
    why:
      "Improve energy and retention with data-driven actions that matter.",
    points: [
      "Engagement survey & eNPS with driver analysis",
      "Team action planning toolkit & follow-through cadence",
      "Manager enablement (1:1s, recognition, growth paths)",
    ],
  },
  {
    icon: <FiShield />,
    title: "Workplace harassment prevention",
    why:
      "Create a safe workplace with clear policies, training, and reporting.",
    points: [
      "Policy & scenario-based training (role-aware modules)",
      "Reporting pathways, anti-retaliation, confidentiality",
      "Incident response playbook & documentation templates",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Ethics & integrity training",
    why:
      "Protect trust with practical guidance on conflicts, data, and conduct.",
    points: [
      "Code of Conduct walkthrough with real-world scenarios",
      "Conflicts of interest, gifts, privacy, & data handling",
      "Speak-up culture: channels, protections, and follow-up",
    ],
  },
];

const DELIVERABLES = [
  "Culture Code (principles → behaviors → examples)",
  "DEI curriculum & facilitator guides (live/virtual)",
  "Values-based leadership toolkit & case library",
  "Engagement survey pack, driver analysis, action tracker",
  "Harassment policy training + reporting flowcharts",
  "Ethics & integrity modules with scenario bank",
  "Rollout & reinforcement plan with KPIs and cadence",
];

const PROCESS = [
  { step: "01", title: "Discover", text: "Interviews, survey baseline, policy & practice audit." },
  { step: "02", title: "Define", text: "Clarify values, behaviors, and culture outcomes to target." },
  { step: "03", title: "Design", text: "Build curricula, artifacts, and rollout/communications." },
  { step: "04", title: "Enable", text: "Run leader labs & team workshops; launch policies/tools." },
  { step: "05", title: "Measure", text: "Track engagement, behavior adoption, and incident metrics." },
  { step: "06", title: "Sustain", text: "Reinforce with rituals, recognition, and refresher modules." },
];

const OUTCOMES = [
  "Clear, lived values and operating norms across teams.",
  "Higher engagement and reduced regrettable attrition.",
  "Safer workplace with trusted reporting mechanisms.",
  "Leaders who model integrity and inclusive behaviors.",
  "Compliance strength with documented training & processes.",
];

/* ------------------ Page ------------------ */
export default function OrganizationalCulturePage() {
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
              Organizational{" "}
              <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                Culture
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Turn values into everyday behaviors—safer, fairer, and more engaging workplaces powered by practical systems.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <LinkBtn href="/contact-us">Build your culture program</LinkBtn>
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
                *Policy and compliance modules are tailored by region and run with HR/legal alignment where required.
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
                Need executive alignment first? We’ll start with a leadership lab and cascade from there.
              </p>
            </motion.ol>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <LinkBtn href="/contact-us">Launch your culture program</LinkBtn>
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
            Compliance note: Training content is informational and not legal advice. We coordinate with your HR/legal teams for policy alignment and required notices.
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
            name: "Organizational Culture",
            brand: { "@type": "Brand", name: "Sengwa Consulting" },
            areaServed: "Global",
            serviceType: "Training & Development",
            provider: { "@type": "Organization", name: "Sengwa Consulting" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Organizational Culture",
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
function LinkBtn({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
      style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
    >
      {children}
    </Link>
  );
}

// const DELIVERABLES = [
//   "Culture Code & Norms Charter",
//   "DEI curriculum + facilitator guides",
//   "Values-based leadership toolkit",
//   "Engagement survey & action planning pack",
//   "Harassment prevention training & reporting map",
//   "Ethics & integrity modules with scenarios",
//   "Rollout/communications plan with KPIs",
// ];
