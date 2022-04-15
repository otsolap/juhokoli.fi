import Image from 'next/image'
import styles from '../../styles/Themes.module.css'

const ThemeBlock = ({ themes }) => {
    return (
        <>
            {themes.themes.map((theme, i) => {

                const bgStyle = []
                if (i % 2 === 0) {
                    bgStyle.push('bg-white')
                } else {
                    bgStyle.push('bg-grey')
                }

                return (
                    <section
                        key={i}
                        id={theme.title}
                        className={bgStyle}
                    >
                        <div className="container">
                            <div className={styles.imageContainer}>
                                <Image
                                    src={theme.image}
                                    alt={theme.title}
                                    width={390}
                                    height={220}
                                />
                            </div>
                            <div className="content">
                                <h2>{theme.title}</h2>
                                <p>{theme.description}</p>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default ThemeBlock