import Image from 'next/image'
import Logo from '@content/site.json'
import Icons from '@content/site.json'
import Link from 'next/link'
import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faHouse, faBook, faUserTie, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    const SoMe = Icons.Footer.socialMedia.map((icons, i) => {
        return (
            <span className="some-icons" key={i}>
                {icons.icon === 'Instagram' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Instagram profiili" icon={faInstagram} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Twitter' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Twitter profiili" icon={faTwitter} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'LinkedIn' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="LinkedIn profiili" icon={faLinkedin} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Email' ? (
                    <a href={`mailto:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Sähköposti" icon={faEnvelope} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Phone' ? (
                    <a href={`tel:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Puhelin" icon={faPhone} />
                    </a>
                ) : (
                    ""
                )}
            </span>
        )
    })

    return (
        <footer className={styles.FooterBar}>
            <div className="desktop-only">
                <div style={{ backgroundColor: 'blue' }}>
                    <Image
                        src={Logo.Footer.desktopLogoImage}
                        width={50}
                        height={50}
                        alt={Logo.Footer.desktopLogoAlt}
                    />
                </div>
                <p>Testing FA Icons:</p>
                {SoMe}
            </div>
            <div className={`mobile-only ${styles.mobileMenuWrapper}`}>
                <Link href="/"><a>
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label="Etusivu" icon={faHouse} />
                    <span className={styles.mobileLinkText}>Etusivu</span></a>
                </Link>
                <Link href="/teemat">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label="Vaaliteemat" icon={faBook} />
                        <span className={styles.mobileLinkText}>Vaaliteemat</span></a>
                </Link>
                <Link href="/koli">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label="Kolista" icon={faUserTie} />
                        <span className={styles.mobileLinkText}>Koli</span></a>
                </Link>
                <Link href="/yhteydenotto">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label="Yhteydenotto" icon={faEnvelopeOpenText} />
                        <span className={styles.mobileLinkText}>Yhteydenotto</span></a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;