"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImg from "/public/hero-image.webp";

export default function Hero() {
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
            <span className="inline-block rounded-full px-3 py-1 text-sm font-medium ring-1"
              style={{
                color: "var(--brand-dark)",
                background: "color-mix(in srgb, var(--brand) 12%, white)",
                borderColor: "color-mix(in srgb, var(--brand) 35%, transparent)"
              }}>
              Job Hunting Made Easy
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Partner in{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, var(--brand-dark), var(--brand))` }}
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
              <Link
                href="/job-application"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: "linear-gradient(135deg, var(--brand-dark), var(--brand))",
                  boxShadow: "0 12px 28px color-mix(in srgb, var(--brand) 35%, transparent)"
                }}
              >
                Get Started
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  color: "var(--brand-dark)",
                  border: "1px solid color-mix(in srgb, var(--brand) 35%, transparent)"
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
              <div className="pointer-events-none absolute inset-0 rounded-2xl"
                   style={{ boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--brand) 18%, transparent)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* subtle divider */}
      <svg aria-hidden viewBox="0 0 1440 60" className="block h-10 w-full" preserveAspectRatio="none"
           style={{ color: "color-mix(in srgb, var(--brand) 8%, white)" }}>
        <path fill="currentColor" d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}
