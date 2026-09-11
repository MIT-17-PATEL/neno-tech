import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
    title: "Neno CRM: AI-Native CRM | Neno Technology",
    description: "AI-native CRM that automates enrichment, pipeline forecasting, and deal scoring.",
};

export default function Page() {
    const product = getProductBySlug("neno-crm");
    if (!product) { notFound(); }
    return <ProductDetailPage product={product} />;
}
