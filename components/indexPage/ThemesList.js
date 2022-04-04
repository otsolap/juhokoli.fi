import styles from '../../styles/Themes.module.css'
import ThemeItem from "./ThemeItem";

const ThemesList = ({ themes, }) => {
    return (
        <section id="themesList">
            <div className="container">
                <header className={styles.sectionHeader}>
                    <h2>{themes.sectionTitle}</h2>
                </header>
                <div className="themes-container">
                    <ThemeItem
                        themes={themes.themes}
                    />
                </div>
            </div>
        </section>
    )

}

export default ThemesList;