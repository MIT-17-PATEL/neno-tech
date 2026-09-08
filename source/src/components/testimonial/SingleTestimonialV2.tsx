import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    ratings: number;
    message: string;
    author: string;
    designation: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { ratings, message, author, designation } = testimonial;

    return (
        <>
            <div className="testimonial-style-two">
                <div className="item">
                    <div className="content">
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                        <p>
                            “{message}”
                        </p>
                    </div>
                    <div className="provider">
                        <div className="icon">
                            <Image src="/assets/img/icon/quote.png" alt="Image Not Found" width={128} height={128} />
                        </div>
                        <div className="info">
                            <h4>{author}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;
