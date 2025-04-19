import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Sengwa</h2>
          <h2>Consulting</h2>
          <br />
          <br />
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaLinkedin className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <p><Link href={"/about-us"}>About Us</Link></p>
            {/* <p><Link href={"/contact-us"}>Contact Us</Link></p> */}
            <p><Link href={"/faq"}>FAQ</Link></p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>hr@sengwamina.com</p>
            <p>{"+1 224-534-9898"}</p>
            <p>{"+234 814-227-4652"}</p>
            <p>Chicago, IL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;