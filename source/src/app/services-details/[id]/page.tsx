import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceV8Data from "@/assets/jsonData/services/ServiceV8Data.json"

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ServiceV8Data.find(service => service.id === parseInt(id))

    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Systems designed for learning and adaptation" breadCrumb="service-details" />
                    {data && <ServiceDetailsContent serviceInfo={data} />}
                </LayoutV1>
            </div>
        </>
    );
};

export default ServiceDetailsPage;