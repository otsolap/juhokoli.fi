import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faBook, faUserTie, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/footer.module.css'

const MobileFooter = () => {
    const { Navigation } = Links

    return (
        <footer className={styles.mobileFooter}>
            <div className={styles.mobileMenuWrapper}>
                <Link href="/">
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.homeTitle} icon={faHouse} />
                    <span className={styles.mobileLinkText}>{Navigation.homeTitle}</span>
                </Link>
                <Link href="/teemat">
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.themesTitle} icon={faBook} />
                    <span className={styles.mobileLinkText}>{Navigation.themesTitle}</span>
                </Link>
                <Link href="/juho">
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.aboutMeTitle} icon={faUserTie} />
                    <span className={styles.mobileLinkText}>{Navigation.aboutMeTitle}</span>
                </Link>
                <Link href="/yhteydenotto">
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.contactTitle} icon={faEnvelopeOpenText} />
                    <span className={styles.mobileLinkText}>{Navigation.contactTitle}</span>
                </Link>
            </div>
        </footer>
    );
}

export default MobileFooter;