import FooterContent from '@content/site.json'
import Icons from '@content/site.json'
import styles from '../../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
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
        Twitter: { icon: faXTwitter, prefix: '' },  // Using XTwitter instead of Twitter
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
                aria-label={item.icon}
              />
            </a>
          </span>
        );
      });

    return (
        <footer id={styles.Footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={`desktop-only ${styles.footerDesktopLogoContainer}`}>
                    <Image
                        src={FooterContent.Footer.desktopLogoImage}
                        width={250}
                        height={150}
                        alt={FooterContent.Footer.desktopLogoAlt}
                    />
                </div>
                <div className={styles.footerSoMEContainer}>
                    {SoMe}
                </div>
            </div>
            <div className={styles.footerDetailsContainer}>
                <div className={styles.DetailsDesktopContainer}>
                    <p className={styles.detailsTxt}>&copy; {FooterContent.Footer.Owner}</p>
                    <Link href="/tietosuojaseloste" className={styles.detailsTxt}>{FooterContent.Footer.privacyPolicy}</Link>
                    <div className={styles.footerKultakammen}>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.kultakammen.fi">
                            <Image
                                src="/images/Kultakammen_white.png"
                                height={30}
                                width={30}
                                alt="Toteutuksen tehnyt Kultakammen.fi"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;