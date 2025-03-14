"use client"

import Link from "next/link";
import { RiMenuFold3Fill } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <div className="nav-inner">
                <span className="nav-logo">
                    <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
                    Sengwa
                    <br />
                    Consulting
                    </Link>
                </span>
                <ul className="nav-links">
                    <li>
                        <Link href={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link href={"/faq"}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"https://www.paypal.com/ncp/payment/65RGFAAN2CPYY"} target="_blank">Get Started</Link>
                    </li>
                </ul>

                <RiMenuFold3Fill className={toggle ? "nav-menu-burger active" : "nav-menu-burger"} onClick={() => setToggle(!toggle)} />

                <ul className={toggle ? "mobile-nav-links active" : "mobile-nav-links"}>
                    <li>
                        <Link href={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link href={"/faq"}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;