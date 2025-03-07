import styles from '../../styles/themes.module.css'
import Image from "next/legacy/image"

const ThemeItem = ({ themes }) => {
    return (
        <>
            {themes.map((theme, i) => (
                <div className={styles.themeItem} id={`theme-item-${i}`} key={i}>
                    <div className={styles.imageContainer}>
                        <Image
                            width={390}
                            height={220}
                            alt={theme.title}
                            src={theme.image}
                            layout="responsive"
                            quality={100}
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className={styles.content}>
                        <h2>{theme.title}</h2>
                        <p>{theme.description}</p>
                        <div className="buttonWrapper">
                            <a className="btn"
                                href={theme.link}
                            >
                                {theme.cta}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ThemeItem