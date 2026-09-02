import AppForm from './AppForm';

const ConsultationForm = () => {
    return (
        <>
            <AppForm className="contact-form contact-form" successMessage="Thanks For Your Email">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button className="btn btn-style-one" type="submit" name="submit" id="submit">
                            Get in Touch <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                </div>

                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </AppForm>
        </>
    );
};

export default ConsultationForm;