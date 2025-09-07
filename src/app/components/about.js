"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const BRAND = "#A9C52A";

/* ------------------ Get Started Modal ------------------ */
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

    // esc to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // focus first card
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
        // let state flush before routing
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
                <span
                    className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                    style={{ background: BRAND }}
                />
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

/* ------------------ Curated images ------------------ */
const IMG = {
    hero: "https://images.pexels.com/photos/31690584/pexels-photo-31690584.jpeg?auto=compress&cs=tinysrgb&w=2400&q=80",
    team: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    plants: "https://images.pexels.com/photos/7888656/pexels-photo-7888656.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
};

export default function AboutUs() {
    const [startOpen, setStartOpen] = useState(false);

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative overflow-clip">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        {/* Left: headline */}
                        <motion.header
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.45 }}
                        >
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                                About{" "}
                                <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                                    Sengwa Consulting
                                </span>
                            </h1>
                            <p className="mt-4 max-w-prose text-lg text-gray-600">
                                We turn job hunting into a guided, stress-free journey—combining strategy,
                                daily execution, and transparent reporting so you can focus on interviews and offers.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {/* Get Started opens modal */}
                                <button
                                    type="button"
                                    onClick={() => setStartOpen(true)}
                                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow"
                                    style={{
                                        background: "linear-gradient(135deg,#A9C52A,#6C792D)",
                                        boxShadow: "0 12px 36px rgba(169,197,42,.25)",
                                    }}
                                >
                                    Get Started
                                </button>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm hover:shadow"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </motion.header>

                        {/* Right: overlapping photo stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45 }}
                            className="relative h-[28rem]"
                        >
                            {/* main image */}
                            <div className="absolute inset-0 z-0 translate-x-2">
                                <Image
                                    src={IMG.hero}
                                    alt="Modern office with glass walls and natural light"
                                    fill
                                    className="rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#A9C52A]/15" />
                            </div>
                            {/* back card */}
                            <motion.div
                                initial={{ rotate: -2, y: 10 }}
                                whileInView={{ rotate: -2, y: 0 }}
                                viewport={{ once: true }}
                                className="absolute left-8 top-6 hidden h-64 w-60 overflow-hidden rounded-2xl border border-gray-100 shadow-lg sm:block"
                            >
                                <Image
                                    src={IMG.plants}
                                    alt="Bright office with plants"
                                    width={1280}
                                    height={960}
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                            {/* front card */}
                            <motion.div
                                initial={{ rotate: 2, y: 12 }}
                                whileInView={{ rotate: 2, y: 0 }}
                                viewport={{ once: true }}
                                className="absolute bottom-4 right-6 hidden h-48 w-64 overflow-hidden rounded-2xl border border-gray-100 shadow-xl sm:block"
                            >
                                <Image src={IMG.team} alt="Collaborative team meeting" fill className="object-cover" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-12">
                    <div className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-3">
                        <ValueCard
                            title="Personalized Strategy"
                            text="We learn your goals, refine your materials, and build a plan that fits your industry and target roles."
                        />
                        <ValueCard
                            title="Daily Execution"
                            text="We apply every day and run targeted outreach—keeping your pipeline active and moving."
                        />
                        <ValueCard
                            title="Transparent Reporting"
                            text="You receive Weekly Status Reports with every company and role we’ve targeted."
                        />
                    </div>
                </div>
            </section>

            {/* HOW WE HELP */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">Your Job Hunt, Supercharged</h2>
                            <p className="mt-3 text-gray-600">
                                From day one, we align on target roles, craft or tune your resume, LinkedIn,
                                and portfolio, then take daily action on your behalf—so you can spend your time
                                preparing for interviews and leveling up your skills.
                            </p>
                            <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                                <li>• Professional resume, LinkedIn & application materials</li>
                                <li>• Daily applications & curated outreach</li>
                                <li>• Interview prep and offer guidance when you land calls</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                        >
                            <Image
                                src={IMG.team}
                                alt="Team aligning on roles and strategy"
                                width={1280}
                                height={960}
                                className="rounded-2xl shadow-2xl ring-1 ring-black/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
                    <div className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-3">
                        <Stat label="Avg. weekly applications" to={120} suffix="+" />
                        <Stat label="Interview readiness sessions" to={50} suffix="+" />
                        <Stat label="Client satisfaction" to={98} suffix="%" />
                    </div>
                </div>
            </section>

            {/* OUR APPROACH */}
            <section className="bg-white pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45 }}
                            className="relative order-2 md:order-1"
                        >
                            <Image
                                src={IMG.plants}
                                alt="Calm, bright workspace"
                                width={1280}
                                height={960}
                                className="rounded-2xl shadow-2xl ring-1 ring-black/5"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#A9C52A]/15" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">A Smooth Journey</h2>
                            <p className="mt-3 text-gray-600">
                                We guide every step—from onboarding and setup to daily applications, weekly reporting,
                                interview prep, and salary negotiation support.
                            </p>
                            <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                                <li>• Clear steps with momentum every week</li>
                                <li>• Coaching before key interviews</li>
                                <li>• Support through offers and transitions</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/talk2us"
                            className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white shadow"
                            style={{
                                background: "linear-gradient(135deg,#A9C52A,#6C792D)",
                                boxShadow: "0 12px 36px rgba(169,197,42,.25)",
                            }}
                        >
                            Talk to us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modal lives at page root so it can overlay everything */}
            <StartOptionsModal open={startOpen} onClose={() => setStartOpen(false)} />
        </main>
    );
}

/* ---- Small presentational pieces ---- */

function ValueCard({ title, text }) {
    return (
        <div
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
        >
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{text}</p>
        </div>
    );
}

function Stat({ label, to = 100, suffix = "" }) {
    const v = useMotionValue(0);
    const rounded = useTransform(v, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(v, to, { duration: 1.2, ease: "easeOut" });
        return () => controls.stop();
    }, [to, v]);

    return (
        <div className="rounded-xl border border-gray-100 p-5 text-center">
            <div className="text-4xl font-extrabold text-gray-900">
                <motion.span>{rounded}</motion.span>
                <span>{suffix}</span>
            </div>
            <div className="mt-1 text-sm text-gray-600">{label}</div>
            <div
                aria-hidden
                className="mx-auto mt-4 h-0.5 w-20 rounded-full"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
            />
        </div>
    );
}
