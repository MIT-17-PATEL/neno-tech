const ContactMap = () => {
    return (
        <>
            <div className="maps-area default-padding-bottom overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="google-maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8517228834467!2d72.67758617594953!3d23.164700079073347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e802f0689b787%3A0x6a0c5cbb7fa5f9fe!2sGIFT%20One%20Tower!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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