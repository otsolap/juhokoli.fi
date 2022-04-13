import Link from 'next/link'
import { faHouse, faBook, faUserTie, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Footer.module.css'

const MobileFooter = () => {
    return (
        <footer className={`mobile-only ${styles.MobileFooterBar}`}>
            <div className={styles.mobileMenuWrapper}>
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

export default MobileFooter;