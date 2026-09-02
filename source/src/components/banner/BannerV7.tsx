import Image from "next/image";
import Link from "next/link";

const BannerV7 = () => {
    return (
        <>
            <div className="banner-style-seven-area text-light bg-cover"
                style={{ background: 'url(/assets/img/shape/banner-21.jpg)' }}>
                <div className="banner-seven-illustration">
                    <Image className="wow fadeInLeft" data-wow-delay="700ms" src="/assets/img/illustration/15.png" alt="Image Not Found" width={550} height={440} />
                    <Image className="fade-up-anim" src="/assets/img/illustration/14.png" alt="Image Not Found" width={700} height={800} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="banner-seven-content">
                                <h2 className="split-text-right split-text-in-right">Intelligent Solutions</h2>
                                <div className="info">
                                    <h2 className="split-text-right split-text-in-right">With AI Power</h2>
                                    <p className="wow fadeInUp" data-wow-delay="400ms">
                                        Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models.
                                    </p>
                                    <div className="button mt-30 wow fadeInUp" data-wow-delay="600ms">
                                        <Link href="/contact-us" className="btn btn-style-one light">Join Today <i className="fas fa-arrow-right" /></Link>
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

export default BannerV7;