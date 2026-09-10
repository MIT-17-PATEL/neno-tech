import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import SingleRecentPost from './SingleRecentPost';

const RecentPostsWidget = () => {
    return (
        <div
            className="sidebar-item recent-post p-4 rounded-4 mb-4"
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
                Recent Articles
            </h4>
            <ul className="p-0 m-0 list-unstyled">
                {BlogV1Data.slice(0, 4).map(blog =>
                    <SingleRecentPost blog={blog} key={blog.id} />
                )}
            </ul>
        </div>
    );
};

export default RecentPostsWidget;
