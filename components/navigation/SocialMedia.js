import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram, faXTwitter, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styles from '@/styles/social-media.module.css' 


const socialMediaMappings = {
  Instagram: { icon: faInstagram, prefix: '' },
  Twitter: { icon: faXTwitter, prefix: '' },
  LinkedIn: { icon: faLinkedin, prefix: '' },
  Email: { icon: faEnvelope, prefix: 'mailto:' },
  Phone: { icon: faPhone, prefix: 'tel:' },
  WhatsApp: { icon: faWhatsapp, prefix: 'https://wa.me/' },
  Facebook: { icon: faFacebook, prefix: '' }
};

const SocialMedia = ({ some, showText = false, alternativeStyles = false}) => {
  if (!some || !Array.isArray(some)) return null

  return (
    <>
      {some.map((item, index) => {
        const mapping = socialMediaMappings[item.icon]
        
        if (!mapping) return null

        return (
          <span key={index} className={styles.itemContainer}>
            <a
              href={`${mapping.prefix}${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              >
              <FontAwesomeIcon
                className={`${styles.icon} ${alternativeStyles ? styles.iconAlternativeStyles : ''}`}
                icon={mapping.icon}
                aria-label={item.description || item.icon}
                />
              {showText && item.description && (
                <span className={styles.text}>{item.description}</span>
              )}
            </a>
          </span>
        )
      })}
    </>
  )
}

export default SocialMedia