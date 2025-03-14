"use client"

import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <div className="newsletter-container">
            <div className="inner">
            <h2>Subscribe to our <span>Newsletter</span></h2>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Subscribe</button>
            </form>
            </div>
        </div>
    );
};

export default Newsletter;
