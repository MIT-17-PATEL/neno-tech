import AppForm from "./AppForm";

const ImageGeneratorForm = () => {
    return (
        <>
            <AppForm>
                <input
                    type="text"
                    placeholder="Describe what you want"
                    className="form-control"
                    name="text"
                    autoComplete="off"
                    required
                />
                <button className="btn btn-style-one" type="submit">
                    generate <i className="fa fa-magic" />
                </button>
            </AppForm>
        </>
    );
};

export default ImageGeneratorForm;