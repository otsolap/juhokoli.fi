import styles from '../styles/Contact.module.scss'

const ContactForm = ({ contact }) => {
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            fullName: event.target.fullName.value,
            tel: event.target.tel.value,
            email: event.target.email.value,
            message: event.target.message.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/contactForm'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        console.log(result)
    }

    return (
        <section id={styles.formSection}>
            <div id="yhteydenotto" className={styles.formContainer}>
                <form
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="subject" value="Prospekti yhteydenotto Juhokoli.fi" />
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="contact" value="contact" />
                    <div className={styles.formControl}>
                        <label htmlFor="fullName">Nimi *</label>
                        <input
                            placeholder="Nimi *"
                            type="text"
                            name="fullName"
                            id="fullName"
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="tel">Puhelinnumero *</label>
                        <input
                            placeholder="Puhelinnumero *"
                            type="tel"
                            autoComplete="tel"
                            name="tel"
                            id="tel"
                            required
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email">Sähköposti *</label>
                        <input
                            placeholder="Sähköposti"
                            type="email"
                            autoComplete="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="message">Viesti</label>
                        <textarea
                            placeholder="Viesti"
                            name="message"
                            id="message"
                        />
                    </div>
                    <div className={styles.formControl}>
                        <button
                            type="submit"
                            className="btn">
                            {contact.CTA}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm