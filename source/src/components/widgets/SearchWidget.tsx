import AppForm from "../form/AppForm";

const SearchWidget = () => {
    return (
        <>
            <div className="sidebar-item search">
                <div className="sidebar-info">
                    <AppForm>
                        <input
                            type="text"
                            placeholder="Enter Keyword"
                            name="text"
                            className="form-control"
                            autoComplete='off'
                            required
                        />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </AppForm>
                </div>
            </div>
        </>
    );
};

export default SearchWidget;
