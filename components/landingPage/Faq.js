import React, { useState } from 'react'
import Image from 'next/image'
import Question from './Question'
import styles from '../../styles/FAQ.module.scss'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useState([faq.faqs])

    return (
        <section id={styles.faqSection}>
            <div className={`container ${styles.faqSectionContainer}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{faq.sectionTitle}</h2>
                    <div className={styles.content}>
                        {faq.faqs.map((faq, i) => (
                            <Question
                                key={i}
                                {...faq}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq