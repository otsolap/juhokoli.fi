import Hero from "@components/Hero"
import Meta from "@components/Meta"
import ThemesBlock from "@components/themePage/ThemesBlock"
import Newsletter from "@components/Newsletter"

const Themes = ({ meta, hero, themes, newsletter }) => {
    return (
        <>
            <Meta
                meta={meta}
            />
            <main id="themes" className="container">
                <Hero hero={hero} alternativeStyles={true} />
                <ThemesBlock themes={themes} />
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
                title: themes.meta.title ?? '',
                description: themes.meta.description ?? '',
                url: themes.meta.url,
                image: themes.meta.image
            },
            hero: {
                HeroTitle: themes.Hero.HeroTitle ?? '',
                HeroImage: themes.Hero.HeroImage ?? null 
            },
            themes: {
                themes: themes.ThemeSection.themes ?? []
            },
            newsletter: {
                backgroundImage: site.newsletter.backgroundImage ?? null,
                logo: site.newsletter.logo ?? null,
                title: site.newsletter.title ?? '',
                description: site.newsletter.description ?? '',
                cta: site.newsletter.cta ?? '',
            }
        }
    }
}