import { Metadata } from "next";
import TrainingPage from "@/app/training/page";

export const metadata: Metadata = {
    title: "Training & Education | Neno Technology",
    description: "Enterprise AI and software training programs by Neno Technology practitioners at GIFT City.",
};

export default function CompanyTrainingPage() {
    return <TrainingPage />;
}
