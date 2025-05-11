"use client"

import Link from "next/link";
import { RiMenuFold3Fill } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(false);
    }

    return (
        <nav>
            <div className="nav-inner">
                <span className="nav-logo">
                    <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
                        <Image src={"/logo.webp"} className="w-[50px]" alt="Logo Image" width={150} height={50} />
                    </Link>
                </span>
                <ul className="nav-links">
                    <li>
                        <Link href={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>{"Let's Talk"}</Link>
                    </li>
                    <li>
                        <Link href={"/faq"}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"/job-application"}>Get Started</Link>
                    </li>
                </ul>

                <RiMenuFold3Fill className={toggle ? "nav-menu-burger active" : "nav-menu-burger"} onClick={() => setToggle(!toggle)} />

                <ul className={toggle ? "mobile-nav-links active" : "mobile-nav-links"}>
                    <li onClick={handleClick}>
                        <Link href={"/about-us"}>About Us</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href={"/faq"}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;