import { useRouter } from 'next/router'
import styles from '../styles/Hero.module.scss'
import Image from 'next/image'

const Hero = ({ hero }) => {
    const router = useRouter()
    console.log(router.pathname)

    return (
        <section id={styles.hero}>
            <div className="desktop-only">
                {hero.DesktopHeroImage && (
                    <div style={{ position: 'absolute', width: '100%', overflow: 'hidden', inset: '0', }}>
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
            </div>
            {hero.MobileHeroImage && (
                <div
                    style={{ position: 'relative', width: '100%', height: '270px', overflow: 'hidden' }}
                    className="mobile-only">
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
                    <h1>{hero.HeroTitle}</h1>
                    <h3>{hero.HeroSubtitle}</h3>
                    {hero.CTA && (
                        <div className="buttonWrapper">
                            <a className={`btn ${styles.heroBTN}`}
                                href={hero.CTALink}
                            >
                                {hero.CTA}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Hero