import { useEffect } from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import ThemeBlock from "@components/ThemeBlock"
import ReferenceList from '@components/landingPage/ReferenceList'
import Faq from "@components/landingPage/Faq"
import ContactDetails from "@components/ContactDetails"
import ContactForm from "@components/ContactForm"

import Script from 'next/script'

const Index = ({ meta, hero, themes, references, faq, contact }) => {

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
        <ThemeBlock themes={themes} />
        <ReferenceList references={references} />
        <Faq faq={faq} />
        <div class="ContactContainer">
          <ContactDetails contact={contact} />
          <ContactForm contact={contact} />
        </div>
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
        themes: home.ThemeSection.themes
      },
      references: {
        sectionTitle: home.ReferenceSection.SectionTitle,
        referees: home.ReferenceSection.referees,
        heart: home.ReferenceSection.heart,
        heartAlt: home.ReferenceSection.heartAlt,
      },
      faq: {
        faqProfilePicture: home.FAQSection.faqProfilePicture,
        faqProfilePictureAlt: home.FAQSection.faqProfilePictureAlt,
        faqs: home.FAQSection.faqs
      },
      contact: {
        SectionTitle: site.ContactSection.SectionTitle,
        SectionDescription: site.ContactSection.SectionDescription,
        cta: site.ContactSection.cta,
        socialMedia: site.ContactSection.socialMedia
      }
    },
  }
}