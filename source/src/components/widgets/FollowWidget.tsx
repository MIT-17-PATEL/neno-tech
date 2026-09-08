import SocialV4 from '../social/SocialV4';

const FollowWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <SocialV4 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FollowWidget;
