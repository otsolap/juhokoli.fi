import styles from '@/styles/hero.module.css'
import Image from "next/image"

const HeroAlt = ({ hero }) => {
    return (
        <div className={styles.hero}>
            <div className={styles.altImageContainer}>
                <figure className={`${styles.imageDesktopWrapper} desktop-only`} >
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
                </figure>
                <figure
                     className={`${styles.imageMobileWrapper} mobile-only`}>
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
                </figure>
                <div className={styles.altContainer}>
                    {hero.HeroTitle && <h1 className={styles.title}>{hero.HeroTitle}</h1>}
                </div>
            </div>
        </div>
    );
}

export default HeroAlt