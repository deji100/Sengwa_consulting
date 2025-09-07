"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const BRAND = "#A9C52A";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    company: "",
};

export default function ContactForm() {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const validate = () => {
        const next = {};
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.firstName || formData.firstName.trim().length < 2) {
            next.firstName = "Please enter at least 2 characters.";
        }
        if (!formData.lastName || formData.lastName.trim().length < 2) {
            next.lastName = "Please enter at least 2 characters.";
        }
        if (!formData.email || !emailRe.test(formData.email.trim())) {
            next.email = "Please enter a valid email address.";
        }
        const digits = (formData.phone || "").replace(/[^\d+]/g, "");
        if (digits.length < 7 || digits.length > 18) {
            next.phone = "Please enter a valid phone number.";
        }
        if (!formData.message || formData.message.trim().length < 10) {
            next.message = "Tell us a bit more (10+ characters).";
        }
        if (formData.company && formData.company.trim()) {
            next.company = "Spam detected.";
        }
        return next;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        const nextErrors = validate();
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            Swal.fire({
                icon: "error",
                title: "Please fix the highlighted fields",
                text: "A few details need your attention.",
                confirmButtonColor: BRAND,
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const cleanedPhone = (formData.phone || "").replace(/[^\d+]/g, "");
            const response = await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                {
                    to_email: `${process.env.NEXT_PUBLIC_TO_EMAIL}`,
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: cleanedPhone,
                    message: formData.message,
                },
                `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
            );

            if (response?.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Form submitted successfully.",
                    confirmButtonColor: BRAND,
                }).then((result) => result.isConfirmed && router.push("/"));
                setFormData(initialState);
                setTimeout(() => router.push("/"), 3000);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "Failed to submit form. Please try again.",
                    confirmButtonColor: BRAND,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "An error occurred while sending the email. Please try again later.",
                confirmButtonColor: BRAND,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
            className="w-full"
        >
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Let’s talk!</h2>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur-md"
            >
                {/* honeypot */}
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                />

                <div className="grid gap-4 md:grid-cols-2">
                    <FloatingInput
                        id="firstName"
                        name="firstName"
                        label="First name"
                        icon={<FiUser />}
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />
                    <FloatingInput
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        icon={<FiUser />}
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                </div>

                <FloatingInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    icon={<FiMail />}
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    autoComplete="email"
                />

                <FloatingInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone number"
                    icon={<FiPhone />}
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    inputMode="tel"
                />

                <FloatingTextarea
                    id="message"
                    name="message"
                    label="Your message"
                    icon={<FiMessageSquare />}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={5}
                    maxLength={1000}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl px-5 py-3 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
                >
                    <span className="relative z-10">
                        {isSubmitting ? "Submitting…" : "Submit"}
                    </span>
                    {/* sheen */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>

                {/* live region for a11y */}
                <p className="sr-only" aria-live="polite">
                    {Object.keys(errors).length ? "Form has validation errors" : ""}
                </p>
            </form>
        </motion.div>
    );
}

/** ---- Pretty floating inputs ---- */
function FloatingInput({
    id,
    name,
    label,
    value,
    onChange,
    error,
    icon,
    type = "text",
    ...rest
}) {
    return (
        <div className="relative">
            <div
                className={`group relative rounded-2xl border bg-white/90 backdrop-blur-sm ${error ? "border-red-300" : "border-gray-200"
                    }`}
            >
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </span>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder=" " // <-- required for floating label
                    aria-invalid={!!error}
                    className="peer w-full rounded-2xl bg-transparent px-10 py-3 text-gray-900 placeholder-transparent outline-none focus:ring-2 focus:ring-[#A9C52A]/30"
                    {...rest}
                />
                <label
                    htmlFor={id}
                    className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 rounded px-1 text-sm text-gray-500 transition-all
                     peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    {label}
                </label>
                {/* glow border on focus */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-focus-within:ring-2 group-focus-within:ring-[#A9C52A]/30" />
            </div>
            {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
        </div>
    );
}

function FloatingTextarea({
    id,
    name,
    label,
    value,
    onChange,
    error,
    icon,
    rows = 5,
    maxLength = 1000,
}) {
    return (
        <div className="relative">
            <div
                className={`group relative rounded-2xl border bg-white/90 backdrop-blur-sm ${error ? "border-red-300" : "border-gray-200"
                    }`}
            >
                <span className="pointer-events-none absolute left-3 top-3 text-gray-400">
                    {icon}
                </span>
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    placeholder=" " // floating label
                    aria-invalid={!!error}
                    className="peer w-full resize-none rounded-2xl bg-transparent px-10 py-3 text-gray-900 placeholder-transparent outline-none focus:ring-2 focus:ring-[#A9C52A]/30"
                />
                <label
                    htmlFor={id}
                    className="pointer-events-none absolute left-10 top-3 rounded px-1 text-sm text-gray-500 transition-all
                     peer-focus:top-1 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    {label}
                </label>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-focus-within:ring-2 group-focus-within:ring-[#A9C52A]/30" />
            </div>
            <div className="mt-1 flex items-center justify-between">
                {error ? <p className="text-xs text-red-600">{error}</p> : <span />}
                <p className="text-xs text-gray-400">{value.length}/{maxLength}</p>
            </div>
        </div>
    );
}
