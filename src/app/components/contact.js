import Image from "next/image";
import ContactImg from "/public/contact.webp"
import ContactForm from "./contact-form";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPinSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="contact-title">Contact Us</h2>
                    <p className="contact-text">
                        We’re here to make your job search journey smoother and more
                        successful. Whether you have questions about our services, need
                        personalized job hunting support, or want to learn how we can help you
                        land your dream job — we’re just a message away.
                    </p>
                    <ul className="contact-details">
                        <li style={{ listStyle: "none" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "25px",
                                    alignItems: "flex-start",
                                }}
                            >
                                {/* US Contact */}
                                <div
                                    className="contact-highlight"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                        minWidth: "200px",
                                        flex: "1 1 200px",
                                    }}
                                >
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaPhoneAlt />
                                        <span>+1 224-534-9898</span>
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <IoPinSharp />
                                        <span>Chicago, IL</span>
                                    </span>
                                </div>

                                {/* Nigeria Contact */}
                                {/* <div
                                    className="contact-highlight"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                        minWidth: "200px",
                                        flex: "1 1 200px",
                                    }}
                                >
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaPhoneAlt />
                                        <span>+2348142274652</span>
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <IoPinSharp />
                                        <span>Lagos State, NG</span>
                                    </span>
                                </div> */}
                            </div>
                        </li>
                        <li
                            className="contact-highlight"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                margin: "10px 0",
                            }}
                        >
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <MdAttachEmail />
                            </span>
                            <span style={{ margin: "0 10px" }}>
                                hr@sengwamina.com
                            </span>
                        </li>

                        <li
                            className="contact-highlight"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                margin: "10px 0",
                            }}
                        >
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <FaMagnifyingGlassLocation />
                            </span>
                            <span style={{ margin: "0 10px" }}>Chicago, IL</span>
                        </li>

                    </ul>
                    <p className="contact-text">
                        You can also reach us by filling out the form below. Let us know how we
                        can assist you, and a member of our team will get back to you as soon as
                        possible.
                    </p>
                    <div className="business-hours">
                        <h3 className="hours-title">Business Hours:</h3>
                        <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                        <p>Saturday – Sunday: Closed</p>
                    </div>
                    <p className="contact-text">
                        We look forward to helping you take the next step in your career!
                    </p>
                </div>
                {/* Right Section - Image */}
                <div className="contact-image-container">
                    <Image
                        src={ContactImg}
                        alt="Hiring banner with chairs"
                        className="contact-image"
                    />
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact;