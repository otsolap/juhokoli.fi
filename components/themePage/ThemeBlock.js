import Image from "next/image"
import styles from '@/styles/themes.module.css'

const ThemeBlock = ({ themes }) => {
    return (
        <>
            {themes.themes.map((theme, i) => {
                return (
                    <div className={`${i % 2 === 0 ? `` : `${styles.odd}`} `}>
                        <section
                            key={i}
                            id={theme.title}
                            className={styles.block}
                        >
                            <div className={styles.blockWrapper}>
                                <h2 className="mobile-only">{theme.title}</h2>
                                <div className={styles.blockContent}>
                                    <figure className={styles.blockImageContainer}>
                                        <Image
                                            src={theme.image}
                                            alt={theme.title}
                                            width={390}
                                            height={220}
                                            quality={100}
                                            sizes="100vw"
                                            className={styles.image} 
                                        />
                                    </figure>
                                    <div className={styles.blockTextContainer}>
                                        <h2 className={`${styles.title} desktop-only`}>{theme.title}</h2>
                                        <p className={styles.blockDescription}>{theme.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                );
            })}
        </>
    );
}

export default ThemeBlock