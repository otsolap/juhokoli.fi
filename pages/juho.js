import Meta from "@components/Meta"
import Hero from "@components/Hero"
import Accordion from "@components/aboutMePage/Accordion"

const aboutMe = ({ meta, hero, faq }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="Juho" className="container">
                <Hero hero={hero} />
                <Accordion faq={faq} />
            </main>
        </>
    )
}

export default aboutMe

export async function getStaticProps() {
    const aboutMe = await import(`../content/aboutMe.json`)
    return {
        props: {
            meta: {
                title: aboutMe.meta.title ?? '',
                description: aboutMe.meta.description ?? '',
                url: aboutMe.meta.url ?? '',
                image: aboutMe.meta.image ?? '',
            },
            hero: {
                HeroTitle: aboutMe.Hero.HeroTitle ?? '',
                HeroSubtitle: aboutMe.Hero.HeroSubtitle ?? '',
                DesktopHeroImage: aboutMe.Hero.DesktopHeroImage ?? null,
            },
            faq: {
                faqProfilePicture: aboutMe.FAQSection.faqProfilePicture ?? null,
                faqProfilePictureAlt: aboutMe.FAQSection.faqProfilePictureAlt ?? '',
                faqs: aboutMe.FAQSection.faqs ?? [],
            },
        }
    }
}