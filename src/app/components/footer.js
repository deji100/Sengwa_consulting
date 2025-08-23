"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const BRAND = "#A9C52A";

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebook },
  { href: "https://www.linkedin.com/company/sengwaconsulting", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://www.youtube.com/", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.instagram.com/sengwaconsulting?igsh=eGxzcDdhbTA5d2Rm", label: "Instagram", Icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* brand accent */}
      <div
        aria-hidden
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${BRAND}, #6C792D)` }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand / About */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.webp" alt="Sengwa Consulting" width={120} height={120} className="rounded-md" />
              {/* <div className="leading-5">
                <div className="text-lg font-semibold text-gray-900">Sengwa Consulting</div>
                <div className="text-xs text-gray-500">Job Hunting Made Easy</div>
              </div> */}
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              We connect job seekers with the right opportunities and help teams hire with confidence.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:shadow-md"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav className="grid gap-8 sm:grid-cols-2 md:col-span-7 lg:col-span-8" aria-label="Footer">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><Link href="/about-us" className="hover:text-gray-900">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
                <li><Link href="/contact-us" className="hover:text-gray-900">Contact</Link></li>
                <li>
                  <Link
                    href="/job-application"
                    className="inline-flex rounded-lg border border-gray-200 px-3 py-1.5 font-medium text-gray-800 transition hover:bg-gray-50"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><Link href="/services/job-hunt/profile-and-application-services" className="hover:text-gray-900">Job Hunt</Link></li>
                <li><Link href="/services/recruiting/talent-sourcing-and-acquisition" className="hover:text-gray-900">Recruiting</Link></li>
                <li><Link href="/services/staff-or-training-services/leadership-development" className="hover:text-gray-900">Staff/Training Services</Link></li>
                <li><Link href="/services/global-workforce-solutions/international-contract-outsourcing" className="hover:text-gray-900">Global Workforce Solutions</Link></li>
                {/* <li>
                  <Link href="/services" className="text-[13px] text-gray-500 underline-offset-4 hover:underline">
                    View all services →
                  </Link>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="mailto:hr@sengwamina.com" className="hover:text-gray-900">
                    hr@sengwamina.com
                  </a>
                </li>
                <li>
                  <a href="tel:+12245349898" className="hover:text-gray-900">
                    +1&nbsp;224-534-9898
                  </a>
                </li>
                <li>Chicago, IL</li>
              </ul>
            </div>

            {/* Newsletter (optional, no backend required) */}
            {/* <div>
              <h3 className="text-sm font-semibold text-gray-900">Newsletter</h3>
              <p className="mt-3 text-sm text-gray-600">
                Join our list for job tips and hiring insights.
              </p>
              <form
                className="mt-3 flex max-w-sm items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-white shadow"
                  style={{ background: `linear-gradient(135deg, ${BRAND}, #6C792D)` }}
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </nav>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-200/70 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Sengwa Consulting. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* <Link href="/privacy" className="hover:text-gray-700">Privacy Policy</Link> */}
            {/* <Link href="/terms" className="hover:text-gray-700">Terms of Service</Link> */}
            {/* <Link href="/sitemap.xml" className="hover:text-gray-700">Sitemap</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
