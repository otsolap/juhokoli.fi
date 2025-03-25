import '@/styles/globals.css'
import Layout from '@components/Layout'
import Navigation from '@components/navigation/Navigation'
import Footer from '@components/navigation/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MobileFooter from '@components/navigation/MobileFooter'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <MobileFooter />
    </Layout>
  )
}

export default MyApp
