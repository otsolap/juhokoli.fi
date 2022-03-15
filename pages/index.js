import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Layout from '../components/Layout'

const Index = ({ meta, ...props }) => {
  console.log(meta)
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
    },
  }
}