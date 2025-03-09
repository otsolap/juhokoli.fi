import styles from '../styles/hero-alt.module.css'
import Image from "next/image"

const HeroAlt = ({ hero }) => {
    return (
        <section id="hero">
            <div className={styles.altImageContainer}>
                <div className="desktop-only">
                    <div style={{ position: 'relative', width: '100%', height: '658px', overflow: 'hidden' }}>
                        <Image
                            src={hero.DesktopHeroImage}
                            alt={hero.heroTitle}
                            quality={100}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center"
                            }} />
                    </div>
                </div>
                <div
                    style={{ position: 'relative', width: '100%', height: '390px', overflow: 'hidden' }}
                    className="mobile-only">
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }} />
                </div>
                <div className={styles.altContainer}>
                    <h1>{hero.HeroTitle}</h1>
                </div>
            </div>
        </section >
    );
}

export default HeroAlt