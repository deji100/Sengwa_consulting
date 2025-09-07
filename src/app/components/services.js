"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    FiSearch,       // Job Hunt
    FiUserPlus,     // Recruiting
    FiUsers,        // Staff/Training
    FiGlobe,        // Global Workforce
    FiCheck,        // bullets
    FiArrowRight,   // ctas
} from "react-icons/fi";

const BRAND = "#A9C52A";

/* ------------------ Start Options Modal ------------------ */
function BodyPortal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

function StartOptionsModal({ open, onClose }) {
    const router = useRouter();
    const firstRef = useRef(null);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        const t = setTimeout(() => firstRef.current?.focus(), 0);
        return () => clearTimeout(t);
    }, [open]);

    if (!open) return null;

    const closeThenGo = (e, href) => {
        e.preventDefault();
        if (closing) return;
        setClosing(true);
        onClose();
        // ensure state flush before navigating
        requestAnimationFrame(() => {
            requestAnimationFrame(() => router.push(href));
        });
    };

    const Card = ({ href, title, desc, first }) => (
        <Link
            href={href}
            prefetch={false}
            onClick={(e) => closeThenGo(e, href)}
            ref={first ? firstRef : undefined}
            className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-[rgba(169,197,42,0.35)]"
        >
            <span className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full" style={{ background: BRAND }} />
                <span className="leading-6">
                    <span className="font-medium">{title}</span>
                    <span className="block text-sm text-slate-500">{desc}</span>
                </span>
            </span>
        </Link>
    );

    return (
        <BodyPortal>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="start-modal-title"
                className={`fixed inset-0 z-[140] flex items-center justify-center transition-opacity ${closing ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div
                    className={`relative z-[141] w-full max-w-lg rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl transition-all ${closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
                    >
                        ×
                    </button>

                    <h2 id="start-modal-title" className="pr-10 text-lg font-semibold text-slate-900">
                        What would you like to do?
                    </h2>

                    <div className="mt-4 space-y-3">
                        <Card
                            first
                            href="/job-application"
                            title="Are you Job hunting?"
                            desc="Find roles and submit your application."
                        />
                        <Card
                            href="/solution-for-organizations"
                            title="Are you looking for Employees?"
                            desc="Start a hiring request for your team."
                        />
                        <Card
                            href="/solution-for-organizations"
                            title="Are you interested in staff training?"
                            desc="Explore workshops and leadership programs."
                        />
                    </div>

                    <div
                        aria-hidden
                        className="mt-5 h-1 w-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
                    />
                </div>
            </div>
        </BodyPortal>
    );
}

/* ------------------ Content ------------------ */
const CATEGORIES = [
    {
        icon: <FiSearch />,
        title: "Job Hunt",
        href: "/services/job-hunt/profile-and-application-services",
        desc:
            "End-to-end help from profile polish to daily applications and interview prep.",
        points: [
            "Profile & application services (resume, LinkedIn, ATS-ready)",
            "Daily job applications with status tracking",
            "Interview preparation and offer support",
        ],
        links: [
            { label: "Profile & Application Services", href: "/services/job-hunt/profile-and-application-services" },
            { label: "Interview Preparation", href: "/services/job-hunt/interview-preparation" },
            { label: "Career Strategy & Assessment", href: "/services/job-hunt/career-strategy-and-assessment" },
        ],
    },
    {
        icon: <FiUserPlus />,
        title: "Recruiting",
        href: "/services/recruiting/talent-sourcing-and-acquisition",
        desc:
            "From sourcing to selection—structured, data-driven recruiting that moves fast.",
        points: [
            "Targeted sourcing & outreach across channels",
            "Screening, assessments, and scorecards",
            "Structured interviews & efficient close",
        ],
        links: [
            { label: "Talent Sourcing & Acquisition", href: "/services/recruiting/talent-sourcing-and-acquisition" },
            { label: "Screening & Assessment", href: "/services/recruiting/screening-and-assessment" },
            { label: "Interview & Selection Process", href: "/services/recruiting/interview-and-selection-process" },
            { label: "Specialized Recruitment", href: "/services/recruiting/specialized-recruitment" },
            { label: "Client Partnership Services", href: "/services/recruiting/client-partnership-services" },
        ],
    },
    {
        icon: <FiUsers />,
        title: "Staff/Training Services",
        href: "/services/staff-or-training-services/leadership-development",
        desc:
            "Level up leaders and teams with practical programs that stick in real work.",
        points: [
            "Leadership development & manager training",
            "Team collaboration and conflict facilitation",
            "Culture, communication, and growth systems",
        ],
        links: [
            { label: "Leadership Development", href: "/services/staff-or-training-services/leadership-development" },
            { label: "Team Building & Collaboration", href: "/services/staff-or-training-services/team-building-and-collaboration" },
            { label: "Conflict Resolution & Management", href: "/services/staff-or-training-services/conflict-resolution-and-management" },
            { label: "Communication & Relationship Building", href: "/services/staff-or-training-services/communication-and-relationship-building" },
            { label: "Professional Development", href: "/services/staff-or-training-services/professional-development" },
            { label: "Organizational Culture", href: "/services/staff-or-training-services/organizational-culture" },
            { label: "Background Check & Screening", href: "/services/staff-or-training-services/background-check-and-screening-services" },
        ],
    },
    {
        icon: <FiGlobe />,
        title: "Global Workforce Solutions",
        href: "/services/global-workforce-solutions/international-contract-outsourcing",
        desc:
            "Build and run compliant international teams without spinning up entities everywhere.",
        points: [
            "Global sourcing & contractor onboarding",
            "Cross-border payroll & compliance runbooks",
            "Remote team integration and SLAs",
        ],
        links: [
            { label: "International Contract Outsourcing", href: "/services/global-workforce-solutions/international-contract-outsourcing" },
        ],
    },
];

/* ------------------ Motion ------------------ */
const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ------------------ Page ------------------ */
export default function ServicesOverviewPage() {
    const [startOpen, setStartOpen] = useState(false);

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
                            Services that move{" "}
                            <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                                your business forward
                            </span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                            From job hunt acceleration to recruiting, training, and global workforce operations—pick the help you need, plug it in fast, and see results.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3">
                            <Link
                                href="/talk2us"
                                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
                            >
                                Talk to a strategist
                                <FiArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.header>
                </div>
                {/* brand divider */}
                <div aria-hidden className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }} />
            </section>

            {/* CATEGORIES GRID */}
            <section id="services" className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.06 }}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
                    >
                        {CATEGORIES.map((cat) => (
                            <motion.article
                                key={cat.title}
                                variants={fadeUp}
                                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white shadow"
                                        style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                                    >
                                        <span className="text-xl">{cat.icon}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="text-lg font-semibold text-gray-900">{cat.title}</h2>
                                        <p className="mt-1 text-sm text-gray-600">{cat.desc}</p>
                                    </div>
                                </div>

                                {/* bullets */}
                                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                    {cat.points.map((p) => (
                                        <li key={p} className="flex items-start gap-2">
                                            <FiCheck className="mt-0.5 text-[#6C792D]" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* popular links */}
                                <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">Popular services</div>
                                    <ul className="mt-2 grid gap-1.5 text-sm">
                                        {cat.links.map((l) => (
                                            <li key={l.href}>
                                                <Link
                                                    href={l.href}
                                                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-gray-800 hover:bg-white hover:shadow-sm"
                                                >
                                                    {l.label}
                                                    <FiArrowRight className="opacity-60" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* primary CTA */}
                                <div className="mt-6 flex items-center justify-between">
                                    <Link
                                        href={cat.href}
                                        className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                                        style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
                                    >
                                        Explore {cat.title}
                                        <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA STRIP */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:flex md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Not sure where to start?</h3>
                            <p className="mt-1 text-gray-600">Tell us your goal—we’ll recommend the right package and timeline.</p>
                        </div>
                        <div className="mt-4 flex gap-3 md:mt-0">
                            {/* Get Started opens modal */}
                            <button
                                type="button"
                                onClick={() => setStartOpen(true)}
                                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus:ring-4"
                                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
                            >
                                Get Started
                            </button>

                            <Link
                                href="/talk2us"
                                className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm hover:shadow"
                            >
                                Book a call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Sengwa Consulting Services",
                        itemListElement: CATEGORIES.map((cat, i) => ({
                            "@type": "ListItem",
                            position: i + 1,
                            item: {
                                "@type": "Service",
                                name: cat.title,
                                url: cat.href,
                                description: cat.desc,
                                provider: { "@type": "Organization", name: "Sengwa Consulting" },
                                hasOfferCatalog: {
                                    "@type": "OfferCatalog",
                                    name: `${cat.title} Services`,
                                    itemListElement: cat.links.map((l, j) => ({
                                        "@type": "Offer",
                                        position: j + 1,
                                        itemOffered: { "@type": "Service", name: l.label, url: l.href },
                                    })),
                                },
                            },
                        })),
                    }),
                }}
            />

            {/* Modal */}
            <StartOptionsModal open={startOpen} onClose={() => setStartOpen(false)} />
        </main>
    );
}
