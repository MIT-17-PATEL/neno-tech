import BlogWithSidebarContent from "@/components/blog/BlogWithSidebarContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

const BlogWithSidebarPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Blog With Sidebar" breadCrumb="blog-with-sidebar" />
                    <BlogWithSidebarContent />
                </LayoutV1>
            </div>
        </>
    );
};

export default BlogWithSidebarPage;