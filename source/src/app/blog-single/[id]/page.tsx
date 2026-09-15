import BlogSingleContent from "@/components/blog/BlogSingleContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

export const metadata = {
    title: "Article Details | Neno Technology - Agentic AI Engineering",
    description: "In-depth engineering guides, architectural breakdowns, and research on autonomous agentic swarms, enterprise RAG, voice AI, and LLMOps."
};

const BlogSinglePage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = BlogV1Data.find(blog => blog.id === parseInt(id))

    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title={data?.category || "Research & Insights"} breadCrumb="Home / Blog Details" />
                    {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogV1Data.length} />}
                </LayoutV1>
            </div>
        </>
    );
};

export default BlogSinglePage;