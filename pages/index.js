import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Layout from '../components/Layout'

const Index = ({ meta, hero, ...props }) => {
  console.log(hero)
  return (
    <Layout>
      <Meta
        title={meta.title}
        description={meta.description}
        canonical={meta.url}
        image={meta.image}
      />
      <h1 className="title"></h1>
      <p className="description">

      </p>
      <main>
        Posts go here!
      </main>
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