import styles from '@/styles/contact.module.css'
import SocialMedia from '../../components/navigation/socialMedia'

const ContactDetails = ({ contact, some }) => {
    return (
        <section className={styles.detailsSection}>
            <div className={styles.container}>
                {contact.title && <h1>{contact.title}</h1>}
                {contact.description && <p>{contact.description}</p>}
                <div className={styles.someContent}>
                    <SocialMedia some={some} showText={true} />
                </div>
            </div>
        </section>
    )
}

export default ContactDetails