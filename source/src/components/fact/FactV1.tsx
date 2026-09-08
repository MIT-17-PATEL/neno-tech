import FactV1Data from "@/assets/jsonData/fact/FactV1Data.json"
import SingleFactV1 from "./SingleFactV1";

const FactV1 = () => {
    return (
        <>
            <div className="funfact-style-one-area">
                <div className="container">
                    <div className="funfact-style-one-items transform-up-animation bg-cover text-light"
                        style={{ backgroundImage: 'url(/assets/img/shape/banner-10.jpg)' }}>
                        <div className="row">
                            {FactV1Data.map(fact =>
                                <div className="col-lg-4 col-md-6 funfact-style-one-item" key={fact.id}>
                                    <SingleFactV1 fact={fact} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;
