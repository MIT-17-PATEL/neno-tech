import Link from "next/link";

const Pagination = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 pagi-area text-center">
                    <nav aria-label="navigation">
                        <ul className="pagination">
                            <li className="page-item"><Link className="page-link" href="#"><i className="fas fa-angle-double-left" /></Link></li>
                            <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" href="#"><i className="fas fa-angle-double-right" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;