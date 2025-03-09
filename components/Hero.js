import styles from '@/styles/hero.module.css'
import Image from "next/image"

const Hero = ({ hero }) => {
    return (
        <div id="hero">
            <figure className={`${styles.imageDesktopWrapper} desktop-only`} >
                <Image
                    src={hero.DesktopHeroImage}
                    alt={hero.heroTitle}
                    className={styles.heroImage}
                    quality={100}
                    fill
                    sizes="100vw" 
                    />
            </figure>
            <figure
                className={`${styles.imageMobileWrapper} mobile-only`}>
                <Image
                    src={hero.MobileHeroImage}
                    alt={hero.heroTitle}
                    className={styles.heroImage}
                    quality={100}
                    fill
                    sizes="100vw"
                />
            </figure>
            {hero.DisplayElectionNumber && (
                <div className={styles.circleWrapper}>
                    <figure className={styles.circle}>
                        <div className={styles.textWrapper}>
                            <span className={styles.circleText}>{hero.ElectionNumber}</span>
                        </div>
                    </figure>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>{hero.HeroTitle}</h1>
                    <h3>{hero.HeroSubtitle}</h3>
                    {hero.CTAText && (
                        <div className="buttonWrapper">
                            <a className={`btn ${styles.heroBTN}`}
                                href={hero.CTALink}
                            >
                                {hero.CTAText}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero