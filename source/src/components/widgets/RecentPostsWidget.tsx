import SingleRecentPost, { RecentPostItem } from './SingleRecentPost';

interface RecentPostsWidgetProps {
    isFlexChild?: boolean;
    blogs?: RecentPostItem[];
}

const RecentPostsWidget = ({ isFlexChild = false, blogs = [] }: RecentPostsWidgetProps) => {
    const recentPosts = blogs.slice(0, 4);

    return (
        <div
            className={`sidebar-item recent-post p-4 rounded-4 ${isFlexChild ? 'flex-grow-1 d-flex flex-column mb-0' : 'mb-4'}`}
            style={{
                background: "rgba(255, 255, 255, 0.035)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)",
                minHeight: 0
            }}
        >
            <h4
                className="title fw-bold mb-3 pb-2 flex-shrink-0"
                style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    letterSpacing: "-0.01em",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                }}
            >
                Recent Articles
            </h4>
            {recentPosts.length > 0 ? (
                <ul className="p-0 m-0 list-unstyled flex-grow-1 overflow-y-auto neno-recent-list" style={{ minHeight: 0 }}>
                    {recentPosts.map(blog =>
                        <SingleRecentPost blog={blog} key={blog.id} />
                    )}
                </ul>
            ) : (
                <p className="text-muted small m-0 py-3 text-center" style={{ color: "rgba(255, 255, 255, 0.45)" }}>
                    No recent articles published yet.
                </p>
            )}
        </div>
    );
};

export default RecentPostsWidget;
