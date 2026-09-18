import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { getPublishedBlogs } from "@/lib/server/blogs";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
    title: "Blog Standard | Neno Technology",
    description: "Insights and engineering articles from Neno Technology."
};

const BlogStandardPage = async () => {
    const blogs = await getPublishedBlogs();

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Blog Standard" breadCrumb="blog-standard" />
                <BlogStandardContent blogs={blogs} />
            </LayoutV1>
        </div>
    );
};

export default BlogStandardPage;
