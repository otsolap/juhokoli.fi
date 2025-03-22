import styles from '@/styles/contact.module.css'

const ContactForm = ({ contact }) => {
    const contactSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id="yhteydenotto-lomake" className={styles.formSection}>
            <div className={styles.formContainer}>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={contactSubmit}
                >
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
                        <label htmlFor="email">Sähköposti *</label>
                        <input
                            placeholder="Sähköposti *"
                            type="email"
                            autoComplete="email"
                            name="email"
                            id="email"
                            required
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
                            className="button">
                            {contact.cta}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm