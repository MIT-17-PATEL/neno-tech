const ContactMap = () => {
    return (
        <>
            <div className="maps-area default-padding-bottom overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="google-maps">
                                <iframe
                                    src="https://maps.google.com/maps?q=GIFT+One+Tower,+GIFT+City,+Gujarat,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMap;