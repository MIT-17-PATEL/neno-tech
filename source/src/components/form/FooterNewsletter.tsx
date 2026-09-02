import Image from "next/image";
import AppForm from "./AppForm";

const FooterNewsletter = () => {
    return (
        <AppForm>
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                autoComplete="off"
                required
            />
            <button type="submit">
                <Image
                    src="/assets/img/icon/arrow-right-two.png"
                    alt="Submit"
                    width={128}
                    height={90}
                />
            </button>
        </AppForm>
    );
};

export default FooterNewsletter;
