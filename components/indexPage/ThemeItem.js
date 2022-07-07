import styles from '../../styles/Themes.module.scss'
import Image from 'next/image'

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