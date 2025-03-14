// "use client"

import "./globals.css";
import NavBar from "./components/nav";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
// import { useState } from "react";

export const metadata = {
  title: "Sengwa Consulting",
  description: "A Job Hunting Platform",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Newsletter />
        <Footer />

        {/* showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <h2 className="popup-title">Are you ready to hunt for your next career or dream job?</h2>
            <p className="popup-text">
              Take the next step in your professional journey with us. Whether you're looking for new opportunities,
              career growth, or a complete transition, we're here to help!
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div> */}
      </body>
    </html>
  );
}
