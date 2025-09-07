// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import HeroImg from "/public/hero-image.webp";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* gentle brand glow */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
//         style={{ background: "color-mix(in srgb, var(--brand) 35%, transparent)" }}
//       />

//       <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
//         <div className="grid items-center gap-10 md:grid-cols-2">
//           {/* Copy */}
//           <div className="animate-float-up">
//             <span className="inline-block rounded-full px-3 py-1 text-sm font-medium ring-1"
//               style={{
//                 color: "var(--brand-dark)",
//                 background: "color-mix(in srgb, var(--brand) 12%, white)",
//                 borderColor: "color-mix(in srgb, var(--brand) 35%, transparent)"
//               }}>
//               Job Hunting Made Easy
//             </span>

//             <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
//               Your Partner in{" "}
//               <span
//                 className="bg-clip-text text-transparent"
//                 style={{ backgroundImage: `linear-gradient(90deg, var(--brand-dark), var(--brand))` }}
//               >
//                 Job Hunting
//               </span>{" "}
//               Success
//             </h1>

//             <p className="mt-5 max-w-prose text-lg leading-7 text-gray-600">
//               We connect job seekers with the right opportunities. Let us guide your job search with expert support,
//               resources, and a winning strategy tailored to you.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/job-application"
//                 className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
//                 style={{
//                   background: "linear-gradient(135deg, var(--brand-dark), var(--brand))",
//                   boxShadow: "0 12px 28px color-mix(in srgb, var(--brand) 35%, transparent)"
//                 }}
//               >
//                 Get Started
//               </Link>

//               <Link
//                 href="/contact-us"
//                 className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2"
//                 style={{
//                   color: "var(--brand-dark)",
//                   border: "1px solid color-mix(in srgb, var(--brand) 35%, transparent)"
//                 }}
//               >
//                 Talk to Us
//               </Link>
//             </div>

//             <div className="mt-8 text-sm text-gray-500">
//               Fast response • Dedicated coaching • Proven outcomes
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative animate-float-up md:[animation-delay:.08s]">
//             <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
//               <Image
//                 src={HeroImg}
//                 alt="Professional career support"
//                 fill
//                 priority
//                 sizes="(min-width: 768px) 50vw, 100vw"
//                 className="rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
//               />
//               <div className="pointer-events-none absolute inset-0 rounded-2xl"
//                    style={{ boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--brand) 18%, transparent)" }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* subtle divider */}
//       <svg aria-hidden viewBox="0 0 1440 60" className="block h-10 w-full" preserveAspectRatio="none"
//            style={{ color: "color-mix(in srgb, var(--brand) 8%, white)" }}>
//         <path fill="currentColor" d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,60 L0,60 Z" />
//       </svg>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "/public/hero-image.webp";

function StartOptionsModal({ open, onClose }) {
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus first action when opened
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* panel */}
      <div
        ref={panelRef}
        className="relative z-[81] w-full max-w-lg rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
        >
          ×
        </button>

        <h2
          id="start-modal-title"
          className="pr-10 text-lg font-semibold text-slate-900"
        >
          What would you like to do?
        </h2>

        <ul className="mt-4 space-y-3">
          <li>
            <Link
              ref={firstLinkRef}
              href="/job-application"
              className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <span className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: "var(--brand)" }}
                />
                <span className="leading-6">
                  <span className="font-medium">Are you job hunting?</span>
                  <span className="block text-sm text-slate-500">
                    Find roles and submit your application.
                  </span>
                </span>
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/solution-for-organizations"
              className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <span className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: "var(--brand)" }}
                />
                <span className="leading-6">
                  <span className="font-medium">Are you looking for employees?</span>
                  <span className="block text-sm text-slate-500">
                    Start a hiring request for your team.
                  </span>
                </span>
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/solution-for-organizations"
              className="group block rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <span className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: "var(--brand)" }}
                />
                <span className="leading-6">
                  <span className="font-medium">
                    Are you interested in staff training?
                  </span>
                  <span className="block text-sm text-slate-500">
                    Explore workshops and leadership programs.
                  </span>
                </span>
              </span>
            </Link>
          </li>
        </ul>

        <div
          aria-hidden
          className="mt-5 h-1 w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--brand), color-mix(in srgb, var(--brand) 60%, black))",
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* gentle brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "color-mix(in srgb, var(--brand) 35%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="animate-float-up">
            <span
              className="inline-block rounded-full px-3 py-1 text-sm font-medium ring-1"
              style={{
                color: "var(--brand-dark)",
                background: "color-mix(in srgb, var(--brand) 12%, white)",
                borderColor: "color-mix(in srgb, var(--brand) 35%, transparent)",
              }}
            >
              Job Hunting Made Easy
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Partner in{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, var(--brand-dark), var(--brand))`,
                }}
              >
                Job Hunting
              </span>{" "}
              Success
            </h1>

            <p className="mt-5 max-w-prose text-lg leading-7 text-gray-600">
              We connect job seekers with the right opportunities. Let us guide your job search with expert support,
              resources, and a winning strategy tailored to you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Get Started now opens the modal */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-dark), var(--brand))",
                  boxShadow:
                    "0 12px 28px color-mix(in srgb, var(--brand) 35%, transparent)",
                }}
              >
                Get Started
              </button>

              <Link
                href="/talk2us"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  color: "var(--brand-dark)",
                  border:
                    "1px solid color-mix(in srgb, var(--brand) 35%, transparent)",
                }}
              >
                Talk to Us
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Fast response • Dedicated coaching • Proven outcomes
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float-up md:[animation-delay:.08s]">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
              <Image
                src={HeroImg}
                alt="Professional career support"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px color-mix(in srgb, var(--brand) 18%, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* subtle divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        className="block h-10 w-full"
        preserveAspectRatio="none"
        style={{ color: "color-mix(in srgb, var(--brand) 8%, white)" }}
      >
        <path
          fill="currentColor"
          d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,60 L0,60 Z"
        />
      </svg>

      {/* modal */}
      <StartOptionsModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
