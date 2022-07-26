import Meta from "@components/Meta"
import HeroAlt from "@components/HeroAlt"
import ThemeBlock from "@components/ThemeBlock"
import ContactDetails from "@components/ContactDetails"
import ContactForm from "@components/ContactForm"

const aboutMe = ({ meta, hero, themes, contact }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="Juho">
                <HeroAlt hero={hero} />
                <ThemeBlock
                    themes={themes}
                />
                <div className="container ContactContainer">
                    <ContactDetails contact={contact} />
                    <ContactForm id="yhteydenotto" contact={contact} />
                </div>
            </main>
        </>
    )
}

export default aboutMe

export async function getStaticProps() {
    const aboutMe = await import(`../content/aboutMe.json`)
    const site = await import(`../content/site.json`)

    return {
        props: {
            meta: {
                title: aboutMe.meta.title,
                description: aboutMe.meta.description,
                url: aboutMe.meta.url,
                image: aboutMe.meta.image
            },
            hero: {
                HeroTitle: aboutMe.Hero.HeroTitle,
                HeroSubtitle: aboutMe.Hero.HeroSubtitle,
                DesktopHeroImage: aboutMe.Hero.DesktopHeroImage,
                MobileHeroImage: aboutMe.Hero.MobileHeroImage,
            },
            themes: {
                themes: aboutMe.ThemeSection.themes
            },
            contact: {
                SectionTitle: site.ContactSection.SectionTitle,
                SectionDescription: site.ContactSection.SectionDescription,
                CTA: site.ContactSection.CTA,
                socialMedia: site.ContactSection.socialMedia
            },
        }
    }
}