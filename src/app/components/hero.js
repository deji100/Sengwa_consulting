import Image from "next/image"
import Link from "next/link"
import HeroImg from "/public/hero-image.webp"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <h1>Your Partner in Job Hunting Success</h1>
                    <p>We connect job seekers with the right opportunities. Let us guide your job search with expert support and resources.</p>
                    <button>
                        <Link href={"https://www.paypal.com/ncp/payment/65RGFAAN2CPYY"} target="_blank">Get Started</Link>
                    </button>
                </div>

                <div className="hero-image">
                    <Image
                        src={HeroImg}
                        alt="Hero Image"
                        width={600}
                        height={400} />

                </div>
            </div>
        </div>
    )
}

export default Hero