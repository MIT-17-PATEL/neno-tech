interface DataType {
    id: number;
    headingId: string;
    collapseId: string;
    question: string;
    isOpen: boolean;
    answer: string;
}

const SingleFaqV2 = ({ faq }: { faq: DataType }) => {
    const { headingId, collapseId, question, answer, isOpen } = faq;

    return (
        <>
            <div className="accordion-item faq-style-two">
                <h2 className="accordion-header" id={headingId}>
                    <button
                        className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isOpen}
                        aria-controls={collapseId}
                    >
                        {question}
                    </button>
                </h2>

                <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#faqAccordion"
                >
                    <div className="accordion-body">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaqV2;
