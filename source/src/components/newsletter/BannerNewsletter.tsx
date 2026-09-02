import AppForm from '../form/AppForm';

const BannerNewsletter = () => {
    return (
        <>
            <AppForm>
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
        </>
    );
};

export default BannerNewsletter;