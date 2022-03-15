import styles from '../styles/Home.module.css'
import Meta from '@components/Meta'
import Layout from '../components/Layout'

const Index = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Meta
        title="Juho Koli"
        description="description, this is it."
        canonical="https://www.kultakammen.fi"
      />
      <h1 className="title">{title}</h1>
      <p className="description">
        {description}
      </p>
      <main>
        Posts go here!
      </main>
    </Layout>)
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../content/home.json`)

  return {
    props: {
      title: configData.title,
      description: configData.description,
    },
  }
}