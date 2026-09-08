import Link from 'next/link';

interface DataType {
    breadCrumb?: string;
    title?: string;
}

const BreadCrumb = ({ breadCrumb, title }: DataType) => {
    return (
        <>
            <div style={{ padding: '140px 0 30px 0', textAlign: 'center' }}>
                <div className="container">
                    <div className="d-inline-flex align-items-center justify-content-center" style={{
                        border: '1px solid #C0D8FF',
                        borderRadius: '8px',
                        background: '#f8fafc',
                        padding: '12px 24px',
                        color: '#70A5FF',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '16px'
                    }}>
                        <span>{title ? title : "Not Found Page"}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;