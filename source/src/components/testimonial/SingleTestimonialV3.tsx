import Image from "next/image";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    shapeImage: string;
    quoteIcon: string;
    topIcon: string;
    ratings: number;
    message: string;
    avatar: string;
    name: string;
    designation: string;
}

const SingleTestimonialV3 = ({ testimonial }: { testimonial: DataType }) => {
    const { shapeImage, quoteIcon, topIcon, ratings, message, avatar, name, designation } = testimonial;

    return (
        <>
            <div className="testimonial-style-three">
                <div className="left">
                    <Image src={`/assets/img/shape/${shapeImage}`} alt="Image Not Found" width={500} height={500} />
                    <Image src={`/assets/img/icon/${quoteIcon}`} alt="Image Not Found" width={126} height={160} />
                </div>
                <div className="right">
                    <div className="top">
                        <Image src={`/assets/img/icon/${topIcon}`} alt="Image Not Found" width={260} height={260} />
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                    <p>
                        {message}
                    </p>
                    <div className="provider">
                        <div className="icon">
                            <Image src={`/assets/img/team/${avatar}`} alt="Image Not Found" width={800} height={800} />
                        </div>
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;