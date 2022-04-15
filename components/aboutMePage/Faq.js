import React, { useState } from 'react'
import Image from 'next/image'
import Question from './Question'
import useToggle from 'hooks/useToggleState'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useState([faq.faqs])
    const [questionActive, toggle] = useToggle(false)

    const toggleQuestion = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }
            return faq
        }))
    }

    return (
        <section id="faq">
            <div className="desktop-only">
                <Image
                    src={faq.faqProfilePicture}
                    alt={faq.faqProfilePictureAlt}
                    width={850}
                    height={1240}
                    quality={100}
                />
            </div>
            <div className="container">
                <div className="content">
                    {faq.faqs.map((faq, i) => (
                        <Question
                            faq={faq}
                            key={i}
                            index={i}
                            toggleQuestion={toggleQuestion}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq