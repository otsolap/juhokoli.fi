import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Links from '@content/site.json'
import styles from '@/styles/navigation.module.css'


const Navigation = () => {
    const router = useRouter()
    const { Navigation } = Links
    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.logoContainer}>
                        <Link href="/" className={styles.logo} >
                            {Navigation.logo}
                        </Link>
                        <div className={`mobile-only ${styles.mobileLogo}`}>
                            <Image
                                src={Navigation.mobileImageLogo}
                                alt={Navigation.mobileImageAlt}
                                height={80}
                                width={60}
                                quality={100}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                    </div>
                    <nav className={styles.nav}>
                        <Link
                            href="/"
                            className={router.pathname == '/' ? styles.active : ''}
                            >
                            {Navigation.homeTitle}
                        </Link>
                        <Link
                            href="/teemat"
                            className={router.pathname == '/teemat' ? styles.active : ''}
                            >
                            {Navigation.themesTitle}
                        </Link>
                        <Link
                            href="/juho"
                            className={router.pathname == '/juho' ? styles.active : ''}
                            >
                            {Navigation.aboutMeTitle}
                        </Link>
                        <Link
                            href="/yhteydenotto"
                            className={router.pathname == '/yhteydenotto' ? styles.active : ''}
                            >
                            {Navigation.contactTitle}
                        </Link>
                    </nav>
                </div>

            </header>
        </>
    );
}

export default Navigation