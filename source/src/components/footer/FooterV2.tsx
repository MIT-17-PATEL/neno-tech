import React from "react";
import Footer from "./Footer";

interface DataType {
    sectionClass?: string;
}

const FooterV2 = ({ sectionClass }: DataType) => {
    return <Footer sectionClass={sectionClass} />;
};

export default FooterV2;
