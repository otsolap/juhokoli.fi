import styles from '../styles/Contact.module.scss'

const ContactForm = ({ contact }) => {
    return (
        <section id={styles.formSection}>
            <div id="yhteydenotto" className={styles.formContainer}>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="subject" value="Prospekti yhteydenotto Juhokoli.fi" />
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="contact" value="contact" />
                    <div className={styles.formControl}>
                        <label htmlFor="fullname">Nimi *</label>
                        <input
                            placeholder="Nimi *"
                            type="text"
                            name="fullname"
                            id="fullname"
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
                            placeholder="Sähköposti *"
                            type="email"
                            autoComplete="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="message">Viesti *</label>
                        <textarea
                            placeholder="Viesti *"
                            name="message"
                            id="message"
                            required
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