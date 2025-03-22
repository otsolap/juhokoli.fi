import styles from '@/styles/themes-list.module.css'
import Image from "next/image"

const ThemesList = ({ themes, }) => {
    return (
        <section className={styles.themesList}>
            {themes.sectionTitle && 
                <header className={styles.header}>
                    {themes.sectionTitle && <h2 className={styles.title}>{themes.sectionTitle}</h2>}
                </header>
            }
            <div className={styles.wrapper}>
                {themes.themes.map((theme, i) => (
                    <div className={styles.item} id={`theme-item-${i}`} key={i}>
                        <figure className={styles.imageContainer}>
                            <Image
                                width={390}
                                height={220}
                                alt={theme.title}
                                src={theme.image}
                                quality={100}
                                sizes="100vw"
                                className={styles.image} 
                            />
                        </figure>
                        <div className={styles.content}>
                            {theme.title && <h3 className={styles.title}>{theme.title}</h3>}
                            {theme.description && <p className={styles.description}>{theme.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default ThemesList;