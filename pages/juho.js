import Meta from "@components/Meta"
import HeroAlt from "@components/HeroAlt"
import Faq from "@components/aboutMePage/Faq"

const aboutMe = ({ meta, hero, faq }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="Juho">
                <HeroAlt hero={hero} />
                <Faq faq={faq} />
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
                title: aboutMe.meta.title,
                description: aboutMe.meta.description,
                url: aboutMe.meta.url,
                image: aboutMe.meta.image
            },
            hero: {
                heroTitle: aboutMe.Hero.HeroTitle,
                HeroSubtitle: aboutMe.Hero.HeroSubtitle,
                DesktopHeroImage: aboutMe.Hero.DesktopHeroImage,
                MobileHeroImage: aboutMe.Hero.MobileHeroImage,
            },
            faq: {
                faqProfilePicture: aboutMe.FAQSection.faqProfilePicture,
                faqProfilePictureAlt: aboutMe.FAQSection.faqProfilePictureAlt,
                faqs: aboutMe.FAQSection.faqs
            },
        }
    }
}