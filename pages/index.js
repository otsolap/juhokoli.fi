import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import Themes from '@components/Themes'
import ReferenceList from '@components/ReferenceList'


const Index = ({ meta, hero, themes, references }) => {
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
      </main>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const cmsData = await import(`../content/home.json`)

  return {
    props: {
      meta: {
        title: cmsData.meta.title,
        description: cmsData.meta.description,
        url: cmsData.meta.url,
        image: cmsData.meta.image
      },
      hero: {
        heroTitle: cmsData.Hero.HeroTitle,
        HeroSubtitle: cmsData.Hero.HeroSubtitle,
        DesktopHeroImage: cmsData.Hero.DesktopHeroImage,
        MobileHeroImage: cmsData.Hero.MobileHeroImage,
        CTA: cmsData.Hero.CTA,
        CtaLink: cmsData.Hero.CtaLink,
        ElectionNumber: cmsData.Hero.ElectionNumber,
      },
      themes: {
        sectionTitle: cmsData.ThemeSection.SectionTitle,
        themes: cmsData.ThemeSection.themes
      },
      references: {
        sectionTitle: cmsData.ReferenceSection.SectionTitle,
        referees: cmsData.ReferenceSection.referees
      }
    },
  }
}