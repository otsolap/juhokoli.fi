import { useEffect } from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import ThemesList from '@components/indexPage/ThemesList'
import ReferenceList from '@components/indexPage/ReferenceList'
import Newsletter from '@components/Newsletter'
import Script from 'next/script'

const Index = ({ meta, hero, themes, references, newsletter }) => {

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Meta
        meta={meta}
      />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <main id="home">
        <Hero
          hero={hero}
        />
        <ThemesList themes={themes} />
        <ReferenceList references={references} />
        <Newsletter newsletter={newsletter} />
      </main>
    </>
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
        HeroTitle: home.Hero.HeroTitle,
        HeroSubtitle: home.Hero.HeroSubtitle,
        DesktopHeroImage: home.Hero.DesktopHeroImage,
        MobileHeroImage: home.Hero.MobileHeroImage,
        CTA: home.Hero.CTA,
        CTALink: home.Hero.CTALink,
        DisplayElectionNumber: home.Hero.DisplayElectionNumber,
        ElectionNumber: home.Hero.ElectionNumber,
      },
      themes: {
        sectionTitle: home.ThemeSection.SectionTitle,
        themes: home.ThemeSection.themes
      },
      references: {
        sectionTitle: home.ReferenceSection.SectionTitle,
        referees: home.ReferenceSection.referees,
        heart: home.ReferenceSection.heart,
        heartAlt: home.ReferenceSection.heartAlt,
      },
      newsletter: {
        backgroundImage: site.newsletter.backgroundImage,
        logo: site.newsletter.logo,
        title: site.newsletter.title,
        description: site.newsletter.description,
        cta: site.newsletter.cta,
      }
    },
  }
}