import Image from "next/image";

interface DataType {
    id: number;
    name: string;
    designation: string;
    author: string;
    review: string;
    date: string;
    quoteIcon: string;
}

const SingleTestimonialV4 = ({ testimonial }: { testimonial: DataType }) => {
    const { name, designation, author, review, date, quoteIcon } = testimonial;

    return (
        <>
            <div className="testimonial-style-four-item">
                <div className="tm-provider">
                    <div className="thumb">
                        <Image src={`/assets/img/team/${author}`} alt="Image Not Found" width={800} height={800} />
                    </div>
                    <div className="info">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
                <p>
                    “{review}”
                </p>
                <div className="bottom">
                    <h5>Review On</h5>
                    <span>{date}</span>
                </div>
                <div className="quote-icon">
                    <Image src={`/assets/img/icon/${quoteIcon}`} alt="Image Not Found" width={128} height={160} />
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV4;
