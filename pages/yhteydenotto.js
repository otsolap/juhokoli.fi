import ContactDetails from "@components/contactPage/ContactDetails"
import ContactForm from "@components/contactPage/ContactForm"
import Meta from "@components/Meta"
import styles from '@/styles/contact.module.css'

const Contact = ({ meta, contact }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="yhteydenotto" className="container">
                <section className={styles.wrapper}>
                    <ContactDetails contact={contact} />
                    <ContactForm contact={contact} />
                </section>
            </main>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    const contact = await import(`../content/contact.json`)
    return {
        props: {
            meta: {
                title: contact.meta.title ?? '',
                description: contact.meta.description ?? '',
                url: contact.meta.url ?? '',
                image: contact.meta.image ?? '',
            },
            contact: {
                SectionTitle: contact.ContactSection.SectionTitle ?? '',
                SectionDescription: contact.ContactSection.SectionDescription ?? '',
                cta: contact.ContactSection.cta ?? null,
                socialMedia: contact.ContactSection.socialMedia ?? [],
            },
        }
    }

} 