import Image from 'next/image'
import Link from 'next/link'
import FooterContent from '@content/site.json'
import Icons from '@content/site.json'
import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/footer.module.css'

const Footer = () => {
    const SoMe = Icons.Footer.socialMedia.map((icons, i) => {
        return (
            <span className={styles.someIcons} key={i}>
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