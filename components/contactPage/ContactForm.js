'use client'
import { useState } from 'react';
import styles from '@/styles/contact.module.css'

const ContactForm = ({ cta }) => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const contactSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <section id="yhteydenotto-lomake" className={styles.formSection}>
            <div className={styles.formContainer}>
                <form
                    name="contact"
                    method="POST"
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
                            {cta}
                        </button>
                    </div>
                    {status === 'ok' && (
                        <div>Viesti lähetetty eteenpäin!</div>
                    )}
                    {status === 'error' && (
                        <div>{error}</div>
                    )}

                </form>
            </div>
        </section>
    )
}

export default ContactForm