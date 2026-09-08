import Link from "next/link";
import BrandV1Data from "@/assets/jsonData/brand/BrandV1Data.json";

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover"
                style={{ background: 'url(/assets/img/shape/banner-1.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="banner-one-content fade-up-anim">
                                <h4>Innovation Labs</h4>
                                <h2>Intelligent <strong style={{ backgroundImage: 'url(/assets/img/shape/banner-2.jpg)' }}>Future Scaling</strong></h2>
                                <div className="content">
                                    <p>
                                        At NENOTECHNOLOGY, we bridge the gap between human imagination and artificial intelligence. We are architects of the future, engineering intelligent systems that redefine how businesses scale and innovate.
                                    </p>
                                    <div className="button mt-30">
                                        <Link href="/contact-us" className="btn btn-style-one light">Start Your Build <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="brand-marquee-wrapper">
                                    <div className="brand-marquee-track">
                                        {[...BrandV1Data, ...BrandV1Data].map((brand: any, index) => (
                                            <div 
                                                key={`${brand.id}-${index}`}
                                                className={`brand-marquee-item ${brand.customClass ? `${brand.customClass}-wrapper` : ''}`}
                                            >
                                                <img
                                                    src={`/assets/logo/${brand.thumb}`}
                                                    alt={brand.alt}
                                                    className={brand.customClass || ''}
                                                />
                                            </div>
                                        ))}
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

export default BannerV1;
