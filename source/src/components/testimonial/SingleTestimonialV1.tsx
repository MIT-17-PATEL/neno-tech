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
            {/* Top row: Star Ratings & Quote Icon */}
            <div className="testimonial-card-top">
                <div className="testimonial-rating-stars">
                    <RatingsStar ratings={ratings} />
                </div>
                <div className="testimonial-quote-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>
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
