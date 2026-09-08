import Image from 'next/image';
import Link from 'next/link';
import AppForm from '../form/AppForm';

interface DataType {
    bgDark?: boolean
}

const BannerV4 = ({ bgDark }: DataType) => {

    const bgImage = bgDark ? "/assets/img/shape/banner-20.jpg" : "/assets/img/shape/banner-16.jpg";

    return (
        <>
            <div className="banner-style-four-area text-center bg-gray bg-cover"
                style={{ background: `url(${bgImage})` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="banner-style-four-items">
                                <h2 className="fade-up-anim">AI powered <strong>content</strong> writing process.</h2>
                                <p className="fade-up-anim">
                                    Artificial Intelligence encompasses the creation of computer systems capable of executing tasks usually necessitating human intelligence
                                </p>
                                <AppForm className="fade-up-anim" >
                                    <input
                                        type="email"
                                        placeholder="Describe what you want"
                                        className="form-control"
                                        name="email"
                                        autoComplete='off'
                                        required
                                    />
                                    <button className="btn btn-style-one btn-dark" type='submit'>
                                        generate <i className="fa fa-magic" />
                                    </button>
                                </AppForm>
                            </div>
                        </div>

                        <div className="col-xl-10 offset-xl-1">
                            <div className="banner-four-dashbaord fade-up-anim">
                                <Image src="/assets/img/illustration/dashboard.jpg" alt="Image Not Found" width={1140} height={690} />
                                <div className="code-card bg-dark text-light">
                                    <h2>AI</h2>
                                    <p>
                                        Agency, providing ai service in world-wide since 2008
                                    </p>
                                    <Link className="btn btn-style-one btn-border mt-10" href="/about-us">Get Started <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV4;
