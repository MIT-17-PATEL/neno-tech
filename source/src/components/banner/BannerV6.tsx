import Image from "next/image";
import Link from "next/link";

const BannerV6 = () => {
    return (
        <>
            <div className="banner-style-six-area bg-theme text-light bg-cover" style={{ background: 'url(/assets/img/shape/banner-18.jpg)' }}>
                <div className="container">
                    <div className="banner-six-top-info">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <h2>Unlocking new <strong>Efficiencies of </strong> AI Startup</h2>
                            </div>
                            <div className="col-xl-5 offset-xl-1 col-lg-6">
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn and make decisions.
                                </p>
                                <Link href="/contact-us" className="btn btn-style-one light mt-10">
                                    Join Today <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner-bottom-info">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="community-card-two bg-theme text-light bg-cover shadow theme" style={{ backgroundImage: 'url(/assets/img/shape/banner-2.jpg)' }}>
                                    <h4>AI Community</h4>
                                    <p>
                                        Join the design community and unleash your creative studio
                                    </p>
                                    <div className="multi-users">
                                        <Image src="/assets/img/team/11.jpg" alt="Image Not Found" width={800} height={800} />
                                        <Image src="/assets/img/team/12.jpg" alt="Image Not Found" width={800} height={800} />
                                        <Image src="/assets/img/team/13.jpg" alt="Image Not Found" width={800} height={800} />
                                        <Image src="/assets/img/team/3.jpg" alt="Image Not Found" width={800} height={800} />
                                        <i className="fas fa-plus" />
                                        <h5>10M User</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="thumb">
                                    <Image src="/assets/img/banner/4.jpg" alt="Image Not Found" width={1690} height={930} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV6;