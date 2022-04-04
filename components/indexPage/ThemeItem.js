import styles from '../../styles/Themes.module.css'
import Image from 'next/image'

const ThemeItem = ({ themes }) => {
    return (
        <>
            {themes.map((theme, i) => (
                <div id={`theme-item-${i}`} key={i}>
                    <div className={styles.imageContainer}>
                        <Image
                            width={390}
                            height={220}
                            alt={theme.title}
                            src={theme.image}
                        />
                    </div>
                    <div className="container">
                        <div className={styles.content}>
                            <h2>{theme.title}</h2>
                            <h4>{theme.description}</h4>
                            <div className="buttonWrapper">
                                <a className="btn"
                                    href={theme.link}
                                >
                                    {theme.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ThemeItem