import Image from "next/image";
import { data } from "./data";
import Hunt1 from "/public/hunt1.webp"

const JobPoint = ({ point }) => {
    return (
        <div className={point.dir === "l" ? "job-point l" : "job-point"}>
            <div className="content">
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
            </div>
            <div className="image">
                {point?.image && (
                    <Image src={point.image} alt="Job Point" />
                )}
            </div>
        </div>
    )
}

const JobHunt = () => {
    return (
        <div className="job-hunt">
            <div className="inner">
                <h2>Job Hunt Made Easy</h2>
                <div className="job-points">
                    {data.map((point) => (
                        <JobPoint key={point.title} point={point} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobHunt;