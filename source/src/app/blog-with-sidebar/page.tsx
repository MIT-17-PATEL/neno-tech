import BlogWithSidebarContent from "@/components/blog/BlogWithSidebarContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Research & Insights | Neno Technology - Agentic AI Engineering",
    description: "In-depth engineering guides, architectural breakdowns, and research on autonomous agentic swarms, enterprise RAG, voice AI, and LLMOps."
};

const BlogWithSidebarPage = () => {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Research & Insights" breadCrumb="Home / Blog" />
                <BlogWithSidebarContent />
            </LayoutV1>
        </div>
    );
};

export default BlogWithSidebarPage;
