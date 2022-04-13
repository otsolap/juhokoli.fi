import Image from 'next/image'
import Logo from '@content/site.json'
import Icons from '@content/site.json'
import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
        <footer id={styles.Footer}>
            <div>
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
        </footer>
    )
}

export default Footer;