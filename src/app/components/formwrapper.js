"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const BRAND = "#A9C52A";

/** Reusable input styles */
const inputCls =
    "block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9C52A]/40";
const labelCls = "mb-1.5 block text-sm font-medium text-gray-800";

/** Simple accordion section (Tailwind only) */
function Section({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm pb-6">
            <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-5 md:py-4"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="text-base font-semibold text-gray-900">{title}</span>
                <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden
                >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>

            {/* Animated body */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="min-h-0 overflow-hidden border-t border-gray-100 px-4 py-5 md:px-5">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default function FloatingJobForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        customerType: "",
        firstName: "",
        middleName: "",
        lastName: "",
        is18Plus: "",
        dob: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        availableFrom: "",
        linkedin: "",
        experienceYears: "",
        employmentType: "",
        w2Or1099: "",
        preferredJobs: "",
        hourlyWage: "",
        annualSalary: "",
        acceptLowerOffer: "",
        educationLevel: "",
        otherEducation: "",
        educationStart: "",
        educationEnd: "",
        languages: "",
        certifications: "",
        authorizedInUSA: "",
        requireSponsorship: "",
        willingToTravel: "",
        travelPercentage: "",
        travelInternationally: "",
        willingToWorkAnywhereUSA: "",
        preferredStateIfNotAnywhere: "",
        willingToWorkRemoteAnywhereUSA: "",
        professionalReferences: "",
        hasDriversLicense: "",
        covidVaccineStatus: "",
        willingToWorkWeekends: "",
        convictedOfCrime: "",
        convictionExplanation: "",
        gender: "",
        hispanicOrLatino: "",
        race: "",
        veteranStatus: "",
        hasDisability: "",
        messageToSpecialist: "",
        companiesNotToApplyTo: "",
        whatsappNumber: "",
        referralSource: "",
        time: new Date().toLocaleString(),
        mathVerification: "",
    });

    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.mathVerification.trim() !== "7") {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Math verification failed. Please answer correctly.",
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        const serviceID = `${process.env.NEXT_PUBLIC_SERVICE_ID}`;
        const templateID = "template_8ktgog6";
        const userID = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`;

        setSending(true);
        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Your application has been sent successfully!",
                    confirmButtonColor: "#28a745",
                }).then((result) => {
                    if (result.isConfirmed) router.push("/");
                });

                setFormData((prev) => ({
                    ...Object.fromEntries(Object.keys(prev).map((k) => [k, ""])),
                    time: "",
                }));
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "There was an error sending your message.",
                    confirmButtonColor: "#3085d6",
                });
            })
            .finally(() => setSending(false));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-5xl px-4 py-10 md:py-12"
        >
            {/* Header Card */}
            <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#A9C52A] to-[#6C792D]" />
                <h1 className="mt-3 text-2xl font-extrabold text-gray-900 md:text-3xl">
                    Job Application{" "}
                    <span className="bg-gradient-to-r from-[#A9C52A] to-[#6C792D] bg-clip-text text-transparent">
                        Form
                    </span>
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                    Tell us about you. Fields marked * are required.
                </p>
            </header>

            {/* Sections */}
            <div className="mt-6 space-y-5">
                {/* Section 1 */}
                <Section title="Contact & Identity" defaultOpen>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className={labelCls}>Email*</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} required />
                        </div>

                        <div>
                            <label className={labelCls}>Are you a new or a returning customer?*</label>
                            <select name="customerType" value={formData.customerType} onChange={handleChange} className={inputCls} required>
                                <option value="">Select</option>
                                <option value="New">New Customer</option>
                                <option value="Returning">Returning Customer</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>Name*</label>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputCls} required />
                                <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} className={inputCls} />
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputCls} required />
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Are you at least 18 years of age?*</label>
                            <select name="is18Plus" value={formData.is18Plus} onChange={handleChange} className={inputCls} required>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelCls}>Date of Birth*</label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputCls} required />
                        </div>

                        <div>
                            <label className={labelCls}>Phone*</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (___) ___-____" className={inputCls} required />
                        </div>
                    </div>
                </Section>

                {/* Section 2 */}
                <Section title="Address & Availability" defaultOpen>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label className={labelCls}>Address*</label>
                            <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} className={inputCls} required />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-3">
                            <div>
                                <label className={labelCls}>City*</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputCls} required />
                            </div>
                            <div>
                                <label className={labelCls}>State*</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} className={inputCls} required />
                            </div>
                            <div>
                                <label className={labelCls}>Zip*</label>
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} className={inputCls} required />
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Available to work from*</label>
                            <input type="date" name="availableFrom" value={formData.availableFrom} onChange={handleChange} className={inputCls} required />
                        </div>

                        <div>
                            <label className={labelCls}>Your LinkedIn URL*</label>
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://www.linkedin.com/in/you" className={inputCls} required />
                        </div>
                    </div>
                </Section>

                {/* Section 3 */}
                <Section title="Experience & Preferences">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className={labelCls}>Years of Experience*</label>
                            <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} min="0" step="1" className={inputCls} required />
                        </div>

                        <div>
                            <label className={labelCls}>Type of Employment Desired*</label>
                            <select name="employmentType" value={formData.employmentType} onChange={handleChange} className={inputCls} required>
                                <option value="">Select</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Internship">Internship</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>Do you want us to apply for W2 or 1099 (Contract) jobs *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="w2Or1099" value="W-2" onChange={handleChange} /> <span>W2</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="w2Or1099" value="1099" onChange={handleChange} /> <span>1099</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="w2Or1099" value="Both" onChange={handleChange} /> <span>Both</span>
                                </label>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>Preferred job positions *</label>
                            <input name="preferredJobs" value={formData.preferredJobs} onChange={handleChange} placeholder="e.g., Product Manager, Business Analyst" className={inputCls} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:col-span-2">
                            <div>
                                <label className={labelCls}>Hourly wage expectation *</label>
                                <input name="hourlyWage" value={formData.hourlyWage} onChange={handleChange} placeholder="$ / hr" className={inputCls} />
                            </div>
                            <div>
                                <label className={labelCls}>Annual salary expectation *</label>
                                <input name="annualSalary" value={formData.annualSalary} onChange={handleChange} placeholder="$ / year" className={inputCls} />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>If a company is offering less than your salary expectation, can we apply for them?*</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="acceptLowerOffer" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="acceptLowerOffer" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section 4 */}
                <Section title="Education">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className={labelCls}>Highest Education level achieved *</label>
                            <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} className={inputCls}>
                                <option value="">Select</option>
                                <option value="Associates">Associates</option>
                                <option value="Bachelor's">{"Bachelor's"}</option>
                                <option value="Masters">Masters</option>
                                <option value="Doctorate">Doctorate</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelCls}>If Other, specify *</label>
                            <input name="otherEducation" value={formData.otherEducation} onChange={handleChange} className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Education Start Date (MM/YYYY) *</label>
                            <input type="date" name="educationStart" value={formData.educationStart} onChange={handleChange} className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Education End Date (MM/YYYY) *</label>
                            <input type="date" name="educationEnd" value={formData.educationEnd} onChange={handleChange} className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Languages known *</label>
                            <input name="languages" value={formData.languages} onChange={handleChange} placeholder="English, Spanish, ..." className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Certification(s)</label>
                            <input name="certifications" value={formData.certifications} onChange={handleChange} className={inputCls} />
                        </div>
                    </div>
                </Section>

                {/* Section 5 */}
                <Section title="Eligibility, Travel & Location">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className={labelCls}>Are you legally authorized to work in the USA? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="authorizedInUSA" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="authorizedInUSA" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Will you require sponsorship in the future? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="requireSponsorship" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="requireSponsorship" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Are you willing to travel? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToTravel" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToTravel" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Travel percentage (e.g., 25%) *</label>
                            <input type="text" name="travelPercentage" value={formData.travelPercentage} onChange={handleChange} className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Willing to travel internationally? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="travelInternationally" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="travelInternationally" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Are you willing to work anywhere within the USA? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToWorkAnywhereUSA" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToWorkAnywhereUSA" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>If “No”, specify the state *</label>
                            <input type="text" name="preferredStateIfNotAnywhere" value={formData.preferredStateIfNotAnywhere} onChange={handleChange} className={inputCls} />
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>For REMOTE jobs, are you willing to work anywhere in the USA? *</label>
                            <input type="text" name="willingToWorkRemoteAnywhereUSA" value={formData.willingToWorkRemoteAnywhereUSA} onChange={handleChange} className={inputCls} />
                        </div>
                    </div>
                </Section>

                {/* Section 6 */}
                <Section title="References & Compliance">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label className={labelCls}>Professional References (3) *</label>
                            <textarea name="professionalReferences" value={formData.professionalReferences} onChange={handleChange} rows={4} className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Do you have a valid {"Driver's"} License? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hasDriversLicense" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hasDriversLicense" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>COVID-19 Vaccine status *</label>
                            <select name="covidVaccineStatus" value={formData.covidVaccineStatus} onChange={handleChange} className={inputCls}>
                                <option value="">Select</option>
                                <option value="Vaccinated">Vaccinated</option>
                                <option value="Not Vaccinated">Not Vaccinated</option>
                                <option value="I do not wish to disclose">I do not wish to disclose</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelCls}>Willing to work weekends? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToWorkWeekends" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="willingToWorkWeekends" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Ever convicted of a criminal offense? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="convictedOfCrime" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="convictedOfCrime" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>If Yes, please explain.</label>
                            <textarea name="convictionExplanation" value={formData.convictionExplanation} onChange={handleChange} rows={3} className={inputCls} />
                        </div>
                    </div>
                </Section>

                {/* Section 7 */}
                <Section title="Demographics (Optional unless required)">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className={labelCls}>Gender *</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} className={inputCls}>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelCls}>Are you Hispanic/Latino? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hispanicOrLatino" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hispanicOrLatino" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className={labelCls}>Race *</label>
                            <input type="text" name="race" value={formData.race} onChange={handleChange} className={inputCls} />
                        </div>

                        <div>
                            <label className={labelCls}>Are you a veteran? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="veteranStatus" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="veteranStatus" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>Do you have a disability? *</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hasDisability" value="Yes" onChange={handleChange} /> <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                    <input type="radio" className="accent-[#A9C52A]" name="hasDisability" value="No" onChange={handleChange} /> <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section 8 */}
                <Section title="Notes & Verification">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label className={labelCls}>Your message to your Job Hunt Specialist *</label>
                            <textarea name="messageToSpecialist" value={formData.messageToSpecialist} onChange={handleChange} rows={4} className={inputCls} />
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>Companies you DO NOT want us to apply to *</label>
                            <textarea name="companiesNotToApplyTo" value={formData.companiesNotToApplyTo} onChange={handleChange} rows={3} className={inputCls} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:col-span-2">
                            <div>
                                <label className={labelCls}>WhatsApp number *</label>
                                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="+1 555-555-5555" className={inputCls} />
                            </div>
                            <div className="md:col-span-2">
                                <label className={labelCls}>How did you hear about Sengwamina? (Add referrer name if any) *</label>
                                <input type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} className={inputCls} />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelCls}>What is thirteen minus 6? *</label>
                            <input type="text" name="mathVerification" value={formData.mathVerification} onChange={handleChange} placeholder="Type 7" className={inputCls} />
                        </div>
                    </div>
                </Section>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-end">
                <button
                    type="submit"
                    disabled={sending}
                    className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#A9C52A] to-[#6C792D] px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70`}
                >
                    {sending ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
