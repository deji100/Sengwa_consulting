import Image from "next/image"
import { testimonials } from "./data"

const Card = ({ test, position }) => {
    return (
        <div className="card" style={{"--position_test" : `${position}`}}>
            <div className="card-content">
                <p>
                    {test.review}
                </p>
            </div>
            <div className="card-author">
                <div className="author-image">
                    <Image
                        src={test.image || null} alt="" />
                </div>
                <div className="author-info">
                    <h5>{test.name}</h5>
                    <h4>{test.position}</h4>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div className="testimonial">
            <div className="inner">
                <h2>Testimonials</h2>
                <div className="testimonials">
                    { [...testimonials, ...testimonials].map((test, index) => ( // ✅ Duplicate items for infinite loop
                        <Card key={index} position={index} test={test} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Testimonials