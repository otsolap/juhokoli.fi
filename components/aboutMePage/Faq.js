import React from 'react'
import Image from 'next/image'
import Question from './Question'
import useFAQState from 'hooks/useFAQState'

const Faq = ({ faq }) => {
    const initialFaqs = faq.faqs
    const { toggleFAQ } = useFAQState(initialFaqs)

    return (
        <section id="faqSection">
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
                    {faq.faqs.map((faq) => (
                        <Question
                            {...faq}
                            key={faq.id}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq