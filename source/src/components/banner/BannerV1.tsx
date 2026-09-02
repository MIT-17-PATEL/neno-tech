import Link from "next/link";
import BrandV1Data from "@/assets/jsonData/brand/BrandV1Data.json"
import Image from "next/image";
import AppSwiper from "../slider/AppSwiper";

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover"
                style={{ background: 'url(/assets/img/shape/banner-1.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="banner-one-content fade-up-anim">
                                <h4>Precision Engineering & AI Partner</h4>
                                <h2>Elevate your business with <strong style={{ backgroundImage: 'url(/assets/img/shape/banner-2.jpg)' }}>Neno-Tec</strong></h2>
                                <div className="content">
                                    <p>
                                        End-to-end technology services engineered for scale — from specialized engineering talent on demand to custom AI, CRM, and ERP product delivery.
                                    </p>
                                    <div className="button mt-30">
                                        <Link href="/contact-us" className="btn btn-style-one light">Talk To An Engineer <i className="fas fa-arrow-right" /></Link>
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
                                <AppSwiper
                                    className="brand-style-one-carousel"
                                    loop
                                    slidesPerView={2}
                                    spaceBetween={50}
                                    autoplayModule
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        768: { slidesPerView: 3, spaceBetween: 80 },
                                        992: { slidesPerView: 4, spaceBetween: 80 },
                                        1400: { slidesPerView: 5, spaceBetween: 80 },
                                    }}
                                    items={BrandV1Data.map((brand) => ({
                                        id: brand.id,
                                        content: (
                                            <div className="brand-item">
                                                <Image
                                                    src={`/assets/img/logo/${brand.thumb}`}
                                                    alt={brand.alt}
                                                    width={150}
                                                    height={40}
                                                />
                                            </div>
                                        ),
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BannerV1;