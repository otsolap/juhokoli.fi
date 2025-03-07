import React, { useState } from 'react'
import Image from "next/legacy/image"
import Question from './Question'
import styles from '../../styles/faq.module.css'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useState([faq.faqs])

    return (
        <section id={styles.faqSection}>
            <div className={`container ${styles.faqSectionContainer}`}>
                <div className={`desktop-only ${styles.profilePic}`}>
                    <Image
                        src={faq.faqProfilePicture}
                        alt={faq.faqProfilePictureAlt}
                        width={850}
                        height={1240}
                        quality={100}
                        objectFit='cover'
                        objectPosition='center'
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
            </div>
        </section>
    )
}

export default Faq