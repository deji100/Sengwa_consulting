"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const BRAND = "#A9C52A";

/* ---------- Portal helper ---------- */
function BodyPortal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

/* ---------- Modal ---------- */
function StartOptionsModal({ open, onClose }) {
    const firstRef = useRef(null);

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

    const Card = ({ href, title, desc, first }) => (
        <Link
            href={href}
            onClick={onClose}
            ref={first ? firstRef : undefined}
            className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-[rgba(169,197,42,0.4)]"
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
                className="fixed inset-0 z-[1000] flex items-center justify-center"
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div
                    className="relative z-[141] w-full max-w-lg rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl"
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

/* ---------- Floating Get Started button ---------- */
export const GetStarted = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={open}
                className="fixed bottom-6 right-5 z-[150] inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4"
                style={{
                    background: `linear-gradient(135deg, ${BRAND}, #6C792D)`,
                    boxShadow: "0 14px 30px rgba(169,197,42,.28)",
                }}
            >
                {/* spark icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="-ml-0.5">
                    <path
                        fill="currentColor"
                        d="M12 2l1.9 4.6L19 8.5l-4.1 2 1 4.5L12 12.9 8.1 15l1-4.5L5 8.5l5.1-1.9L12 2z"
                    />
                </svg>
                Get Started
            </button>

            <StartOptionsModal open={open} onClose={() => setOpen(false)} />
        </>
    );
};
