import Blog3ColumnContent from "@/components/blog/Blog3ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

const Blog3ColumnPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Blog Grid" breadCrumb="blog-3-column" />
                    <Blog3ColumnContent />
                </LayoutV1>
            </div>
        </>
    );
};

export default Blog3ColumnPage;
