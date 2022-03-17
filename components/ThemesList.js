import ThemeItem from "./ThemeItem";

const ThemesList = ({ themes, }) => {
    return (
        <section id="themesList">
            <div className="container">
                <header className="section-header">
                    {themes.sectionTitle}
                </header>
                <div className="themes-container">
                    <div className="themes-container">
                        <ThemeItem
                            themes={themes.themes}
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ThemesList;