import { useState } from "react";

export default initialFaqs => {
    const [faqs, setFaqs] = useState(initialFaqs)

    return {
        faqs,
        toggleFAQ: faqIndex => {
            const updatedFAQ = faqs.map(faq =>
                faq.id === faqIndex ? { ...faq, open: !faq.open } : faq)
            setFaqs(updatedFAQ)
        }
    }
}
