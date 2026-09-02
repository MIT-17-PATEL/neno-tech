import BannerV5Data from "@/assets/jsonData/banner/BannerV5Data.json"
import Image from "next/image";
import Link from "next/link";
import ImageGeneratorForm from "../form/ImageGeneratorForm";
import AppSwiper from "../slider/AppSwiper";

const BannerV5 = () => {
    return (
        <>
            <div className="banner-style-five-area text-center bg-theme text-light bg-cover"
                style={{ background: 'url(/assets/img/shape/banner-17.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="banner-style-five-items">
                                <h2>Create beautiful art with Artificial Intelligence</h2>
                                <p>
                                    Artificial Intelligence encompasses the creation of computer systems capable of executing tasks usually necessitating human intelligence
                                </p>
                                <ImageGeneratorForm />
                                <div className="search-tags mt-40">
                                    <h5>Popular Search:</h5>
                                    <ul>
                                        <li><Link href="#" scroll={false}>Creative</Link></li>
                                        <li><Link href="#" scroll={false}>Artificial</Link></li>
                                        <li><Link href="#" scroll={false}>Design</Link></li>
                                        <li><Link href="#" scroll={false}>Animation</Link></li>
                                        <li><Link href="#" scroll={false}>Robot</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AppSwiper
                    className="infinite-gallery-carousel"
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={2000}
                    autoplay={{
                        delay: 0
                    }}
                    autoplayModule
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 5,
                        }
                    }}

                    items={BannerV5Data.map((banner) => ({
                        id: banner.id,
                        content: (
                            <div className="infinite-gallery-item">
                                <Image src={`/assets/img/portfolio/${banner.thumb}`} alt={banner.alt} width={600} height={900} />
                            </div>
                        ),
                    }))}
                />
            </div >
        </>
    );
};

export default BannerV5;