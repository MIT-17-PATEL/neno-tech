import AppForm from "../form/AppForm";

const NewsletterV2 = () => {
    return (
        <>
            <div className="newsletter-area default-padding blurry-shape bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="newsletter-style-three text-center">
                                <h4 className="sub-title">Join with us</h4>
                                <h2 className="title">Get updates by joining our newsletter.</h2>
                                <AppForm successMessage="Subscribed Successfully!">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="form-control"
                                        name="email"
                                        autoComplete="off"
                                        required
                                    />
                                    <button className="btn btn-style-one" type="submit">
                                        Try Now <i className="fa fa-arrow-right" />
                                    </button>
                                </AppForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsletterV2;
