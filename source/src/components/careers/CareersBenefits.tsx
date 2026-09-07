const CareersBenefits = () => {
    const benefits = [
        { icon: "fas fa-heartbeat", title: "Health Insurance", desc: "Full coverage for you and your family — no premium split." },
        { icon: "fas fa-clock", title: "Flexible Hours", desc: "Work when you are sharpest. Core hours overlap; the rest is up to you." },
        { icon: "fas fa-home", title: "Remote-First", desc: "Work from anywhere with a stable connection. Quarterly offsites keep us connected." },
        { icon: "fas fa-book-reader", title: "Learning Budget", desc: "₹1 lakh per year per engineer for courses, books, conferences, and certifications." },
        { icon: "fas fa-laptop", title: "Latest Hardware", desc: "Your choice of machine and peripherals. We want you building at full speed." },
        { icon: "fas fa-umbrella-beach", title: "Team Retreats", desc: "Twice a year, we get together for a few days of shipping, learning, and fun." },
    ];

    return (
        <>
            <div className="careers-benefits-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="careers-benefits-info">
                                <h4 className="sub-title">Perks & Benefits</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    Because benefits are not afterthoughts — they are foundations.
                                </h2>
                                <p>
                                    We invest in our people first. Competitive compensation, full benefits,
                                    and a culture that respects your time and autonomy.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="row">
                                {benefits.map((b, i) => (
                                    <div className="col-md-6 mb-30" key={i}>
                                        <div className="careers-benefit-item bg-gray wow fadeInUp" data-wow-delay={`${i * 50}ms`}>
                                            <div className="icon">
                                                <i className={b.icon} />
                                            </div>
                                            <div className="info">
                                                <h5 className="mb-0">{b.title}</h5>
                                                <p className="mb-0">{b.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersBenefits;
