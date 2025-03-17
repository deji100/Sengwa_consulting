import Image from "next/image";
import ContactImg from "/public/contact.webp"
import ContactForm from "./contact-form";
import { m } from "framer-motion";

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
                        <li>
                            <span className="emoji">📞</span>Phone: <span className="contact-highlight" style={{ margin: "0 10px" }}>{"+1 224-534-9898"}</span>
                        </li>
                        <li>
                            <span className="emoji">📞</span>Phone: <span className="contact-highlight" style={{ margin: "0 10px" }}>{"+234 814-227-4652"}</span>
                        </li>
                        <li>
                            <span className="emoji">📧</span>
                            {" Email: "}
                            <span className="contact-highlight" style={{ margin: "0 10px" }}>
                                {"  Hr@SengwaMina.com"}</span>
                        </li>
                        <li>
                            <span className="emoji">📍</span>Address: <span className="contact-highlight" style={{margin: "0 10px"}}>Chicago, IL</span>
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