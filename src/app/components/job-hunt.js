"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { steps } from "./data";
import {
    LuSettings, LuLightbulb, LuFileText, LuSearch, LuTrophy, LuMonitor,
} from "react-icons/lu";

const BRAND = "#A9C52A";
const iconMap = { settings: LuSettings, bulb: LuLightbulb, file: LuFileText, search: LuSearch, trophy: LuTrophy, monitor: LuMonitor };

function StepCard({ step, index, reduceMotion }) {
    const Icon = iconMap[step.icon] ?? LuSettings;

    // Variants that start at center and fly to (dx, dy)
    const variants = {
        hidden: () => ({ x: 0, y: 0, opacity: 0, scale: 0.9 }),
        shown: ({ index, dx, dy }) => ({
            x: dx,
            y: dy,
            opacity: 1,
            scale: 1,
            transition: reduceMotion
                ? { duration: 3 }
                : { type: "spring", stiffness: 80, damping: 14, delay: 0.08 * index },
        }),
    };

    return (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.article
                variants={variants}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, amount: 0.35 }}           // 👈 animate only when in view
                custom={{ index, dx: step.dx, dy: step.dy }}
                className="pointer-events-auto w-[340px] max-w-[86vw] rounded-[20px] border border-black/5 bg-white p-4 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                        <Icon size={22} />
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                        <span
                            className="grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-white shadow"
                            style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                        >
                            {String(step.id).padStart(2, "0")}
                        </span>
                    </div>
                </div>
                <p className="mt-2 text-sm leading-5 text-gray-600">{step.desc}</p>
            </motion.article>
        </div>
    );
}

export default function JobHunt() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-2 py-8 md:py-20">
                <header className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                            Job Hunt <span className="text-gray-700">Made Easy</span>
                        </h2>
                        <p className="mt-2 text-gray-600">Your 6-step journey from onboarding to offer, visualized.</p>
                    </div>
                    {/* <Link
                        href="/job-application"
                        className="hidden rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg md:inline-block"
                        style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                    >
                        Get Started
                    </Link> */}
                </header>

                {/* Desktop radial canvas: only animates when this canvas is in view */}
                <motion.div
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}  // 👈 trigger once when canvas enters
                    className="relative mt-10 hidden min-h-[620px] rounded-3xl border border-black/5 bg-white/80 p-6 shadow-2xl md:block"
                >
                    {/* subtle bg glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                        style={{ background: "radial-gradient(600px 300px at 50% 50%, rgba(169,197,42,.18), transparent)" }}
                    />

                    {/* Center hub (pops in on view) */}
                    <motion.div
                        initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative grid h-44 w-44 place-items-center">
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                                    background: "#fff",
                                    boxShadow: "0 12px 28px rgba(24,39,75,.15), inset 0 0 0 1px rgba(0,0,0,.06)",
                                    borderRadius: 16,
                                }}
                            />
                            <div className="relative text-center">
                                <div className="text-sm font-semibold tracking-wide text-gray-900">JOB HUNT</div>
                                <div className="text-xs text-gray-600">MADE EASY</div>
                            </div>
                            <div
                                className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] blur-xl"
                                style={{ background: `conic-gradient(from 0deg, ${BRAND}, #6C792D, ${BRAND})`, opacity: 0.2 }}
                            />
                        </div>
                    </motion.div>

                    {/* Cards fan-out only when in view */}
                    {steps.map((s, i) => (
                        <StepCard key={s.id} step={s} index={i} reduceMotion={reduceMotion} />
                    ))}

                    {/* Desktop CTA */}
                    {/* <Link
                        href="/job-application"
                        className="absolute bottom-6 right-6 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                    >
                        Get Started
                    </Link> */}
                </motion.div>

                {/* Mobile list (already in-view; make it once as well) */}
                <div className="mt-8 grid gap-4 md:hidden">
                    {steps.map((s, i) => {
                        const Icon = iconMap[s.icon] ?? LuSettings;
                        return (
                            <motion.article
                                key={s.id}
                                initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="rounded-2xl border border-black/5 bg-white p-4 shadow-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${s.color} text-white`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                                    <span
                                        className="ml-auto grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold text-white"
                                        style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                                    >
                                        {String(s.id).padStart(2, "0")}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
