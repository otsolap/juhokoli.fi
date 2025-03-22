import Image from "next/image"
import styles from '@/styles/accordion.module.css'
import AccordtionItem from './AccordionItem'

const Accordion = ({ faq }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <figure className={styles.imageWrapper}>
                    <Image
                    src={faq.faqProfilePicture}
                    alt={faq.faqProfilePictureAlt}
                    width={850}
                    height={1240}
                    quality={100}
                    className={styles.image}
                />
                </figure>
                <div className={styles.content}>
                    {faq.faqs.map((faq, i) => (
                        <AccordtionItem
                            key={i}
                            {...faq}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Accordion