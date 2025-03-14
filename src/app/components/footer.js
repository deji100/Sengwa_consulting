import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Sengwa</h2>
          <h2>Consultancy</h2>
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
            <p><Link href={"/contact-us"}>Contact Us</Link></p>
            <p><Link href={"/faq"}>FAQ</Link></p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Admin@SengwaMina.com</p>
            <p>+12245349898</p>
            <p>+2348142274652</p>
            <p>Chicago, IL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;