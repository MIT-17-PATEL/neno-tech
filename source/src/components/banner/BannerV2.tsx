import Image from "next/image";
import Link from "next/link";

const BannerV2 = () => {
    return (
        <>
            <div className="banner-style-two-area bg-theme shadow theme text-light bg-cover" style={{ background: 'url(/assets/img/shape/banner-9.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="banner-two-content">
                                <h2 className="split-text-right split-text-in-right">Unlock the future</h2>
                                <div className="info">
                                    <h2 className="split-text-right split-text-in-right">With AI Power</h2>
                                    <p className="fade-up-anim">
                                        Artificial Intelligence encompasses the creation of computer systems capable of executing tasks usually necessitating human intelligence.
                                    </p>
                                    <div className="button mt-30 fade-up-anim">
                                        <Link href="/contact-us" className="btn btn-style-one light">Join Today <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="banner-two-right-info">
                                <div className="thumb fade-up-anim">
                                    <Image src="/assets/img/thumb/1.jpg" alt="Image Not Found" width={780} height={670} />
                                </div>
                                <div className="top-info fade-up-anim" data-wow-delay="100ms">
                                    <h4>Handle everything in quick & instant</h4>
                                    <h5>500+ Reviews</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV2;