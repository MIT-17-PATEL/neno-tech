import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

const BlogStandardPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Blog Standard" breadCrumb="blog-standard" />
                    <BlogStandardContent />
                </LayoutV1>
            </div>
        </>
    );
};

export default BlogStandardPage;