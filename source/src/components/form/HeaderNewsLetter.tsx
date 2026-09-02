import AppForm from "./AppForm";

const HeaderNewsLetter = () => {
    return (
        <>
            <AppForm successMessage="Thanks For Subscription!">
                <div className="input-group stylish-input-group">
                    <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        required
                    />
                    <span className="input-group-addon">
                        <button type="submit">
                            <i className="fas fa-long-arrow-right" />
                        </button>
                    </span>
                </div>
            </AppForm>
        </>
    );
};

export default HeaderNewsLetter;