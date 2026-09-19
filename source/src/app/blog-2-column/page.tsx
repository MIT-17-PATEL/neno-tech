import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { getPublishedBlogs } from "@/lib/server/blogs";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
    title: "Blog 2 Column | Neno Technology",
    description: "Insights and engineering articles from Neno Technology."
};

const Blog2ColumnPage = async () => {
    const blogs = await getPublishedBlogs();

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-2-column" />
                <Blog2ColumnContent blogs={blogs} />
            </LayoutV1>
        </div>
    );
};

export default Blog2ColumnPage;
