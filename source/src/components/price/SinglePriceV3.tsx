import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    badgeText: string;
    badgeIcon: string;
    price: number;
    currency: string;
    billing: string;
    buttonText: string;
    buttonClass: string;
    buttonIcon: string;
    features: string[];
    active: boolean;
}

const SinglePriceV3 = ({ plan }: { plan: DataType }) => {
    const { title, badgeText, badgeIcon, price, currency, billing, buttonText, buttonClass, buttonIcon, features, active } = plan;

    return (
        <>
            <div className={`pricing-style-two ${active ? "active" : ""}`}>
                <span className="badge">
                    <i className={badgeIcon} /> {badgeText}
                </span>
                <h3>{title}</h3>
                <div className="pricing">
                    <h1>{currency}{price}</h1>
                    <span>{billing}</span>
                </div>
                <Link className={buttonClass} href="/contact-us">
                    {buttonText} <i className={buttonIcon} />
                </Link>
                <ul className="list-style-two">
                    {features.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SinglePriceV3;