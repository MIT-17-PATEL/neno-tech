import ConsultationForm from "../form/ConsultationForm";

const ContactPageContent = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden default-padding">
                <div className="container">
                    <div className="contact-style-one-items"
                        style={{ backgroundImage: 'url(/assets/img/shape/map.png)' }}>
                        <div className="row align-center">
                            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-50">
                                <div className="contact-style-one-info">
                                    <h2 className="split-text title">For assistance, please contact our support team.</h2>
                                    <ul>
                                        <li className="wow fadeInUp">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <h4>Hotline</h4>
                                                <a href="tel:+4733378901">+4733378901</a>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="300ms">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info">
                                                <h4>Our Location</h4>
                                                <p>
                                                    128 Kuaram old Road, parkvenue, Greater London, NW18JR Puran, United Kingdom
                                                </p>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="500ms">
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text" />
                                            </div>
                                            <div className="info">
                                                <h4>Official Email</h4>
                                                <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                                <div className="contact-form-card"
                                    style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                                    <h4 className="sub-title">Free Consultation</h4>
                                    <p>
                                        Fill out the form to get a personalized price quote and package solution from our global team of experts.
                                    </p>
                                    <ConsultationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPageContent;