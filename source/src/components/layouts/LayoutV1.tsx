import FooterV2 from "../footer/FooterV2";
import HeaderSwitcher from "../header/HeaderSwitcher";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderSwitcher headerStyle={8}  />
            {children}
            <FooterV2 />
        </>
    );
};

export default LayoutV1;