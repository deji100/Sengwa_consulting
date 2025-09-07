"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RiMenuFold3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

const BRAND = "#A9C52A";

const SERVICES = [
    {
        title: "Job Hunt",
        items: [
            { label: "Profile & Application Services", href: "/services/job-hunt/profile-and-application-services" },
            { label: "Interview Preparation", href: "/services/job-hunt/interview-preparation" },
            { label: "Career Strategy & Assessment", href: "/services/job-hunt/career-strategy-and-assessment" },
        ],
    },
    {
        title: "Recruiting",
        items: [
            { label: "Talent Sourcing & Acquisition", href: "/services/recruiting/talent-sourcing-and-acquisition" },
            { label: "Screening & Assessment", href: "/services/recruiting/screening-and-assessment" },
            { label: "Interview & Selection Process", href: "/services/recruiting/interview-and-selection-process" },
            { label: "Specialized Recruitment", href: "/services/recruiting/specialized-recruitment" },
            { label: "Client Partnership Services", href: "/services/recruiting/client-partnership-services" },
        ],
    },
    {
        title: "Staff/Training Services",
        items: [
            { label: "Leadership Development", href: "/services/staff-or-training-services/leadership-development" },
            { label: "Team Building & Collaboration", href: "/services/staff-or-training-services/team-building-and-collaboration" },
            { label: "Conflict Resolution & Management", href: "/services/staff-or-training-services/conflict-resolution-and-management" },
            { label: "Communication & Relationship Building", href: "/services/staff-or-training-services/communication-and-relationship-building" },
            { label: "Professional Development", href: "/services/staff-or-training-services/professional-development" },
            { label: "Organizational Culture", href: "/services/staff-or-training-services/organizational-culture" },
            { label: "Background Check & Screening Services", href: "/services/staff-or-training-services/background-check-and-screening-services" },
        ],
    },
    {
        title: "Global Workforce Solutions",
        items: [
            { label: "International Contract Outsourcing", href: "/services/global-workforce-solutions/international-contract-outsourcing" },
        ],
    },
];

/* -------- helpers -------- */
function BodyPortal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

function useClickOutside(refs, handler) {
    useEffect(() => {
        const onDown = (e) => {
            for (const r of refs) {
                if (r.current && r.current.contains(e.target)) return;
            }
            handler();
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [refs, handler]);
}

/* -------- Start Options Modal -------- */
function StartOptionsModal({ open, onClose }) {
    const router = useRouter();
    const firstLinkRef = useRef(null);
    const [closing, setClosing] = useState(false);

    // esc to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // focus first link
    useEffect(() => {
        if (!open) return;
        const t = setTimeout(() => firstLinkRef.current?.focus(), 0);
        return () => clearTimeout(t);
    }, [open]);

    if (!open) return null;

    const closeThenGo = (e, href) => {
        e.preventDefault();
        if (closing) return;
        setClosing(true);
        onClose(); // unmount/close modal
        // Let state flush (two RAFs ~ next tick) before routing
        requestAnimationFrame(() => {
            requestAnimationFrame(() => router.push(href));
        });
    };

    const Card = ({ href, title, desc, first }) => (
        <Link
            href={href}
            prefetch={false}
            onClick={(e) => closeThenGo(e, href)}
            ref={first ? firstLinkRef : undefined}
            className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-[rgba(169,197,42,0.4)]"
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
                className={`fixed inset-0 z-[1000] flex items-center justify-center transition-opacity ${closing ? "opacity-0 pointer-events-none" : "opacity-100"
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
                        <IoClose size={18} />
                    </button>

                    <h2 id="start-modal-title" className="pr-10 text-lg font-semibold text-slate-900">
                        What would you like to do?
                    </h2>

                    <ul className="mt-4 space-y-3">
                        <li>
                            <Card
                                first
                                href="/job-application"
                                title="Are you Job hunting?"
                                desc="Find roles and submit your application."
                            />
                        </li>
                        <li>
                            <Card
                                href="/solution-for-organizations"
                                title="Are you looking for Employees?"
                                desc="Start a hiring request for your team."
                            />
                        </li>
                        <li>
                            <Card
                                href="/solution-for-organizations"
                                title="Are you interested in staff training?"
                                desc="Explore workshops and leadership programs."
                            />
                        </li>
                    </ul>

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

export default function NavBar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [startOpen, setStartOpen] = useState(false);

    // desktop mega dropdown
    const [ddOpen, setDdOpen] = useState(false);
    const triggerRef = useRef(null);
    const panelRef = useRef(null);
    const [panelStyle, setPanelStyle] = useState({}); // {top,left,width,maxHeight}

    // mobile accordion (only one open at a time)
    const [openMobileIdx, setOpenMobileIdx] = useState(null);

    useClickOutside([triggerRef, panelRef], () => setDdOpen(false));

    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && setDdOpen(false);
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close all overlays whenever the route changes
    useEffect(() => {
        setStartOpen(false);
        setDrawerOpen(false);
        setDdOpen(false);
    }, [pathname]);

    const positionPanel = () => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const MARGIN = 8;
        const GAP = 12;
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const width = Math.min(1100, vw - MARGIN * 2);
        let left = Math.round(rect.left + rect.width / 2 - width / 2);
        left = Math.max(MARGIN, Math.min(left, vw - width - MARGIN));

        const top = Math.round(rect.bottom + GAP);
        const maxHeight = Math.max(220, Math.min(vh - top - MARGIN, Math.floor(vh * 0.8)));
        setPanelStyle({ top, left, width, maxHeight });
    };

    useEffect(() => {
        if (!ddOpen) return;
        positionPanel();
        const onScroll = () => requestAnimationFrame(positionPanel);
        const onResize = () => requestAnimationFrame(positionPanel);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [ddOpen]);

    const openStartModal = () => {
        setDdOpen(false);
        setStartOpen(true);
    };

    const openStartFromMobile = () => {
        setDrawerOpen(false);
        setTimeout(() => setStartOpen(true), 150); // avoid overlay stacking while drawer closes
    };

    return (
        <>
            {/* Fixed, glassy header */}
            <header
                className={`fixed inset-x-0 top-0 z-[100] border-b transition-all supports-[backdrop-filter]:backdrop-blur-xl ${scrolled ? "border-gray-200/80 bg-white/80 shadow-lg shadow-gray-900/5" : "border-transparent bg-white/60"
                    }`}
                style={{ WebkitBackdropFilter: "saturate(1.1) blur(14px)" }}
            >
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND}80)` }} />
                <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-3">
                        <Image src="/logo.webp" alt="Sengwa Consulting" width={120} height={120} className="rounded" priority />
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-1 md:flex">
                        <li className="relative">
                            <button
                                ref={triggerRef}
                                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                style={{ outlineColor: BRAND }}
                                aria-haspopup="true"
                                aria-expanded={ddOpen}
                                onClick={() => setDdOpen((v) => !v)}
                                onMouseEnter={() => setDdOpen(true)}
                            >
                                Services
                                <FiChevronDown className={`transition ${ddOpen ? "rotate-180" : ""}`} />
                            </button>
                        </li>

                        <li><Link className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" href="/about-us">About Us</Link></li>
                        <li><Link className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" href="/contact-us">Let&apos;s Talk</Link></li>
                        <li><Link className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" href="/faq">FAQ</Link></li>

                        {/* Get Started opens modal */}
                        <li className="ml-3 md:ml-4 lg:ml-5">
                            {/* <button
                                type="button"
                                onClick={openStartModal}
                                className="rounded-xl px-4 md:px-5 py-2 font-semibold text-white transition"
                                style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)`, boxShadow: "0 10px 24px rgba(169,197,42,.28)" }}
                            >
                                Get Started
                            </button> */}
                        </li>
                    </ul>

                    {/* Mobile toggle */}
                    <button
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-800 md:hidden"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Open menu"
                    >
                        <RiMenuFold3Fill size={22} />
                    </button>
                </nav>
            </header>

            {/* === Desktop MEGA PANEL (portal) === */}
            {ddOpen && (
                <BodyPortal>
                    <div
                        ref={panelRef}
                        onMouseEnter={() => setDdOpen(true)}
                        onMouseLeave={() => setDdOpen(false)}
                        className="fixed z-[120] overflow-hidden rounded-2xl border bg-white shadow-2xl ring-1 ring-black/5 transition-opacity data-[state=enter]:opacity-100 data-[state=leave]:opacity-0"
                        style={{ ...panelStyle, opacity: 1, borderColor: "rgba(0,0,0,0.06)" }}
                        data-state="enter"
                    >
                        <div className="h-1 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND}80)` }} />
                        <div className="max-h-full overflow-auto p-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {SERVICES.map((col) => (
                                    <section
                                        key={col.title}
                                        className="rounded-xl border bg-white/90 p-3 backdrop-blur-sm transition hover:shadow-md"
                                        style={{ borderColor: "rgba(0,0,0,0.06)" }}
                                    >
                                        <h4 className="mb-2 text-sm font-semibold" style={{ color: BRAND }}>
                                            {col.title}
                                        </h4>
                                        <ul className="space-y-1.5 text-[13px]">
                                            {col.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link href={item.href} className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </BodyPortal>
            )}

            {/* Mobile drawer */}
            <div className={`fixed inset-0 z-[99] transform transition ${drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
                <aside
                    className={`absolute right-0 top-0 h-full w-[88%] max-w-sm transform bg-white shadow-2xl transition ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between border-b px-4 py-3">
                        <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2">
                            <Image src="/logo.webp" alt="Sengwa" width={34} height={34} className="rounded-sm" />
                            <span className="font-semibold text-gray-900">Sengwa Consulting</span>
                        </Link>
                        <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                            <IoClose size={18} />
                        </button>
                    </div>

                    <ul className="space-y-2 overflow-auto p-4">
                        <li><Link className="block rounded-lg border px-3 py-2 text-gray-800 hover:bg-gray-50" href="/about-us" onClick={() => setDrawerOpen(false)}>About Us</Link></li>
                        <li><Link className="block rounded-lg border px-3 py-2 text-gray-800 hover:bg-gray-50" href="/contact-us" onClick={() => setDrawerOpen(false)}>Let&apos;s Talk</Link></li>
                        <li><Link className="block rounded-lg border px-3 py-2 text-gray-800 hover:bg-gray-50" href="/faq" onClick={() => setDrawerOpen(false)}>FAQ</Link></li>

                        {/* one-at-a-time accordion for Services groups */}
                        {SERVICES.map((group, idx) => {
                            const open = openMobileIdx === idx;
                            return (
                                <li key={group.title} className="rounded-lg border">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between px-3 py-2 font-medium text-gray-900"
                                        aria-expanded={open}
                                        onClick={() => setOpenMobileIdx(open ? null : idx)}
                                    >
                                        {group.title}
                                        <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-[grid-template-rows] ${open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"}`}>
                                        <ul className="min-h-0 space-y-1 p-2">
                                            {group.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                                                        onClick={() => setDrawerOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}

                        <li>
                            {/* Mobile Get Started opens modal */}
                            {/* <button
                                onClick={openStartFromMobile}
                                className="block w-full rounded-xl px-4 py-3 text-center font-semibold text-white"
                                style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)`, boxShadow: "0 10px 24px rgba(169,197,42,.28)" }}
                            >
                                Get Started
                            </button> */}
                        </li>
                    </ul>

                    <div className="mt-auto border-t p-4 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} Sengwa Consulting
                    </div>
                </aside>
            </div>

            {/* Spacer so content isn't hidden by fixed nav */}
            <div className="h-14 md:h-20" />

            {/* Start Options Modal */}
            <StartOptionsModal open={startOpen} onClose={() => setStartOpen(false)} />
        </>
    );
}
