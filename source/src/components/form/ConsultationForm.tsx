import AppForm from './AppForm';

const ConsultationForm = () => {
    return (
        <>
            <AppForm className="contact-form contact-form" successMessage="Thanks for contacting us! We'll get back to you shortly." useOdoo={true}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Full Name *" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email *" type="email" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone Number *" type="tel" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="city" name="city" placeholder="City *" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="company" name="company" placeholder="Company *" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="designation" name="designation" placeholder="Designation *" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="requirements" name="requirements" placeholder="Requirements *" rows={5} autoComplete='off' required />
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
