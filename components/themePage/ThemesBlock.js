import Image from "next/image"
import styles from '@/styles/themes-block.module.css'

const ThemesBlock = ({ themes }) => {
    return (
        <>
            {themes.themes.map((theme, i) => {
                return (
                    <div key={i} className={`${ i % 2 === 0 ? '' : styles.alternativeStyle} `}>
                        <section
                            id={theme.title}
                            className={styles.block}
                        >
                            <div className={styles.wrapper}>
                                <h2 className={styles.mobileTitle}>{theme.title}</h2>
                                <div className={styles.content}>
                                    <figure className={styles.imageWrapper}>
                                        <Image
                                            src={theme.image}
                                            alt={theme.title}
                                            height={500}
                                            width={668}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            quality={100}
                                            className={styles.image} 
                                        />
                                    </figure>
                                    <div className={styles.textWrapper}>
                                        <h2 className={styles.title}>{theme.title}</h2>
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

export default ThemesBlock