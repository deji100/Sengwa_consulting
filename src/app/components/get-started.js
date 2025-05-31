import Link from "next/link";

export const GetStarted = () => {
    return (
        <Link href={"/job-application"}>
            <button style={{ background: "black", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", position: "fixed", bottom: "50px", right: "20px", zIndex: "120", fontSize: "1rem", cursor: "pointer" }}>
                Get Started
            </button>
        </Link>
    );
}