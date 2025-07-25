"use client"

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });
    const router = useRouter()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                {
                    to_email: `${process.env.NEXT_PUBLIC_TO_EMAIL}`,
                    from_name: formData.firstName + " " + formData.lastName,
                    from_email: formData.email,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
            );


            // Check if the response contains a successful status
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                    confirmButtonColor: '#28a745',
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/');
                    }
                });

                // Reset form values
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: ""
                });


                setTimeout(() => {
                    router.push("/");
                }, 3000);

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Failed to submit form. Please try again.',
                    confirmButtonColor: '#3085d6',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'An error occurred while sending the email. Please try again later.',
                confirmButtonColor: '#3085d6',
            });
        }
    };

    return (
        <div className="contact-form-width">

            <div className="contact-form-container">
                <h2 className="form-title">{"Let's talk!"}</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter First Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email Address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your question or message"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">{"Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
