import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const HeroAlt = ({ hero }) => {
    return (
        <section id="hero">
            <div className="image-container">
                <div className="desktop-only">
                    <Image
                        src={hero.DesktopHeroImage}
                        alt={hero.heroTitle}
                        width={150}
                        height={150}
                        quality={100}
                    />
                </div>
                <div className={`mobile-only ${styles.mobileHero}`}>
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        height={270}
                        width={390}
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