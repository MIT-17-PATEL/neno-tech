import Image from "next/image";
import BannerNewsletter from "../newsletter/BannerNewsletter";

interface DataType {
    bgDark?: boolean;
}

const BannerV3 = ({ bgDark }: DataType) => {

    const bgImage = bgDark ? "/assets/img/shape/banner-13.jpg" : "/assets/img/shape/banner-4.jpg";

    return (
        <>
            <div className="banner-style-three-area overflow-hidden bg-gray bg-cover"
                style={{ background: `url(${bgImage})` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7 pr-60 pr-md-15 pr-xs-15">
                            <div className="banner-style-three-info">
                                <h2 className="wow fadeInUp">Unlock the power of AI with a <strong>Friendly Chatbot</strong></h2>
                                <p className="fade-up-anim">
                                    Artificial Intelligence encompasses the creation of computer systems capable of executing tasks usually necessitating human intelligence
                                </p>
                                <div className="fade-up-anim">
                                    <BannerNewsletter />
                                    <div className="notificaiton">
                                        <p>
                                            <i className="fas fa-bell" /> Smart, instant, 24/7 chatbot to assist your business
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="chat-bot-thumb text-center">
                                <div className="chat-item wow fadeInLeft" data-wow-delay="600ms">
                                    <p>
                                        Hello, How can i help you?
                                    </p>
                                    <Image src="/assets/img/illustration/3.png" alt="Image Not Found" width={60} height={60} />
                                </div>
                                <div className="chat-item wow fadeInRight" data-wow-delay="900ms">
                                    <p>
                                        I’m looking for a creative designer for my startup agncy
                                    </p>
                                    <Image src="/assets/img/team/2.jpg" alt="Image Not Found" width={615} height={515} />
                                </div>
                                <div className="illustration">
                                    <Image className="wow fadeInUp" data-wow-delay="300ms" src="/assets/img/illustration/2.png" alt="Image Not Found" width={410} height={600} />
                                    <Image src="/assets/img/shape/2.png" alt="Image Not Found" width={225} height={130} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV3;
