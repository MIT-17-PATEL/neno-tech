import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
    title: "Neno ERP: AI-Augmented ERP Platform | Neno Technology",
    description: "Modular AI-augmented ERP unifying finance, operations, HR, and supply chain.",
};

export default function Page() {
    const product = getProductBySlug("neno-erp");
    if (!product) { notFound(); }
    return <ProductDetailPage product={product} />;
}
