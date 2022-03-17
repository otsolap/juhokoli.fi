import ContactDetails from "@components/contactPage/ContactDetails"
import ContactForm from "@components/contactPage/contactForm"

const Contact = ({ meta, contact }) => {
    return (
        <>
            <main id="contact">
                <ContactDetails />
                <ContactForm />
            </main>
        </>
    )
}

export default Contact

/* export async function getStaticProps() {

} */