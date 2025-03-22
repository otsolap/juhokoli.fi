import { useEffect } from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import ThemesList from '@components/indexPage/ThemesList'
import References from '@components/indexPage/References'
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
      <main id="home" className="container">
        <Hero
          hero={hero}
        />
        <ThemesList themes={themes} />
        <References references={references} />
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
        title: home.meta.title ?? null,
        description: home.meta.description ?? null,
        url: home.meta.url ?? null,
        image: home.meta.image ?? null,
      },
      hero: {
        HeroTitle: home.Hero.HeroTitle ?? '',
        HeroSubtitle: home.Hero.HeroSubtitle ?? '',
        HeroImage: home.Hero.HeroImage ?? null,
        CTAText: home.Hero.CTAText ?? '',
        CTALink: home.Hero.CTALink ?? '',
        DisplayElectionNumber: home.Hero.DisplayElectionNumber ?? false,
        ElectionNumber: home.Hero.ElectionNumber ?? '',
      },
      themes: {
        sectionTitle: home.ThemeSection.SectionTitle ?? '',
        themes: home.ThemeSection.themes ?? [],
      },
      references: {
        sectionTitle: home.ReferenceSection.SectionTitle ?? '',
        referees: home.ReferenceSection.referees ?? [],
        heart: home.ReferenceSection.heart ?? null,
        heartAlt: home.ReferenceSection.heartAlt ?? '',
      },
      newsletter: {
        backgroundImage: site.newsletter.backgroundImage ?? null,
        logo: site.newsletter.logo ?? null,
        title: site.newsletter.title ?? '',
        description: site.newsletter.description ?? '',
        cta: site.newsletter.cta ?? '',
      }
    },
  }
}