import React from "react";
import Footer from "./Footer";

interface DataType {
    sectionClass?: string;
}

const FooterV1 = ({ sectionClass }: DataType) => {
    return <Footer sectionClass={sectionClass} />;
};

export default FooterV1;
