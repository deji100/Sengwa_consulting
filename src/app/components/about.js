import Image from "next/image";
import AboutImg1 from "/public/about1.webp";
import AboutImg2 from "/public/about2.webp";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="inner">
                <div className="content one">
                    <h2>About Us</h2>
                    <p>{"At Sengwa Consultancy, we specialize in helping job seekers find their ideal roles with ease. Our team streamlines the job hunting process by handling applications, setting up job board profiles, and providing personalized support. With tailored strategies and weekly status reports, we empower you to focus on interviews while we work behind the scenes to land you your dream job."}</p>
                </div>

                <div className="image">
                    <Image src={AboutImg1} alt="About Image" />
                </div>

                <div className="content">
                    <p>{"At Sengwa Consultancy, we are dedicated to transforming job hunting into a seamless and stress-free experience. We understand that searching for the right job can be overwhelming, so we step in to simplify the process. Our mission is to connect job seekers with opportunities that align with their skills, career goals, and passions."}</p>

                    <p>{"Our approach goes beyond just sending out resumes. We start by getting to know you — your career aspirations, preferred industries, and target roles. From there, we create professional job board profiles, set up dedicated job search emails, and strategically apply for positions on your behalf every day. This proactive method maximizes your chances of landing interviews without the hassle."}</p>

                    <p>{"Transparency is at the heart of what we do. Each week, we provide you with a Weekly Status Report outlining the companies we've applied to and the roles we've targeted. This keeps you informed about your job search progress while giving you the freedom to focus solely on preparing for interviews."}</p>
                </div>

                <div className="image two">
                    <Image src={AboutImg2} alt="About Image" />
                </div>

                <div className="content">
                    <p>{"We also offer personalized support throughout your journey. Whether it’s crafting standout resumes, preparing for interviews, or guiding you through offer negotiations, our team is committed to helping you succeed. Our goal is not just to get you a job — it's to secure the right job for you."}</p>

                    <p>{"At Sengwa Consultancy, your success is our priority. Let us take the weight off your shoulders and guide you towards a brighter career future. Together, we'll turn your job search into a journey of growth and achievement."}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;