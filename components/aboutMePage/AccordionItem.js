import React, { useState, useEffect, useRef } from 'react'
import styles from '@/styles/accordion.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Question = ({ answer, question }) => {
    const contentRef = useRef(null)
    const [active, setActive] = useState(false);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <button className={styles.button} onClick={toggleAccordion}>
            <div className={styles.faq}>
                <div className={active ? `${styles.open}` : `${styles.closed}`}>
                    <article className={styles.item}>
                        <h4 className={styles.heading}>{question}</h4>
                        <FontAwesomeIcon className={styles.icon} aria-label="Usein kysytty kysymys Juho Kolista" icon={active ? faAngleUp : faAngleDown} />
                    </article>
                </div>
                <div ref={contentRef} className={active ? `${styles.answer} ${styles.divider}` : `${styles.answer}`} >
                    <p className={styles.answerText}>{answer}</p>
                </div>
            </div>
        </button >
    )
}

export default Question