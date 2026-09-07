const CareersProcess = () => {
    const steps = [
        {
            num: "01",
            title: "Apply",
            desc: "Fill out our 5-minute application form with your resume and a short note about what you'd build.",
        },
        {
            num: "02",
            title: "Recruiter Call",
            desc: "A 30-minute call with our talent team to understand your background, goals, and expectations.",
        },
        {
            num: "03",
            title: "Technical Round",
            desc: "A live technical interview — coding, system design, or architecture depending on the role.",
        },
        {
            num: "04",
            title: "Team Interview + Offer",
            desc: "Meet the team, discuss culture fit, and receive a transparent offer within days.",
        },
    ];

    return (
        <>
            <div
                className="careers-process-area default-padding bg-theme text-light bg-cover"
                style={{ backgroundImage: "url(/assets/img/shape/banner-6.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Application Process</h4>
                                <h2 className="title split-text-right split-text-in-right">From apply to offer — transparent every step.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {steps.map((step, i) => (
                                <div className="col-lg-3 col-md-6 mb-30" key={i}>
                                    <div className="careers-process-step text-center">
                                        <div className="step-number">{step.num}</div>
                                        <h4 className="mb-15">{step.title}</h4>
                                        <p className="mb-0">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersProcess;
