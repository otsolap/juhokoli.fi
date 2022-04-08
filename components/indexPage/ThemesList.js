import styles from '../../styles/Themes.module.css'
import ThemeItem from "./ThemeItem";

const ThemesList = ({ themes, }) => {
    return (
        <section id={styles.themesList}>
            <div className="container">
                <header className="sectionHeader">
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