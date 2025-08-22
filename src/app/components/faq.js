"use client";

import Image from "next/image";
import { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import FAQImg from "/public/faq.webp";
import { faqData } from "./data";

const BRAND = "#A9C52A";

export default function Faq() {
    const [openId, setOpenId] = useState(faqData?.[0]?.id ?? null);
    const prefersReduced = useReducedMotion();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, when: "beforeChildren" },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
    };

    return (
        <section className="bg-white">
            {/* brand accent */}
            <div
                aria-hidden
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
            />

            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="grid items-start gap-10 md:grid-cols-2">
                    {/* Left: image with gentle float */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <motion.div
                            animate={
                                prefersReduced
                                    ? {}
                                    : {
                                        y: [0, -8, 0],
                                    }
                            }
                            transition={prefersReduced ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <Image
                                src={FAQImg}
                                alt="Frequently Asked Questions"
                                className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-black/5"
                                priority
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#A9C52A]/15" />
                        </motion.div>
                    </motion.div>

                    {/* Right: FAQ list */}
                    <div>
                        <motion.header
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.4 }}
                            className="mb-6"
                        >
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-2 max-w-prose text-gray-600">
                                Quick answers about our process, timelines, and what to expect.
                            </p>
                        </motion.header>

                        <motion.ul
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-3"
                        >
                            {faqData.map((item) => (
                                <motion.li key={item.id} variants={card}>
                                    <FaqItem
                                        id={item.id}
                                        question={item.question}
                                        answer={item.answer}
                                        openId={openId}
                                        setOpenId={setOpenId}
                                    />
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FaqItem({ id, question, answer, openId, setOpenId }) {
    const isOpen = openId === id;
    const htmlId = useId();

    return (
        <div
            className={`group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md ${isOpen ? "border-[#A9C52A]/40" : "border-gray-100"
                }`}
            style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
        >
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`panel-${htmlId}`}
                onClick={() => setOpenId(isOpen ? null : id)}
                className="flex w-full items-center justify-between gap-4 text-left"
            >
                <span className="text-base font-semibold text-gray-900">{question}</span>
                <span
                    className={`grid h-9 w-9 place-items-center rounded-full border transition ${isOpen ? "rotate-180 border-[#A9C52A]/30" : "border-gray-200"
                        }`}
                    aria-hidden
                >
                    <FiChevronDown className={isOpen ? "text-[#6C792D]" : "text-gray-600"} />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`panel-${htmlId}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.28 }, opacity: { duration: 0.2 } }}
                        className="overflow-hidden"
                    >
                        <div className="pt-3 text-sm leading-relaxed text-gray-700">
                            {answer}
                        </div>

                        {/* subtle brand underline */}
                        <div
                            aria-hidden
                            className="mt-4 h-0.5 w-20 rounded-full"
                            style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
