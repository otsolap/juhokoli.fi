import '../styles/globals.css'
import Layout from '@components/Layout'
import Header from '@components/navigation/Header'
import Footer from '@components/navigation/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default MyApp
