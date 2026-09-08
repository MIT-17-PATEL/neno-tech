import BrandV2Data from "@/assets/jsonData/brand/BrandV2Data.json"
import SingleBrandV2 from "./SingleBrandV2";
import SplitText from "../animation/SplitText";

const BrandV2 = () => {
    return (
        <>
            <div className="brand-style-two-area default-padding bg-theme text-light bg-cover"
                style={{ backgroundImage: 'url(assets/img/shape/banner-15.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Dedicated partners deriving progress and success
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-style-two-items">
                                {BrandV2Data.map(brand =>
                                    <SingleBrandV2 brand={brand} key={brand.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BrandV2;
