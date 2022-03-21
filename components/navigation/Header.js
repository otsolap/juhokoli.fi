import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '@content/site.json'
import styles from '../../styles/Header.module.css'


const Header = () => {
    const router = useRouter()
    const { Header } = Navigation
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.logo}>{Header.logo}</h1>
                    <div className={`mobile-only ${styles.mobileLogo}`}>
                        <Image
                            src={Header.mobileImageLogo}
                            alt={Header.mobileImageAlt}
                            height={50}
                            width={60}
                        />
                    </div>
                </div>
                <div className="desktop-only">
                    <nav className={styles.nav}>
                        <Link href="/">
                            <a className={router.pathname == '/' ? styles.active : ''}
                            >{Header.homeTitle}</a>
                        </Link>
                        <Link href="/teemat">
                            <a className={router.pathname == '/teemat' ? styles.active : ''}
                            >{Header.themesTitle}</a>
                        </Link>
                        <Link href="/juho">
                            <a className={router.pathname == '/juho' ? styles.active : ''}
                            >{Header.aboutMeTitle}</a>
                        </Link>
                        <Link href="/yhteydenotto">
                            <a className={router.pathname == '/yhteydenotto' ? styles.active : ''}
                            >{Header.contactTitle}</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header