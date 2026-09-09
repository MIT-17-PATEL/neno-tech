import Link from 'next/link';

interface DataType {
    breadCrumb?: string;
    title?: string;
}

const BreadCrumb = ({ breadCrumb, title }: DataType) => {
    return (
        <div className="inner-page-header text-center" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
            <div className="container">
                {/* Light Blue Outlined Pill Badge */}
                <div 
                    className="d-inline-flex align-items-center justify-content-center gap-2"
                    style={{
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        borderRadius: '9999px',
                        background: 'rgba(56, 189, 248, 0.08)',
                        padding: '7px 22px',
                        color: '#38bdf8',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '13px',
                        boxShadow: '0 0 20px -3px rgba(56, 189, 248, 0.25)'
                    }}
                >
                    <i className="fas fa-sparkles" style={{ fontSize: '11px' }} />
                    <span>{title ? title : "Neno Technology"}</span>
                </div>

                {breadCrumb && (
                    <div className="mt-2 text-muted" style={{ fontSize: '13px', letterSpacing: '0.3px', color: '#64748b' }}>
                        {breadCrumb}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BreadCrumb;
