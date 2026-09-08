import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    name: string;
    ratings: number;
    text: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { name, ratings, text } = testimonial;

    return (
        <>
            <div className="testimonial-style-one-item">
                <div className="tm-provider">
                    <div className="quote">
                        <i className="icon-quote" />
                    </div>
                    <div className="info">
                        <h4>{name}</h4>
                        <div className="icon">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                </div>
                <p>
                    {text}
                </p>
            </div>
        </>
    );
};

export default SingleTestimonialV1;
