import Image from "next/legacy/image"
import styles from '../../styles/themes.module.css'

const ThemeBlock = ({ themes }) => {
    return (
        <>
            {themes.themes.map((theme, i) => {
                return (
                    <section
                        key={i}
                        id={theme.title}
                        className={`${styles.themeBlockSection} ${i % 2 === 0 ? `` : `${styles.odd}`}`}
                    >
                        <div className="container">
                            <h2 className="mobile-only">{theme.title}</h2>
                            <div className={`${styles.blockContent}`}>
                                <div className={styles.themeBlockImageContainer}>
                                    <Image
                                        src={theme.image}
                                        alt={theme.title}
                                        width={390}
                                        height={220}
                                        layout="responsive"
                                        objectFit='cover'
                                        objectPosition='center'
                                        quality={100}
                                    />
                                </div>
                                <div className={styles.themeDescriptionContainer}>
                                    <h2 className="desktop-only">{theme.title}</h2>
                                    <p>{theme.description}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default ThemeBlock