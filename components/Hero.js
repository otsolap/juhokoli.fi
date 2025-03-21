import styles from '@/styles/hero.module.css'
import Image from "next/image"

const Hero = ({ hero, alternativeStyles }) => {
    return (
        <div className={styles.hero + (alternativeStyles ? ` ${styles.alternativeStyle}` : '')}>
            <figure className={styles.imageWrapper}>
                <Image
                    src={hero.DesktopHeroImage}
                    alt={hero.heroTitle}
                    className={styles.heroImage}
                    quality={100}
                    fill
                    sizes="100vw" 
                    />
            </figure>
            <div className={styles.contentWrapper}>
                {hero.DisplayElectionNumber && (
                    <div className={styles.circleWrapper}>
                        <figure className={styles.circle}>
                            <div className={styles.circleTextWrapper}>
                                <span className={styles.circleText}>{hero.ElectionNumber}</span>
                            </div>
                        </figure>
                    </div>
                )}
                <div className={styles.textWrapper}>
                    {hero.HeroTitle && <h1 className={styles.title}>{hero.HeroTitle}</h1>}
                    {hero.HeroSubtitle && <h3 className={styles.subtitle}>{hero.HeroSubtitle}</h3>}
                    {hero.CTAText && (
                        <div className="buttonWrapper">
                            <a className={`btn ${styles.button}`} href={hero.CTALink}>
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