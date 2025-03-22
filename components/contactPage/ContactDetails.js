import { faLinkedin, faInstagram, faXTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '@/styles/contact.module.css'

const ContactDetails = ({ contact }) => {
    const SoMe = contact.socialMedia.map((icons, i) => {
        return (
            <span className={styles.someIconContainer} key={i}>
                {icons.icon === 'Email' ? (
                    <a className={styles.someLink} href={`mailto:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.someIcon} aria-label="Email" icon={faEnvelope} />
                        <span className={styles.someText}>{icons.url}</span>
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Phone' ? (
                    <a className={styles.someLink} href={`tel:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.someIcon} aria-label="Phone" icon={faPhone} />
                        <span className={styles.someText}>{icons.url}</span>
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Instagram' ? (
                    <a className={styles.someLink} href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.someIcon} aria-label="Instagram profile" icon={faInstagram} />
                        <span className={styles.someText}>{icons.description}</span>
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Twitter' ? (
                    <a className={styles.someLink} href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.someIcon} aria-label="Twitter profile" icon={faXTwitter} />
                        <span className={styles.someText}>{icons.description}</span>
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'LinkedIn' ? (
                    <a className={styles.someLink} href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.someIcon} aria-label="LinkedIn profile" icon={faLinkedin} />
                        <span className={styles.someText}>{icons.description}</span>
                    </a>
                ) : (
                    ""
                )}
            </span>
        )
    })

    return (
        <section className={styles.detailsSection}>
            <div className={styles.container}>
                <h1>{contact.SectionTitle}</h1>
                <p>{contact.SectionDescription}</p>
                <div className={styles.someContent}>
                    {SoMe}
                </div>
            </div>
        </section>
    )
}

export default ContactDetails