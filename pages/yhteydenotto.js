import ContactDetails from "@components/contactPage/ContactDetails"
import ContactForm from "@components/contactPage/contactForm"
import Meta from "@components/Meta"
import styles from '../styles/Contact.module.css'

const Contact = ({ meta, contact }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id={styles.contactPage}>
                <ContactDetails contact={contact} />
                <ContactForm contact={contact} />
            </main>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    const contact = await import(`../content/contact.json`)
    return {
        props: {
            contact: {
                SectionTitle: contact.ContactSection.SectionTitle,
                SectionDescription: contact.ContactSection.SectionDescription,
                cta: contact.ContactSection.cta,
                socialMedia: contact.ContactSection.socialMedia
            },
            meta: {
                title: contact.meta.title,
                description: contact.meta.description,
                url: contact.meta.url,
                image: contact.meta.image
            }
        }
    }

} 