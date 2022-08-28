import { useRouter } from 'next/router'
import styles from '../styles/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { scrollBtn } from '@utils/main'

const Hero = ({ hero }) => {
    const router = useRouter()

    return (
        <section id={styles.hero}>
            {hero.DesktopHeroImage && (
                <div className={`desktop-only ${styles.imageContainer}`}>
                    <Image
                        src={hero.DesktopHeroImage}
                        alt={hero.heroTitle}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center'
                        quality={100}
                    />
                </div>
            )}
            {hero.MobileHeroImage && (
                <div className={`mobile-only ${styles.imageContainer}`}>
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center center'
                        quality={100}
                    />
                </div>
            )}
            <div className={`${router.pathname === '/' ? `${styles.contentContainer}` : `${styles.contentAltContainer}`}`}>
                <div className={`${router.pathname === '/' ? `${styles.content}` : `${styles.contentAlt}`}`}>
                    {hero.HeroTitle && (
                        <h1>{hero.HeroTitle}</h1>
                    )}
                    {hero.HeroSubtitle && (
                        <h3>{hero.HeroSubtitle}</h3>
                    )}
                    {hero.CTA && hero.CTALink === 'yhteydenotto' && (
                        <div className="buttonWrapper">
                            <button className={`btn ${styles.heroBTN}`} scrollto={hero.CTALink} onClick={scrollBtn}>{hero.CTA}</button >
                        </div>
                    )}
                    {hero.CTA && hero.CTALink != 'yhteydenotto' && (
                        <div className="buttonWrapper">
                            <Link href={hero.CTALink}>
                                <a className={`btn ${styles.heroBTN}`}>{hero.CTA}</a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Hero