// // "use client"

// // import React, { useState } from "react";
// // import "react-toastify/dist/ReactToastify.css";
// // import { useRouter } from "next/navigation";
// // import emailjs from "emailjs-com";
// // import Swal from 'sweetalert2';

// // const ContactForm = () => {
// //     const [formData, setFormData] = useState({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         phone: "",
// //         message: ""
// //     });
// //     const router = useRouter()

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const response = await emailjs.send(
// //                 `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
// //                 `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
// //                 {
// //                     to_email: `${process.env.NEXT_PUBLIC_TO_EMAIL}`,
// //                     from_name: formData.firstName + " " + formData.lastName,
// //                     from_email: formData.email,
// //                     first_name: formData.firstName,
// //                     last_name: formData.lastName,
// //                     email: formData.email,
// //                     phone: formData.phone,
// //                     message: formData.message,
// //                 },
// //                 `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
// //             );


// //             // Check if the response contains a successful status
// //             if (response.status === 200) {
// //                 Swal.fire({
// //                     icon: 'success',
// //                     title: 'Success!',
// //                     text: 'Form submitted successfully!',
// //                     confirmButtonColor: '#28a745',
// //                 }).then((result) => {
// //                     if (result.isConfirmed) {
// //                         router.push('/');
// //                     }
// //                 });

// //                 // Reset form values
// //                 setFormData({
// //                     firstName: "",
// //                     lastName: "",
// //                     email: "",
// //                     phone: "",
// //                     message: ""
// //                 });


// //                 setTimeout(() => {
// //                     router.push("/");
// //                 }, 3000);

// //             } else {
// //                 Swal.fire({
// //                     icon: 'error',
// //                     title: 'Oops!',
// //                     text: 'Failed to submit form. Please try again.',
// //                     confirmButtonColor: '#3085d6',
// //                 });
// //             }
// //         } catch (error) {
// //             Swal.fire({
// //                 icon: 'error',
// //                 title: 'Oops!',
// //                 text: 'An error occurred while sending the email. Please try again later.',
// //                 confirmButtonColor: '#3085d6',
// //             });
// //         }
// //     };

// //     return (
// //         <div className="contact-form-width">

// //             <div className="contact-form-container">
// //                 <h2 className="form-title">{"Let's talk!"}</h2>
// //                 <form onSubmit={handleSubmit} className="contact-form">
// //                     <div className="form-group-row">
// //                         <div className="form-group">
// //                             <label>First name</label>
// //                             <input
// //                                 type="text"
// //                                 name="firstName"
// //                                 value={formData.firstName}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter First Name"
// //                                 required
// //                             />
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Last name</label>
// //                             <input
// //                                 type="text"
// //                                 name="lastName"
// //                                 value={formData.lastName}
// //                                 onChange={handleChange}
// //                                 placeholder="Enter Last Name"
// //                                 required
// //                             />
// //                         </div>
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Email address</label>
// //                         <input
// //                             type="email"
// //                             name="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             placeholder="Enter Email Address"
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Phone Number</label>
// //                         <input
// //                             type="tel"
// //                             name="phone"
// //                             value={formData.phone}
// //                             onChange={handleChange}
// //                             placeholder="Enter Phone Number"
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label>Your message</label>
// //                         <textarea
// //                             name="message"
// //                             value={formData.message}
// //                             onChange={handleChange}
// //                             placeholder="Enter your question or message"
// //                             required
// //                         />
// //                     </div>
// //                     <button type="submit" className="submit-button">{"Submit"}</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ContactForm;





// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
// import { motion } from "framer-motion";

// const BRAND = "#A9C52A";

// const initialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     company: "", // honeypot (must stay empty)
// };

// export default function ContactForm() {
//     const [formData, setFormData] = useState(initialState);
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         // Optional: light normalization
//         if (name === "firstName" || name === "lastName") {
//             setFormData((s) => ({ ...s, [name]: value }));
//         } else if (name === "phone") {
//             // keep user typing free-form but strip weird chars later on submit
//             setFormData((s) => ({ ...s, phone: value }));
//         } else {
//             setFormData((s) => ({ ...s, [name]: value }));
//         }
//     };

//     const validate = () => {
//         const next = {};
//         const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!formData.firstName || formData.firstName.trim().length < 2) {
//             next.firstName = "Please enter at least 2 characters.";
//         }
//         if (!formData.lastName || formData.lastName.trim().length < 2) {
//             next.lastName = "Please enter at least 2 characters.";
//         }
//         if (!formData.email || !emailRe.test(formData.email.trim())) {
//             next.email = "Please enter a valid email address.";
//         }

//         const digits = (formData.phone || "").replace(/[^\d+]/g, "");
//         if (digits.length < 7 || digits.length > 18) {
//             next.phone = "Please enter a valid phone number.";
//         }

//         if (!formData.message || formData.message.trim().length < 10) {
//             next.message = "Tell us a bit more (10+ characters).";
//         }

//         // honeypot must be empty
//         if (formData.company && formData.company.trim().length > 0) {
//             next.company = "Spam detected.";
//         }

//         return next;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrors({});
//         const nextErrors = validate();
//         if (Object.keys(nextErrors).length) {
//             setErrors(nextErrors);
//             Swal.fire({
//                 icon: "error",
//                 title: "Please fix the highlighted fields",
//                 text: "A few details need your attention.",
//                 confirmButtonColor: BRAND,
//             });
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             const cleanedPhone = (formData.phone || "").replace(/[^\d+]/g, "");

//             const response = await emailjs.send(
//                 `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
//                 `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
//                 {
//                     to_email: `${process.env.NEXT_PUBLIC_TO_EMAIL}`,
//                     from_name: `${formData.firstName} ${formData.lastName}`,
//                     from_email: formData.email,
//                     first_name: formData.firstName,
//                     last_name: formData.lastName,
//                     email: formData.email,
//                     phone: cleanedPhone,
//                     message: formData.message,
//                 },
//                 `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
//             );

//             if (response?.status === 200) {
//                 Swal.fire({
//                     icon: "success",
//                     title: "Success!",
//                     text: "Form submitted successfully.",
//                     confirmButtonColor: BRAND,
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         router.push("/");
//                     }
//                 });

//                 setFormData(initialState);
//                 setTimeout(() => {
//                     router.push("/");
//                 }, 3000);
//             } else {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops!",
//                     text: "Failed to submit form. Please try again.",
//                     confirmButtonColor: BRAND,
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops!",
//                 text: "An error occurred while sending the email. Please try again later.",
//                 confirmButtonColor: BRAND,
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // simple field wrapper with label + error
//     const Field = ({ label, htmlFor, error, children }) => (
//         <div className="w-full">
//             <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-gray-700">
//                 {label}
//             </label>
//             {children}
//             {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
//         </div>
//     );

//     return (
//         <div className="w-full">
//             <motion.h2
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.4 }}
//                 className="mb-4 text-2xl font-semibold text-gray-900"
//             >
//                 Let’s talk!
//             </motion.h2>

//             <motion.form
//                 onSubmit={handleSubmit}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.4, delay: 0.05 }}
//                 className="space-y-4"
//                 noValidate
//             >
//                 {/* Honeypot (hidden) */}
//                 <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="hidden"
//                     tabIndex={-1}
//                     autoComplete="off"
//                 />

//                 <div className="grid gap-4 cols-4">
//                     <Field label="First name" htmlFor="firstName" error={errors.firstName}>
//                         <input
//                             id="firstName"
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="Enter first name"
//                             aria-invalid={!!errors.firstName}
//                             className={`w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 ${errors.firstName
//                                     ? "border-red-300 focus:ring-red-200"
//                                     : "border-gray-200 focus:ring-[#A9C52A]/30"
//                                 }`}
//                         />
//                     </Field>

//                     <Field label="Last name" htmlFor="lastName" error={errors.lastName}>
//                         <input
//                             id="lastName"
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Enter last name"
//                             aria-invalid={!!errors.lastName}
//                             className={`w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 ${errors.lastName
//                                     ? "border-red-300 focus:ring-red-200"
//                                     : "border-gray-200 focus:ring-[#A9C52A]/30"
//                                 }`}
//                         />
//                     </Field>
//                 </div>

//                 <Field label="Email address" htmlFor="email" error={errors.email}>
//                     <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         autoComplete="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter email address"
//                         aria-invalid={!!errors.email}
//                         className={`w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 ${errors.email
//                                 ? "border-red-300 focus:ring-red-200"
//                                 : "border-gray-200 focus:ring-[#A9C52A]/30"
//                             }`}
//                     />
//                 </Field>

//                 <Field label="Phone number" htmlFor="phone" error={errors.phone}>
//                     <input
//                         id="phone"
//                         type="tel"
//                         name="phone"
//                         inputMode="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter phone number"
//                         aria-invalid={!!errors.phone}
//                         className={`w-full rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 ${errors.phone
//                                 ? "border-red-300 focus:ring-red-200"
//                                 : "border-gray-200 focus:ring-[#A9C52A]/30"
//                             }`}
//                     />
//                 </Field>

//                 <Field label="Your message" htmlFor="message" error={errors.message}>
//                     <textarea
//                         id="message"
//                         name="message"
//                         rows={5}
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Enter your question or message"
//                         aria-invalid={!!errors.message}
//                         className={`w-full resize-none rounded-xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 ${errors.message
//                                 ? "border-red-300 focus:ring-red-200"
//                                 : "border-gray-200 focus:ring-[#A9C52A]/30"
//                             }`}
//                     />
//                     <div className="mt-1 text-right text-xs text-gray-400">
//                         {formData.message.length}/1000
//                     </div>
//                 </Field>

//                 <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
//                     style={{ background: "linear-gradient(135deg,#A9C52A,#6C792D)" }}
//                 >
//                     {isSubmitting ? (
//                         <>
//                             <svg
//                                 className="-ml-1 h-5 w-5 animate-spin"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 aria-hidden="true"
//                             >
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                                 />
//                             </svg>
//                             Submitting…
//                         </>
//                     ) : (
//                         "Submit"
//                     )}
//                 </button>

//                 <p className="text-center text-xs text-gray-500">
//                     By submitting, you agree we may contact you about your inquiry.
//                 </p>
//             </motion.form>
//         </div>
//     );
// }





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
    company: "", // honeypot (must remain empty)
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
