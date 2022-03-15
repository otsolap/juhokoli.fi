import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import Themes from '@components/Themes'
import ReferenceList from '@components/ReferenceList'
import Newsletter from '@components/Newsletter'


const Index = ({ meta, hero, themes, references, newsletter }) => {
  return (
    <div id="home">
      <Meta
        meta={meta}
      />
      <main>
        <Hero
          hero={hero}
        />
        <Themes themes={themes} />
        <ReferenceList references={references} />
        <Newsletter newsletter={newsletter} />
      </main>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const home = await import(`../content/home.json`)
  const site = await import(`../content/site.json`)

  return {
    props: {
      meta: {
        title: home.meta.title,
        description: home.meta.description,
        url: home.meta.url,
        image: home.meta.image
      },
      hero: {
        heroTitle: home.Hero.HeroTitle,
        HeroSubtitle: home.Hero.HeroSubtitle,
        DesktopHeroImage: home.Hero.DesktopHeroImage,
        MobileHeroImage: home.Hero.MobileHeroImage,
        CTA: home.Hero.CTA,
        CtaLink: home.Hero.CtaLink,
        ElectionNumber: home.Hero.ElectionNumber,
      },
      themes: {
        sectionTitle: home.ThemeSection.SectionTitle,
        themes: home.ThemeSection.themes
      },
      references: {
        sectionTitle: home.ReferenceSection.SectionTitle,
        referees: home.ReferenceSection.referees
      },
      newsletter: {
        backgroundImage: site.newsletter.backgroundImage,
        title: site.newsletter.title,
        description: site.newsletter.description,
        cta: site.newsletter.cta,
      }
    },
  }
}