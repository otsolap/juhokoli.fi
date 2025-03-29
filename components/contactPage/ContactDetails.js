import styles from '@/styles/contact.module.css'
import SocialMedia from '@components/navigation/SocialMedia'

const ContactDetails = ({ contact, some }) => {
    return (
        <section className={styles.detailsSection}>
            <div className={styles.detailsWrapper}>
                {contact.title && <h1>{contact.title}</h1>}
                {contact.description && <p>{contact.description}</p>}
                <div className={styles.someLinksWrapper}>
                    <SocialMedia some={some} showText={true} />
                </div>
            </div>
        </section>
    )
}

export default ContactDetails