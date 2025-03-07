import styles from '../../styles/themes.module.css'
import ThemeItem from "./ThemeItem";

const ThemesList = ({ themes, }) => {
    return (
        <section id="indexThemesListSection" className={styles.themesList}>
            <div className="container">
                <header className="sectionHeader">
                    <h2>{themes.sectionTitle}</h2>
                </header>
                <div className={styles.themesContainer}>
                    <ThemeItem
                        themes={themes.themes}
                    />
                </div>
            </div>
        </section>
    )

}

export default ThemesList;