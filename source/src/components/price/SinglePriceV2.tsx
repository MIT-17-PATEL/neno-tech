import Link from "next/link";

interface DataType {
    id: number;
    plan: string;
    badge: string;
    price: string;
    billing: string;
    isActive: boolean;
    buttonVariant: string;
    features: string[];
}

const SinglePriceV2 = ({ data }: { data: DataType }) => {
    const { plan, badge, price, billing, isActive, buttonVariant, features } = data;

    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className={`pricing-style-two ${isActive ? "active" : ""}`}>
                    <span className="badge"><i className="fas fa-fire" /> {badge}</span>
                    <h3>{plan}</h3>
                    <div className="pricing">
                        <h1>{price}</h1> <span>{billing}</span>
                    </div>
                    <Link className={`btn btn-style-one btn-border mt-30 ${buttonVariant}`} href="/contact-us">
                        Get Started <i className="fas fa-arrow-right" />
                    </Link>
                    <ul className="list-style-two">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV2;