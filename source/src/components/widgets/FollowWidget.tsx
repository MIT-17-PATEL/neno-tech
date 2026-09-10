import SocialV4 from '../social/SocialV4';

const FollowWidget = () => {
    return (
        <div
            className="sidebar-item social-sidebar p-4 rounded-4 mb-4"
            style={{
                background: "rgba(255, 255, 255, 0.035)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)"
            }}
        >
            <h4
                className="title fw-bold mb-3 pb-2"
                style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    letterSpacing: "-0.01em",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                }}
            >
                Connect With Us
            </h4>
            <div className="sidebar-info">
                <ul className="p-0 m-0 list-unstyled d-flex gap-2">
                    <SocialV4 />
                </ul>
            </div>
        </div>
    );
};

export default FollowWidget;
