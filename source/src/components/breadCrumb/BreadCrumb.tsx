import Link from 'next/link';

interface DataType {
    breadCrumb?: string;
    title?: string;
}

const BreadCrumb = ({ breadCrumb, title }: DataType) => {
    return (
        <>
            <div className="breadcrumb-area text-center bg-cover text-light bg-theme"
                style={{ backgroundImage: 'url(/assets/img/shape/banner-14.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>{title ? title : "Not Found Page"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="/"><i className="fas fa-home" /> Home</Link></li>
                                <li>{breadCrumb ? breadCrumb : "not-found"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;