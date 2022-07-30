import React from "react";
import { useRouter } from "next/router";
import styles from '../styles/Contact.module.scss'

const ContactForm = ({ contact }) => {
    const router = useRouter();
    const confirmationScreenVisible =
        router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;


    const ConfirmationMessage = (
        <>
            <p>
                Thank you for submitting this form. Someone should get back to you
                within 24-48 hours.
            </p>
        </>
    );

    const theContactForm = (
        <form
            name="contact-form"
            action="/form.html?success=true"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <input type="hidden" name="contact-form" value="contact-form" />
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
                <label htmlFor="email">Sähköposti</label>
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
    )


    return (
        <section id={styles.formSection}>
            <div id="yhteydenotto" className={styles.formContainer}>
                {formVisible ? theContactForm : ConfirmationMessage}
            </div>
        </section>
    )
}

export default ContactForm