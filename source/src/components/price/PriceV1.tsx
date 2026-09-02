import PriceV1Data from "@/assets/jsonData/price/PriceV1Data.json"
import PriceV1List from "./PriceV1List";
import Link from "next/link";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const PriceV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`pricing-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
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
                                    Unbeatable deals at best prices!
                                </SplitText>
                            </h2>
                            <ul className="pricing-types fade-up-anim">
                                {PriceV1Data.map(list =>
                                    <PriceV1List key={list.id} list={list} />
                                )}
                            </ul>
                        </div>

                        <div className="col-xl-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="pricing-style-one-item fade-up-anim">

                                <div className="left-info">
                                    <h3>Premium <span className="badge"><i className="fas fa-fire" /> 40% Off</span></h3>
                                    <div className="bottom">
                                        <div className="pricing">
                                            <h1>$99.50</h1>
                                            <span>Per user / Billed Monthly </span>
                                        </div>
                                        <Link className="btn btn-style-one btn-border mt-30" href="/contact-us">Get Started <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>

                                <div className="right-info">
                                    <ul className="list-style-two">
                                        <li>Unlimited User</li>
                                        <li>25 Deployment Slots</li>
                                        <li>Advanced Security</li>
                                        <li>Customer Management</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="pricing-style-one-item fade-up-anim bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/10.png)' }}>

                                <div className="left-info">
                                    <h3>Standard <span className="badge"><i className="fas fa-fire" /> 30% Off</span></h3>
                                    <div className="bottom">
                                        <div className="pricing">
                                            <h1>$15.99</h1>
                                            <span>Per user / Billed Monthly </span>
                                        </div>
                                        <Link className="btn btn-style-one mt-30" href="/contact-us">Get Started <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>

                                <div className="right-info">
                                    <ul className="list-style-two">
                                        <li>1 User</li>
                                        <li>5 Deployment Slots</li>
                                        <li>Advanced Security</li>
                                        <li>Customer Management</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;