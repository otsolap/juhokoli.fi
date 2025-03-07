import HeroAlt from "@components/HeroAlt"
import Meta from "@components/Meta"
import ThemeBlock from "@components/themePage/ThemeBlock"
import Newsletter from "@components/Newsletter"

const Themes = ({ meta, hero, themes, newsletter }) => {
    return (
        <>
            <Meta
                meta={meta}
            />
            <main id="themes">
                <HeroAlt hero={hero} />
                <ThemeBlock
                    themes={themes}
                />
                <Newsletter newsletter={newsletter} />
            </main>
        </>
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
                HeroTitle: themes.Hero.HeroTitle,
                DesktopHeroImage: themes.Hero.DesktopHeroImage,
                MobileHeroImage: themes.Hero.MobileHeroImage,
            },
            themes: {
                themes: themes.ThemeSection.themes
            },
            newsletter: {
                backgroundImage: site.newsletter.backgroundImage,
                logo: site.newsletter.logo,
                title: site.newsletter.title,
                description: site.newsletter.description,
                cta: site.newsletter.cta,
            }
        }
    }
}