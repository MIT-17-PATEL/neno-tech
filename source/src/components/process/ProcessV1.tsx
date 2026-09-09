import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json";
import SingleProcessV1 from "./SingleProcessV1";

interface DataType {
    sectionClass?: string;
}

const ProcessV1 = ({ sectionClass }: DataType) => {
    return (
        <section className={`process-modern-area default-padding position-relative text-light ${sectionClass ? sectionClass : ""}`}>
            {/* Subtle Radial Ambient Glow Spots */}
            <div className="process-ambient-glow process-glow-indigo" aria-hidden="true" />
            <div className="process-ambient-glow process-glow-cyan" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Horizontally Centered Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <div className="process-header-content">
                            <span className="process-pill-badge">
                                <span className="process-badge-dot" />
                                HOW IT WORKS
                            </span>
                            <h2 className="process-header-title">
                                Crafting smarter AI through our process
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Balanced 3-Column Grid Container */}
                <div className="row g-4 justify-content-center process-grid-row">
                    {ProcessV1Data.map(process => (
                        <div className="col-lg-4 col-md-6 d-flex" key={process.id}>
                            <SingleProcessV1 process={process} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessV1;
