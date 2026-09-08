import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/productsData";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
    title: "Neno Dialer — AI-Powered Sales Dialer | Neno Technology",
    description: "High-velocity sales dialer with AI conversation intelligence and real-time coaching.",
};

export default function Page() {
    const product = getProductBySlug("neno-dialer");
    if (!product) { notFound(); }
    return <ProductDetailPage product={product} />;
}
