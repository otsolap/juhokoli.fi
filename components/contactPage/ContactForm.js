const ContactForm = () => {
    return (
        <section id="contactForm">

            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="contact" value="contact" />
                <p>
                    <input type="text" name="fullname" id="fullname" />
                    <label htmlFor="fullname">
                        Nimi:
                    </label>
                </p>
                <p>
                    <input type="text" name="email" id="email" />
                    <label htmlFor="email">
                        Sähköposti:
                    </label>
                </p>
                <p>
                    <label htmlFor="message">
                        Viesti:
                    </label>
                    <textarea name="message" id="message" />
                </p>
                <p>
                    <button type="submit" className="btn">Lähetä</button>
                </p>
            </form>
        </section>
    )
}

export default ContactForm