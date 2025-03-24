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
                    <ContactDetails contact={contact} some={contact.socialMedia} />
                    <ContactForm contact={contact} />
                </section>
            </main>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    const contact = await import(`../content/contact.json`)
    const site = await import(`../content/site.json`)

    return {
        props: {
            meta: {
                title: contact.meta.title ?? '',
                description: contact.meta.description ?? '',
                url: contact.meta.url ?? '',
                image: contact.meta.image ?? '',
            },
            contact: {
                title: contact.ContactSection.title ?? '',
                description: contact.ContactSection.description ?? '',
                cta: contact.ContactSection.cta ?? null,
                socialMedia: site.Footer.socialMedia ?? [],
            },
        }
    }

} 