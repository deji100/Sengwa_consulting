import Image from "next/image";
import FAQImg from "/public/faq.webp"
import { faqData } from "./data"

const Card = ({ question, answer }) => {
    return (
        <div className="card">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}

const Faq = () => {
    return (
        <div className="faq">
            <div className="inner">
                <div className="image">
                    <Image src={FAQImg} alt="FAQ" />
                </div>

                <div className="faq-list">
                    {
                        faqData.map((item) => (
                            <Card key={item.id} question={item.question} answer={item.answer} />))
                    }
                </div>
            </div>
        </div>
    );
}

export default Faq;