const Question = ({ faq, index, toggleQuestion }) => {
    return (
        <div
            className={`${faq} + ${faq.open ? 'open' : ''}`}
            key={index}
            onClick={() => toggleQuestion(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default Question