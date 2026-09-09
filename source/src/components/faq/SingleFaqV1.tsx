interface DataType {
    id: number;
    headingId: string;
    collapseId: string;
    question: string;
    answer: string;
    isOpen: boolean;
}

const SingleFaqV1 = ({ faq }: { faq: DataType }) => {
    const { headingId, collapseId, question, answer, isOpen } = faq;

    return (
        <div className="faq-glass-accordion-item">
            <h3 className="accordion-header" id={headingId}>
                <button
                    className={`faq-accordion-button ${!isOpen ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isOpen}
                    aria-controls={collapseId}
                >
                    <span className="faq-question-text">{question}</span>
                    <span className="faq-toggle-icon">
                        <svg className="icon-plus" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <svg className="icon-minus" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </span>
                </button>
            </h3>
            <div
                id={collapseId}
                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                aria-labelledby={headingId}
                data-bs-parent="#faqAccordion"
            >
                <div className="faq-accordion-body">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFaqV1;
