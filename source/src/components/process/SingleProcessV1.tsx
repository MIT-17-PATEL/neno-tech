interface DataType {
    id: number;
    step: string;
    title: string;
    description: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { step, title, description } = process;

    const getIcon = (stepNum: string) => {
        switch (stepNum) {
            case "01":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <path d="M11 8v6M8 11h6" />
                    </svg>
                );
            case "02":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                        <circle cx="12" cy="12" r="2" />
                    </svg>
                );
            case "03":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                );
            default:
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                );
        }
    };

    return (
        <div className="process-glass-card w-100">
            {/* Top Bar with Step Tag & Icon */}
            <div className="process-card-header">
                <div className="process-step-badge">
                    <span className="step-label">PHASE</span>
                    <span className="step-num">{step}</span>
                </div>
                <div className="process-card-icon">
                    {getIcon(step)}
                </div>
            </div>

            {/* Content */}
            <div className="process-card-content">
                <h3 className="process-card-title">{title}</h3>
                <p className="process-card-desc">{description}</p>
            </div>

            {/* Subtle card glow overlay */}
            <div className="process-card-shine" aria-hidden="true" />
        </div>
    );
};

export default SingleProcessV1;
