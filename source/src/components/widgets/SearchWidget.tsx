import AppForm from "../form/AppForm";

const SearchWidget = () => {
    return (
        <div
            className="sidebar-item search p-4 rounded-4 mb-4"
            style={{
                background: "rgba(255, 255, 255, 0.035)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)"
            }}
        >
            <h4
                className="title fw-bold mb-3"
                style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    letterSpacing: "-0.01em"
                }}
            >
                Search Research
            </h4>
            <div className="sidebar-info">
                <AppForm>
                    <div className="position-relative d-flex align-items-center">
                        <input
                            type="text"
                            placeholder="Enter keyword..."
                            name="text"
                            className="form-control"
                            autoComplete="off"
                            required
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                color: "#ffffff",
                                padding: "12px 50px 12px 18px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                width: "100%",
                                outline: "none",
                                boxShadow: "none"
                            }}
                        />
                        <button
                            type="submit"
                            className="position-absolute end-0 border-0 rounded-3 text-white d-flex align-items-center justify-content-center"
                            style={{
                                width: "40px",
                                height: "38px",
                                marginRight: "4px",
                                background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.4)",
                                transition: "filter 0.2s ease"
                            }}
                        >
                            <i className="fas fa-search" style={{ fontSize: "13px" }} />
                        </button>
                    </div>
                </AppForm>
            </div>
        </div>
    );
};

export default SearchWidget;
