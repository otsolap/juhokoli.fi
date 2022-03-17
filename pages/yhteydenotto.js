import ContactDetails from "@components/contactPage/ContactDetails"
import ContactForm from "@components/contactPage/contactForm"
import Meta from "@components/Meta"

const Contact = ({ meta, contact }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="contact">
                <ContactDetails contact={contact} />
                <ContactForm />
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
                sectionTitle: contact.ContactSection.SectionTitle,
                SectionDescription: contact.ContactSection.SectionDescription,
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