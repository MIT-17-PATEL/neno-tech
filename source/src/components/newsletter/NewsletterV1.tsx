import Image from "next/image";
import SplitText from "../animation/SplitText";
import Link from "next/link";
import AppForm from "../form/AppForm";

const NewsletterV1 = () => {
    return (
        <>
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">
                <div className="newsletter-thumb">
                    <Image src="/assets/img/thumb/2.jpg" alt="Image Not Found" width={1024} height={639} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="newsletter-style-two">
                                <h4 className="sub-title">Newsletter</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Real-time discussions & regular updates
                                    </SplitText>
                                </h2>

                                <div className="fade-up-anim">
                                    <AppForm successMessage="Subscribed Successfully!">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="form-control"
                                            name="your-email"
                                            autoComplete="off"
                                            required
                                        />
                                        <button type="submit">
                                            <i className="fa fa-paper-plane" />
                                            Subscribe
                                        </button>
                                    </AppForm>
                                    <fieldset>
                                        <input type="checkbox" id="privacy" name="privacy" />
                                        <label htmlFor="privacy">I agree to the <Link href="/contact-us">Privacy Policy</Link></label>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsletterV1;