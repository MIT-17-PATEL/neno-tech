import BlogSingleContent from "@/components/blog/BlogSingleContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { getPublishedBlogByIdOrSlug, getPublishedBlogs } from "@/lib/server/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const blog = await getPublishedBlogByIdOrSlug(id);
    if (!blog) {
        return {
            title: "Article Not Found | Neno Technology",
            description: "The requested article does not exist or has been removed."
        };
    }
    return {
        title: `${blog.title} | Neno Technology - Agentic AI Engineering`,
        description: blog.shortDescription || blog.title,
    };
}

const BlogSinglePage = async ({ params }: PageProps) => {
    const { id } = await params;
    const data = await getPublishedBlogByIdOrSlug(id);

    if (!data) {
        notFound();
    }

    const allBlogs = await getPublishedBlogs();
    const currentIndex = allBlogs.findIndex(b => b.id === data.id || b.slug === data.slug);
    const previousBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : (allBlogs.length > 1 ? allBlogs[allBlogs.length - 1] : null);
    const nextBlog = currentIndex >= 0 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : (allBlogs.length > 1 ? allBlogs[0] : null);

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title={data.category || "Research & Insights"} breadCrumb="Home / Blog Details" />
                <BlogSingleContent blogInfo={data} previousBlog={previousBlog} nextBlog={nextBlog} />
            </LayoutV1>
        </div>
    );
};

export default BlogSinglePage;