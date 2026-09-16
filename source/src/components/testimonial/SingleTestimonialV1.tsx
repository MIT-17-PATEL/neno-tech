import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id?: number;
    name: string;
    role?: string;
    ratings: number;
    text: string;
    avatar?: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { name, role, ratings, text } = testimonial;

    // Generate clean initials for avatar placeholder
    const initials = name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="testimonial-glass-card w-100">
            {/* Top row: Star Ratings & Illustrative Badge */}
            <div className="testimonial-card-top d-flex align-items-center justify-content-between">
                <div className="testimonial-rating-stars">
                    <RatingsStar ratings={ratings} />
                </div>
                <span style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#38bdf8",
                    background: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                }}>
                    Illustrative Sample
                </span>
            </div>

            {/* Testimonial Quote Text */}
            <p className="testimonial-quote-text">
                &ldquo;{text}&rdquo;
            </p>

            {/* Client Info Footer */}
            <div className="testimonial-client-footer">
                <div className="testimonial-avatar-circle">
                    <span>{initials}</span>
                </div>
                <div className="testimonial-client-details">
                    <h4 className="client-name">{name}</h4>
                    {role && <span className="client-role">{role}</span>}
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV1;
