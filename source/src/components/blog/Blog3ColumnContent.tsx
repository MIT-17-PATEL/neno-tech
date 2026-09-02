import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlog3Column from "./SingleBlog3Column";
import Pagination from "../pagination/Pagination";

const Blog3ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {BlogV1Data.map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;