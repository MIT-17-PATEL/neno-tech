import PriceV2Data from "@/assets/jsonData/price/PriceV2Data.json"
import SinglePriceV2 from "./SinglePriceV2";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const PriceV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`pricing-style-two-area bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Pricing Plan</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Affordable excellence deals at best prices & savings!
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-style-four-items">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="nav nav-tabs pricing-tab-navs" id="nav-tab" role="tablist">

                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        <span>Monthly</span>
                                    </button>

                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        <span>Yearly</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tab-content pricing-tab-content text" id="nav-tabContent">

                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                        <div className="row">
                                            {PriceV2Data.monthlyData.map(data =>
                                                <SinglePriceV2 data={data} key={data.id} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                        <div className="row">
                                            {PriceV2Data.yearlyData.map(data =>
                                                <SinglePriceV2 data={data} key={data.id} />
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV2;