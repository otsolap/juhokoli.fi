import styles from '../../styles/FAQ.module.css'

const Question = ({ id, open, answer, question, toggleFAQ }) => {
    return (
        <div
            className={`${styles.faq} ${open ? `${styles.open}` : ''}`}
            key={id}>
            <div className={styles.faqQuestion}>
                {question}
            </div>
            <div className={styles.faqAnswer}>
                {answer}
            </div>
            <button className="bg-red-700" onClick={() => toggleFAQ(id)}>Klikkaa Mua</button>
        </div>
    )
}

export default Question