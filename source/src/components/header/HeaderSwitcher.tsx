'use client'
import HeaderClient from "./HeaderClient";
import HeaderV1 from "./HeaderV1";
import HeaderV2 from "./HeaderV2";
import HeaderV3 from "./HeaderV3";
import HeaderV4 from "./HeaderV4";
import HeaderV5 from "./HeaderV5";
import HeaderV6 from "./HeaderV6";
import HeaderV7 from "./HeaderV7";
import HeaderV8 from "./HeaderV8";

interface Props {
    headerStyle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    lightMode?: boolean;
    isHomePill?: boolean;
}

const HeaderSwitcher = ({ headerStyle = 1, lightMode, isHomePill }: Props) => {
    return (
        <HeaderClient>
            {(props) => {
                switch (headerStyle) {
                    case 1: return <HeaderV1 lightMode={lightMode} {...props} />;
                    case 2: return <HeaderV2 lightMode={lightMode} {...props} />;
                    case 3: return <HeaderV3 {...props} />;
                    case 4: return <HeaderV4 lightMode={lightMode} {...props} />;
                    case 5: return <HeaderV5 lightMode={lightMode} {...props} />;
                    case 6: return <HeaderV6 {...props} />;
                    case 7: return <HeaderV7 isHomePill={isHomePill} {...props} />;
                    case 8: return <HeaderV8 {...props} />;
                    default: return <HeaderV1 lightMode={lightMode} {...props} />;
                }
            }}
        </HeaderClient>
    );
};

export default HeaderSwitcher;
