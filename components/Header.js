import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../content/site.json'

export default function Header() {
    const { Header } = Navigation
    return (
        <>
            <header className="header">
                <h1>{Header.logo}</h1>
                <div className="mobile-only">
                    <Image
                        src={Header.mobileImageLogo}
                        alt={Header.mobileImageAlt}
                        width={25}
                        height={25}
                    />
                </div>
                <div className="desktop-only">
                    <nav className="nav">
                        <Link href="/">
                            <a>{Header.homeTitle}</a>
                        </Link>
                        <Link href="/teemat">
                            <a>{Header.themesTitle}</a>
                        </Link>
                        <Link href="/juho">
                            <a>{Header.aboutMeTitle}</a>
                        </Link>
                        <Link href="/yhteydenotto">
                            <a>{Header.contactTitle}</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}