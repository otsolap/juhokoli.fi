import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Links from '@content/site.json'
import styles from '../../styles/Header.module.scss'


const Header = () => {
    const router = useRouter()
    const { Navigation } = Links
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link href="/"><a className={styles.noDecoration}>
                        <h1 className={styles.logo}>{Navigation.logo}</h1>
                    </a>
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
                        <Link href="/">
                            <a className={router.pathname == '/' ? styles.active : ''}
                            >{Navigation.homeTitle}</a>
                        </Link>
                        <Link href="/teemat">
                            <a className={router.pathname == '/teemat' ? styles.active : ''}
                            >{Navigation.themesTitle}</a>
                        </Link>
                        <Link href="/juho">
                            <a className={router.pathname == '/juho' ? styles.active : ''}
                            >{Navigation.aboutMeTitle}</a>
                        </Link>
                        <Link href="/yhteydenotto">
                            <a className={router.pathname == '/yhteydenotto' ? styles.active : ''}
                            >{Navigation.contactTitle}</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header