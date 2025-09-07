"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactImage from "/public/contact-us.webp";

// Phone input lib
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Polished selects
import Select from "react-select";
import { Country, State } from "country-state-city";

const BRAND = "#A9C52A";
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const spring = { type: "spring", stiffness: 80, damping: 18 };

/* ---------------- Shared react-select theme & styles ---------------- */
const selectStyles = {
    control: (base, state) => ({
        ...base,
        minHeight: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.95)",
        borderColor: state.isFocused ? "#E5E7EB" : "#E5E7EB", // slate-200
        boxShadow: state.isFocused ? "0 0 0 4px rgba(169,197,42,0.18)" : "none",
        "&:hover": { borderColor: "#D1D5DB" }, // slate-300
        cursor: "text",
    }),
    valueContainer: (base) => ({ ...base, padding: "0 12px" }),
    input: (base) => ({ ...base, margin: 0, padding: 0 }),
    placeholder: (base) => ({ ...base, color: "#9CA3AF" }), // slate-400
    singleValue: (base) => ({ ...base, color: "#111827" }), // slate-900
    indicatorsContainer: (base) => ({ ...base, paddingRight: 6 }),
    dropdownIndicator: (base) => ({ ...base, color: "#9CA3AF" }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (base) => ({
        ...base,
        zIndex: 80,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 12px 32px rgba(0,0,0,.12)",
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? BRAND
            : state.isFocused
                ? "rgba(169,197,42,0.08)"
                : "white",
        color: state.isSelected ? "white" : "#111827",
        cursor: "pointer",
    }),
};

const selectTheme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "rgba(169,197,42,0.10)",
        primary: BRAND,
    },
    borderRadius: 16,
});

/* ---------------- Stacked (non-floating) fields ---------------- */

function LabeledInput({ id, name, label, value, onChange, type = "text", placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="h-12 w-full rounded-2xl border border-gray-200 bg-white/95 px-3 text-gray-900 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-[#A9C52A]/30"
            />
        </div>
    );
}

function LabeledTextarea({ id, name, label, value, onChange, rows = 5, maxLength = 1200, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                rows={rows}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full resize-y rounded-2xl border border-gray-200 bg-white/95 px-3 py-3 text-gray-900 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-[#A9C52A]/30"
            />
            <p className="mt-1 text-right text-xs text-gray-400">{value.length}/{maxLength}</p>
        </div>
    );
}

/** Phone (stack label) */
function PhoneField({ value, onChange, label = "Phone", hint }) {
    return (
        <div>
            <label htmlFor="org-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>
            <div className="relative rounded-2xl border border-gray-200 bg-white/95 overflow-visible focus-within:ring-2 focus-within:ring-[#A9C52A]/30">
                <PhoneInput
                    country={"us"}
                    value={value}
                    onChange={(val) => onChange(val || "")}
                    enableSearch
                    placeholder="Enter phone number"
                    inputProps={{ name: "org-phone", id: "org-phone" }}
                    containerClass="react-tel-input !w-full"
                    inputClass="!w-full !h-12 !rounded-2xl !bg-transparent !pl-12 !pr-3 !text-gray-900 !outline-none !ring-0 !border-0"
                    buttonClass="!border-0 !bg-transparent !rounded-l-2xl !pl-3 !pr-2 !h-12"
                    dropdownClass="!z-[70] !max-h-[320px] !overflow-auto"
                    searchClass="!px-3 !py-2"
                />
                <span className="pointer-events-none absolute left-[46px] top-[10px] h-7 w-px bg-gray-200" />
            </div>

            {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}

            {/* tidy up library css */}
            <style jsx global>{`
        .react-tel-input .form-control {
          border: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          height: 48px !important;
          padding-left: 3rem !important;
        }
        .react-tel-input .selected-flag {
          border-radius: 16px 0 0 16px !important;
          padding-left: 10px !important;
          padding-right: 8px !important;
          height: 48px !important;
        }
        .react-tel-input .country-list {
          z-index: 70 !important;
          box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important;
          border-radius: 12px !important;
          border: 1px solid rgba(0,0,0,0.08) !important;
          background: #fff !important;
        }
      `}</style>
        </div>
    );
}

/** Country + Region using react-select + country-state-city */
function CountryRegionRow({ countryCode, regionCode, onCountry, onRegion }) {
    const countryOptions = useMemo(
        () =>
            Country.getAllCountries()
                .map((c) => ({ value: c.isoCode, label: c.name }))
                .sort((a, b) => a.label.localeCompare(b.label)),
        []
    );

    const regionOptions = useMemo(() => {
        if (!countryCode) return [];
        return State.getStatesOfCountry(countryCode)
            .map((s) => ({ value: s.isoCode, label: s.name }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [countryCode]);

    const selectedCountry = countryOptions.find((o) => o.value === countryCode) || null;
    const selectedRegion = regionOptions.find((o) => o.value === regionCode) || null;

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Country */}
            <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Country</label>
                <Select
                    instanceId="country-select"
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={(opt) => onCountry(opt?.value || "")}
                    placeholder="Select country…"
                    styles={selectStyles}
                    theme={selectTheme}
                    menuPosition="fixed"
                    menuPortalTarget={typeof window !== "undefined" ? document.body : undefined}
                />
            </div>

            {/* Region */}
            <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Region / State</label>
                <Select
                    key={countryCode || "region-select"}
                    instanceId="region-select"
                    options={regionOptions}
                    value={selectedRegion}
                    onChange={(opt) => onRegion(opt?.value || "")}
                    placeholder={countryCode ? "Select region / state…" : "Select a country first"}
                    isDisabled={!countryCode}
                    styles={{
                        ...selectStyles,
                        control: (base, state) => ({
                            ...selectStyles.control(base, state),
                            backgroundColor: countryCode ? "rgba(255,255,255,0.95)" : "#F8FAFC", // slate-50
                            color: countryCode ? undefined : "#9CA3AF",
                        }),
                    }}
                    theme={selectTheme}
                    menuPosition="fixed"
                    menuPortalTarget={typeof window !== "undefined" ? document.body : undefined}
                />
                {!countryCode ? (
                    <p className="mt-1 text-xs text-slate-500">Choose a country to enable regions.</p>
                ) : null}
            </div>
        </div>
    );
}

/** Company Size — now using react-select to match country/region styling */
function CompanySizeSelect({ value, onChange }) {
    const sizeOptions = useMemo(
        () => [
            { value: "1-10", label: "1–10" },
            { value: "11-50", label: "11–50" },
            { value: "51-200", label: "51–200" },
            { value: "201-1000", label: "201–1,000" },
            { value: "1000+", label: "1,000+" },
        ],
        []
    );

    const selected = sizeOptions.find((o) => o.value === value) || null;

    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Company Size</label>
            <Select
                instanceId="company-size"
                options={sizeOptions}
                value={selected}
                onChange={(opt) => onChange(opt?.value || "")}
                placeholder="Select…"
                styles={selectStyles}
                theme={selectTheme}
                menuPosition="fixed"
                menuPortalTarget={typeof window !== "undefined" ? document.body : undefined}
            />
        </div>
    );
}

/* ------------------ Org Contact Form ------------------ */
function OrgContactForm() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        orgName: "",
        fullName: "",
        email: "",
        phone: "",
        companySize: "",
        country: "",
        interests: {
            recruiting: false,
            training: false,
            global: false,
            background: false,
            consulting: false,
        },
        message: "",
    });

    // local ISO codes; persist a readable "Country, Region" string in data.country
    const [countrySel, setCountrySel] = useState(""); // ISO country
    const [regionSel, setRegionSel] = useState("");   // ISO region

    function onChange(e) {
        const { name, value, type, checked } = e.target;
        if (name in data.interests) {
            setData((p) => ({ ...p, interests: { ...p.interests, [name]: checked } }));
        } else {
            setData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!data.orgName || !data.fullName || !data.email || !data.message) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 700);
    }

    // Keep data.country human readable on changes
    function setCountryAndPersist(code) {
        setCountrySel(code);
        const cname = Country.getCountryByCode(code)?.name || "";
        const rname = regionSel ? State.getStateByCodeAndCountry(regionSel, code)?.name || "" : "";
        setData((p) => ({ ...p, country: rname ? `${cname}, ${rname}` : cname }));
    }

    function setRegionAndPersist(code) {
        setRegionSel(code);
        const cname = Country.getCountryByCode(countrySel)?.name || "";
        const rname = code ? State.getStateByCodeAndCountry(code, countrySel)?.name || "" : "";
        setData((p) => ({ ...p, country: cname ? (rname ? `${cname}, ${rname}` : cname) : rname }));
    }

    if (sent) {
        return (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                <div className="text-sm">
                    Thanks! We’ve received your request and will reach out shortly.
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <LabeledInput
                id="orgName"
                name="orgName"
                label="Organization / Company Name *"
                value={data.orgName}
                onChange={onChange}
                placeholder="e.g., Acme Inc."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <LabeledInput
                    id="fullName"
                    name="fullName"
                    label="Your Full Name *"
                    value={data.fullName}
                    onChange={onChange}
                    placeholder="Jane Doe"
                />
                <LabeledInput
                    id="email"
                    name="email"
                    type="email"
                    label="Work Email *"
                    value={data.email}
                    onChange={onChange}
                    placeholder="name@company.com"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <PhoneField
                    value={data.phone}
                    onChange={(val) => setData((p) => ({ ...p, phone: val }))}
                    label="Phone"
                    hint="Include country code if possible."
                />

                {/* Company Size now uses react-select (matches Country/Region) */}
                <CompanySizeSelect
                    value={data.companySize}
                    onChange={(val) => setData((p) => ({ ...p, companySize: val }))}
                />
            </div>

            <CountryRegionRow
                countryCode={countrySel}
                regionCode={regionSel}
                onCountry={setCountryAndPersist}
                onRegion={setRegionAndPersist}
            />

            <div>
                <div className="mb-1.5 block text-sm font-medium text-gray-800">
                    I’m interested in
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { key: "recruiting", label: "Recruiting" },
                        { key: "training", label: "Staff / Training Services" },
                        { key: "global", label: "Global Workforce Solutions" },
                        { key: "background", label: "Background Checks" },
                        { key: "consulting", label: "Consulting / Advisory" },
                    ].map((opt) => (
                        <label
                            key={opt.key}
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
                        >
                            <input
                                type="checkbox"
                                name={opt.key}
                                checked={data.interests[opt.key]}
                                onChange={onChange}
                                className="accent-[#A9C52A]"
                            />
                            <span>{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <LabeledTextarea
                id="message"
                name="message"
                label="How can we help? *"
                value={data.message}
                onChange={onChange}
                rows={4}
                maxLength={1200}
                placeholder="Share goals, timelines, roles, regions, etc."
            />

            <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
            >
                {loading ? "Sending…" : "Request a proposal"}
            </button>
        </form>
    );
}

/* ------------------ Info Card ------------------ */
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
                <Link
                    href={href}
                    className="mt-1 block text-gray-600 underline-offset-4 hover:underline"
                >
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

/* ------------------ Page ------------------ */
export default function OrganizationServicesPage() {
    return (
        <main className="bg-white">
            {/* HERO */}
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
                                "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.30) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.40) 100%)",
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
                                    Solutions for <span style={{ color: BRAND }}>Organizations</span>
                                </h1>
                                <p className="mt-3 max-w-xl text-white/85">
                                    Sengwa Consulting partners with companies to hire better, upskill
                                    managers, and scale globally—without the complexity. Tell us
                                    about your <span className="font-semibold">organization</span>{" "}
                                    and what you’re aiming to achieve.
                                </p>
                            </motion.div>

                            <motion.ul
                                variants={fadeUp}
                                transition={{ ...spring, delay: 0.08 }}
                                className="mt-6 flex flex-wrap gap-3"
                            >
                                <li>
                                    <a
                                        href="tel:+12245349898"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/25"
                                    >
                                        <span
                                            className="inline-block h-2.5 w-2.5 rounded-full"
                                            style={{ background: BRAND }}
                                        />
                                        +1 224-534-9898
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:hr@sengwamina.com"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/25"
                                    >
                                        hr@sengwamina.com
                                    </a>
                                </li>
                                <li className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    Chicago, IL — Global Delivery
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
                            <OrgContactForm />
                            <p className="mt-3 text-center text-xs text-gray-500">
                                We typically reply within one business day.
                            </p>
                        </motion.aside>
                    </motion.div>
                </div>
            </section>

            {/* Service snapshots */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <InfoCard
                            title="Recruiting"
                            value="Targeted sourcing, structured interviews, efficient close."
                            href="/services/recruiting/talent-sourcing-and-acquisition"
                        />
                        <InfoCard
                            title="Staff / Training"
                            value="Leadership programs, team workshops, conflict facilitation."
                            href="/services/staff-or-training-services/leadership-development"
                        />
                        <InfoCard
                            title="Global Workforce"
                            value="International contracting, payroll and compliance runbooks."
                            href="/services/global-workforce-solutions/international-contract-outsourcing"
                        />
                    </motion.div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                            style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
                        >
                            Explore all services
                        </Link>
                    </div>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Organization Services",
                        provider: { "@type": "Organization", name: "Sengwa Consulting" },
                        areaServed: "Global",
                        serviceType: "Recruiting, Training, Global Workforce",
                    }),
                }}
            />
        </main>
    );
}
