"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

const InlineWidget = dynamic(
    () => import("react-calendly").then((m) => m.InlineWidget),
    { ssr: false }
);

// replace with your event link:
const CALENDLY_URL = "https://calendly.com/your-handle/intro-call";
const BRAND = "#A9C52A";

export default function SchedulePage() {
    const [email, setEmail] = useState("");

    const prefill = useMemo(
        () => ({ email: email || undefined }),
        [email]
    );

    const pageSettings = useMemo(
        () => ({
            primaryColor: BRAND.replace("#", ""), // Calendly expects hex without '#'
            textColor: "111827",                  // slate-900
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
        }),
        []
    );

    return (
        <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-5xl px-4 py-8">
                <h1 className="text-2xl font-bold text-slate-900">Schedule a call</h1>

                {/* Optional email input (prefills Calendly) */}
                <div className="mt-4">
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Email (optional)
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        placeholder="name@company.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white/95 px-3 text-slate-900 shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-[rgba(169,197,42,0.18)]"
                    />
                    <p className="mt-1 text-xs text-slate-500">
                        If provided, we’ll pass it to Calendly for you.
                    </p>
                </div>

                {/* Calendly calendar */}
                <section className="mt-6 rounded-2xl border border-slate-100 bg-white/95 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                    <div className="overflow-hidden rounded-xl">
                        <InlineWidget
                            url={CALENDLY_URL}
                            prefill={prefill}
                            pageSettings={pageSettings}
                            styles={{ height: "760px" }}
                            utm={{ utmSource: "website", utmMedium: "inline", utmCampaign: "schedule" }}
                        />
                    </div>
                    <p className="mt-3 text-center text-xs text-slate-500">
                        Can’t see the calendar?{" "}
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-700 underline underline-offset-4"
                        >
                            Open Calendly in a new tab
                        </a>
                        .
                    </p>
                </section>
            </div>
        </main>
    );
}
