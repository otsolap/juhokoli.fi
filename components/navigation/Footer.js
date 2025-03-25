import FooterContent from '@content/site.json'
import Icons from '@content/site.json'
import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import { 
    faInstagram,
    faXTwitter,
    faLinkedin,
    faWhatsapp 
  } from "@fortawesome/free-brands-svg-icons";
  
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    const socialMediaMappings = {
        Instagram: { icon: faInstagram, prefix: '' },
        Twitter: { icon: faXTwitter, prefix: '' }, 
        LinkedIn: { icon: faLinkedin, prefix: '' },
        Email: { icon: faEnvelope, prefix: 'mailto:' },
        Phone: { icon: faPhone, prefix: 'tel:' },
        WhatsApp: { icon: faWhatsapp, prefix: 'https://wa.me/' }
      };
      
      const SoMe = Icons.Footer.socialMedia.map((item, i) => {
        const mapping = socialMediaMappings[item.icon];
        
        // Skip if the icon type isn't in our mappings
        if (!mapping) return null;
      
        const href = `${mapping.prefix}${item.url}`;
      
        return (
          <span className={styles.someIcons} key={i}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                className={styles.mobileIcon} 
                icon={mapping.icon} 
                aria-label={item.description || item.icon}
              />
            </a>
          </span>
        );
      });

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.desktopLogo}>
                    <Image
                        src={FooterContent.Footer.desktopLogoImage}
                        width={250}
                        height={150}
                        alt={FooterContent.Footer.desktopLogoAlt}
                    />
                </div>
                <div className={styles.someContainer}>
                  {FooterContent.Footer.socialMediaTitle &&
                    <header className={styles.someTitle}>
                      <h3>{FooterContent.Footer.socialMediaTitle}</h3>
                    </header>
                  }
                  <div className={styles.iconsWrapper}>
                    {SoMe}
                  </div>
                </div>
            </div>
            <div className={styles.subFooter}>
                <div className={styles.subFooterWrapper}>
                    <p className={styles.detailsTxt}>&copy; {FooterContent.Footer.Owner}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;