import styles from '../styles/Home.module.css'
import Hero from '@components/Hero'
import Meta from '@components/Meta'
import Layout from '../components/Layout'

const Index = ({ meta, hero, ...props }) => {
  return (
    <Layout>
      <Meta
        meta={meta}
      />
      <div>
        <Hero
          hero={hero}
        />
      </div>
    </Layout>)
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
      }
    },
  }
}