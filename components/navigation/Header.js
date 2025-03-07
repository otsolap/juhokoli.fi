import Image from "next/legacy/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Links from '@content/site.json'
import styles from '../../styles/header.module.css'


const Header = () => {
    const router = useRouter()
    const { Navigation } = Links
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.noDecoration}>
                        <h1 className={styles.logo}>{Navigation.logo}</h1>

                    </Link>
                    <div className={`mobile-only ${styles.mobileLogo}`}>
                        <Image
                            src={Navigation.mobileImageLogo}
                            alt={Navigation.mobileImageAlt}
                            height={50}
                            width={60}
                            quality={100}
                        />
                    </div>
                </div>
                <div className={`desktop-only ${styles.desktopLinks}`}>
                    <nav className={styles.nav}>
                        <Link href="/" className={router.pathname == '/' ? styles.active : ''}>
                            {Navigation.homeTitle}
                        </Link>
                        <Link
                            href="/teemat"
                            className={router.pathname == '/teemat' ? styles.active : ''}>
                            {Navigation.themesTitle}
                        </Link>
                        <Link href="/juho" className={router.pathname == '/juho' ? styles.active : ''}>
                            {Navigation.aboutMeTitle}
                        </Link>
                        <Link
                            href="/yhteydenotto"
                            className={router.pathname == '/yhteydenotto' ? styles.active : ''}>
                            {Navigation.contactTitle}
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header