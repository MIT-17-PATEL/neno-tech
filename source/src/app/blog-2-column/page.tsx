import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

const Blog2ColumnPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Blog Grid" breadCrumb="blog-2-column" />
                    <Blog2ColumnContent />
                </LayoutV1>
            </div>
        </>
    );
};

export default Blog2ColumnPage;
