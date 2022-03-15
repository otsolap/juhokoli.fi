import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Layout from '../components/Layout'
import Image from 'next/image'

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
      <div>
        <div className="img-container">
          <Image
            src={hero.DesktopHeroImage}
            alt={hero.heroTitle}
            width={55}
            height={150} />
        </div>
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