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
                                            <div className="info">
                                                <h4>Phone</h4>
                                                <a href="tel:+919106915561">+91 91069 15561</a>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="300ms">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info">
                                                <h4>Our Locations</h4>
                                                <div className="contact-locations-list">
                                                    <div className="location-item">
                                                        <div className="location-header">
                                                            <h5 className="city-name">Gandhinagar</h5>
                                                            <span className="hq-badge">HQ</span>
                                                        </div>
                                                        <p className="address-text">
                                                            GIFT City Tower One, 13th Floor, AI Excellence Centre, Gandhinagar, Gujarat
                                                        </p>
                                                    </div>

                                                    <div className="location-item">
                                                        <div className="location-header">
                                                            <h5 className="city-name">Mumbai</h5>
                                                        </div>
                                                        <p className="address-text">
                                                            Mathuradas Mill Compound, Peninsula Spenta, 1, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
                                                        </p>
                                                    </div>

                                                    <div className="location-item">
                                                        <div className="location-header">
                                                            <h5 className="city-name">Ahmedabad</h5>
                                                        </div>
                                                        <p className="address-text">
                                                            Opp. The National Higher Secondary School, Bhuyangdev, Sola Rd, Nr. Parshwanath Jain Mandir, Vardhmannagar Society, C.P. Nagar-1, Ahmedabad, Gujarat 380063
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="500ms">
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text" />
                                            </div>
                                            <div className="info">
                                                <h4>Official Email</h4>
                                                <a href="mailto:sales@nenotechnology.com">sales@nenotechnology.com</a>
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
