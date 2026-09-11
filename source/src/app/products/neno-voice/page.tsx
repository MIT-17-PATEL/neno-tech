import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
    title: "Neno Voice: Voice AI Agents | Neno Technology",
    description: "Production conversational voice AI agents with sub-400ms latency and 165+ language support.",
};

export default function Page() {
    const product = getProductBySlug("neno-voice");
    if (!product) { notFound(); }
    return <ProductDetailPage product={product} />;
}
