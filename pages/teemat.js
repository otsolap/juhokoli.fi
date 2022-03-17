import Hero from "@components/Hero"
import Meta from "@components/Meta"
import ThemeBlock from "@components/ThemeBlock"
import Newsletter from "@components/Newsletter"

const Themes = ({ meta, hero, themes, newsletter }) => {
    return (
        <div id="themes">
            <Meta
                meta={meta}
            />
            <main>
                Themes Page.
                <Hero
                    hero={hero}
                />
                <ThemeBlock
                    themes={themes}
                />
                <Newsletter newsletter={newsletter} />
            </main>
        </div>
    )
}

export default Themes

export async function getStaticProps() {
    const themes = await import(`../content/themes.json`)
    const site = await import(`../content/site.json`)

    return {
        props: {
            meta: {
                title: themes.meta.title,
                description: themes.meta.description,
                url: themes.meta.url,
                image: themes.meta.image
            },
            hero: {
                heroTitle: themes.Hero.HeroTitle,
                HeroSubtitle: themes.Hero.HeroSubtitle,
                DesktopHeroImage: themes.Hero.DesktopHeroImage,
                MobileHeroImage: themes.Hero.MobileHeroImage,
            },
            themes: {
                themes: themes.ThemeSection.themes
            },
            newsletter: {
                backgroundImage: site.newsletter.backgroundImage,
                title: site.newsletter.title,
                description: site.newsletter.description,
                cta: site.newsletter.cta,
            }
        }
    }
}