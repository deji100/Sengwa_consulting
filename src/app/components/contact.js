"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import ContactImage from "/public/contact-us.webp";

const BRAND = "#A9C52A";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const fade = { hidden: { opacity: 0 }, show: { opacity: 1 } };
const spring = { type: "spring", stiffness: 80, damping: 18 };

export default function ContactPage() {
    return (
        <main className="bg-white">
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                        src={ContactImage}
                        alt="Modern office with glass and natural light"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.35) 100%)",
                        }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.08 }}
                        className="grid items-end gap-8 md:grid-cols-[1.1fr,1fr]"
                    >
                        <div>
                            <motion.div variants={fadeUp} transition={spring}>
                                <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Let’s connect
                                </h1>
                                <p className="mt-3 max-w-xl text-white/80">
                                    We respond quickly—tell us what you need and we’ll take it from there.
                                </p>
                            </motion.div>

                            <motion.ul
                                variants={fade}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className="mt-6 flex flex-wrap gap-3"
                            >
                                <li>
                                    <a
                                        href="tel:+12245349898"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/25"
                                    >
                                        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: BRAND }} />
                                        +1 224-534-9898
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:hr@sengwamina.com"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/25"
                                    >
                                        hr@sengwamina.com
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        href="https://wa.me/12245349898"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/25"
                                    >
                                        WhatsApp
                                    </a>
                                </li> */}
                                <li className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    Chicago, IL
                                </li>
                            </motion.ul>
                        </div>

                        <motion.aside
                            variants={fadeUp}
                            transition={{ ...spring, delay: 0.05 }}
                            className="rounded-2xl border border-white/20 bg-white/85 p-5 shadow-2xl backdrop-blur-xl md:p-6"
                            style={{ boxShadow: "0 30px 80px rgba(0,0,0,.25)" }}
                        >
                            <div
                                aria-hidden
                                className="mb-4 h-1 w-full rounded-full"
                                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
                            />
                            <ContactForm />
                            <p className="mt-3 text-center text-xs text-gray-500">
                                We typically reply within one business day.
                            </p>
                        </motion.aside>
                    </motion.div>
                </div>
            </section>

            {/* Details row */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <InfoCard title="Email" value="hr@sengwamina.com" href="mailto:hr@sengwamina.com" />
                        <InfoCard title="Call" value="+1 224-534-9898" href="tel:+12245349898" />
                        <InfoCard title="Location" value="Chicago, IL — serving clients globally" />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

function InfoCard({ title, value, href }) {
    return (
        <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
            className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            style={{ backdropFilter: "saturate(1.05) blur(2px)" }}
        >
            <div className="text-sm font-semibold text-gray-900">{title}</div>
            {href ? (
                <Link href={href} className="mt-1 block text-gray-600 underline-offset-4 hover:underline">
                    {value}
                </Link>
            ) : (
                <div className="mt-1 text-gray-600">{value}</div>
            )}
            <div
                aria-hidden
                className="mt-4 h-0.5 w-20 rounded-full transition-all group-hover:w-28"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
            />
        </motion.div>
    );
}
