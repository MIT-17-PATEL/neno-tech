import Image from "next/image";

const SocialV2 = () => {
    return (
        <>
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                </a>
            </li>
            <li>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/assets/img/icon/twitter-x.png"
                        alt="X (formerly Twitter)"
                        width={20}
                        height={20}
                    />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/tirthpatel00/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/tirth-patel-nenotechnology/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in" />
                </a>
            </li>
        </>
    );
};

export default SocialV2;
