import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const HeroAlt = ({ hero }) => {
    return (
        <section id="hero">
            <div className={styles.altImageContainer}>
                <div className="desktop-only">
                    <div style={{ position: 'relative', width: '100%', height: '658px' }}>
                        <Image
                            src={hero.DesktopHeroImage}
                            alt={hero.heroTitle}
                            layout="fill"
                            objectFit='cover'
                            objectPosition='center'
                            quality={100}
                        />
                    </div>
                </div>
                <div className={`mobile-only ${styles.mobileHero}`}>
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        height={270}
                        width={390}
                        quality={100}
                    />
                </div>
                <div className={styles.altContainer}>
                    <h1>{hero.HeroTitle}</h1>
                </div>
            </div>
        </section >
    )
}

export default HeroAlt