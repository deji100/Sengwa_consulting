"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { testimonials as defaultTestimonials } from "./data";

const BRAND = "#A9C52A";

/** Avatar with initials fallback */
function Avatar({ src, name }) {
    const initials = useMemo(() => {
        if (!name) return "•";
        return name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((n) => n[0]?.toUpperCase() || "")
            .join("");
    }, [name]);

    if (src) {
        return (
            <Image
                src={src}
                alt={name ? `${name} avatar` : "avatar"}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-black/5"
            />
        );
    }
    return (
        <div
            className="grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
            aria-hidden="true"
        >
            {initials || "•"}
        </div>
    );
}

/** Single card (equal height) */
function TestimonialCard({ t }) {
    return (
        <article className="group h-full rounded-2xl border border-black/5 bg-white p-5 shadow-[0_10px_24px_rgba(24,39,75,.08)] transition hover:shadow-[0_14px_30px_rgba(24,39,75,.12)]">
            <div
                className="mb-4 h-1 w-16 rounded-full"
                style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
            />
            <p className="line-clamp-5 text-[15px] leading-6 text-gray-700">
                {t.review}
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-dashed border-gray-200 pt-4">
                <Avatar src={t.image} name={t.name} />
                <div className="min-w-0">
                    <h5 className="truncate text-[15px] font-semibold text-gray-900">{t.name}</h5>
                    <p className="truncate text-xs text-gray-500">{t.position}</p>
                </div>
            </div>
        </article>
    );
}

export default function TestimonialsCarousel({ items = defaultTestimonials }) {
    const containerRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // slides per view based on breakpoint
    const getSPV = () => {
        if (typeof window === "undefined") return 1;
        const w = window.innerWidth;
        if (w >= 1024) return 3;
        if (w >= 640) return 2;
        return 1;
    };
    const spvRef = useRef(1);
    useEffect(() => {
        const update = () => (spvRef.current = getSPV());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const scrollToIndex = (i) => {
        const el = containerRef.current;
        if (!el) return;
        const spv = spvRef.current;
        const slideW = el.clientWidth / spv;
        el.scrollTo({ left: i * slideW, behavior: "smooth" });
        setIndex(i);
    };

    // sync active index on manual scroll/drag
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const spv = spvRef.current;
                const slideW = el.clientWidth / spv;
                setIndex(Math.round(el.scrollLeft / slideW));
                ticking = false;
            });
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    // autoplay (paused on hover/touch)
    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            const el = containerRef.current;
            if (!el) return;
            const spv = spvRef.current;
            const maxIndex = Math.max(0, items.length - spv);
            const next = index >= maxIndex ? 0 : index + 1;
            scrollToIndex(next);
        }, 4500);
        return () => clearInterval(id);
    }, [index, items.length, paused]);

    const maxIndex = Math.max(0, items.length - spvRef.current);

    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <header className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                        Testimonials
                    </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                        What candidates and clients say about working with Sengwa Consulting.
                    </p>
                </header>

                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onPointerDown={() => setPaused(true)}
                    onPointerUp={() => setPaused(false)}
                >
                    {/* edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

                    {/* Track */}
                    <ul
                        ref={containerRef}
                        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-none`}
                    >
                        {items.map((t, i) => (
                            <li
                                key={i}
                                className="snap-start basis-full shrink-0 sm:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-[280px] sm:h-[280px] lg:h-[250px]">
                                    <TestimonialCard t={t} />
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Arrows */}
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => scrollToIndex(Math.max(0, index - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow transition hover:bg-white hover:shadow-md"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6l-6 6 6 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => scrollToIndex(Math.min(maxIndex, index + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow transition hover:bg-white hover:shadow-md"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6l6 6-6 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: Math.max(1, items.length - spvRef.current + 1) }).map((_, i) => {
                        const active = i === index;
                        return (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => scrollToIndex(i)}
                                className="h-2.5 w-2.5 rounded-full transition"
                                style={{
                                    background: active
                                        ? `linear-gradient(135deg, ${BRAND}, #6C792D)`
                                        : "rgba(0,0,0,.12)",
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
