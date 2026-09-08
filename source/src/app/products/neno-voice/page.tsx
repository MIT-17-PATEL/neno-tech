import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
    title: "Neno Voice — Voice AI Agents | Neno Technology",
    description: "Deploy intelligent voice AI agents that handle inbound and outbound calls 24/7.",
};

export default function Page() {
    const product = getProductBySlug("neno-voice");
    if (!product) { notFound(); }
    return <ProductDetailPage product={product} />;
}
