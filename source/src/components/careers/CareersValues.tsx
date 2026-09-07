import React from "react";

interface ItemType {
    icon: string;
    title: string;
    description: string;
}

const CareersValues = () => {
    const items: ItemType[] = [
        {
            icon: "fas fa-lock",
            title: "Ownership",
            description: "We give you clear goals and the autonomy to deliver. Trust and accountability drive everything we build."
        },
        {
            icon: "fas fa-flask",
            title: "Innovation",
            description: "We encourage experimentation with new tech stacks, frameworks, and AI models. Stay curious, stay ahead."
        },
        {
            icon: "fas fa-handshake",
            title: "Transparency",
            description: "No politics, no hidden agendas. Open communication is how we make better decisions together."
        },
        {
            icon: "fas fa-bullseye",
            title: "Excellence",
            description: "We hold ourselves to high standards. Code reviews, testing, and craftsmanship are non-negotiable."
        }
    ];

    return (
        <div className="careers-values-area default-padding">
            <div className="container">
                <div className="row">
                    {items.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-30">
                            <div className="card-style-one-item text-center bg-gradient text-light">
                                <div className="icon">
                                    <i className={item.icon} style={{ fontSize: '40px' }} />
                                </div>
                                <h4>{item.title}</h4>
                                <p style={{ fontSize: '15px', opacity: 0.9 }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersValues;
