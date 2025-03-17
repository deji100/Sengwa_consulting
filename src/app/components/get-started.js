import Link from "next/link";

export const GetStarted = () => {
    return (
        <Link href={"https://forms.gle/8VYWfGBSdcSfbned8"} target="_blank">
            <button style={{ background: "black", color: "white", padding: "15px 25px", border: "none", borderRadius: "5px", position: "fixed", bottom: "20px", right: "20px", zIndex: "120", fontSize: "1rem" }}>
                Get Started
            </button>
        </Link>
    );
}