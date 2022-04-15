import styles from '../../styles/FAQ.module.css'

const Question = ({ faq, index, toggleQuestion }) => {
    return (
        <div
            className={`${styles.faq} ${faq.open ? `${styles.open}` : ''}`}
            key={index}
        >
            <div className={styles.faqQuestion}>
                {faq.question}
            </div>
            <div className={styles.faqAnswer}>
                {faq.answer}
            </div>
            <button onClick={() => toggleQuestion(index)}>Klikkaa Mua</button>
        </div>
    )
}

export default Question