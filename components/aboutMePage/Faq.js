import React, { useState } from 'react'
import Image from 'next/image'
import Question from './Question'
import styles from '../../styles/FAQ.module.css'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useState([faq.faqs])

    return (
        <section id={styles.faqSection}>
            <div className={`desktop-only ${styles.profilePic}`}>
                <Image
                    src={faq.faqProfilePicture}
                    alt={faq.faqProfilePictureAlt}
                    width={850}
                    height={1240}
                    quality={100}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    {faq.faqs.map((faq, i) => (
                        <Question
                            key={i}
                            {...faq}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq