import Layout from '../components/Layout'

const About = ({ title, subtitle, profession, featuredImage, salesPitch, CTA, ...props }) => {
    return (
        <>
            <Layout pageTitle={`${title} | About`} description={title}>
                <h1 className="title">Welcome to my blog!</h1>

                <p className="description">
                    {subtitle}
                    {profession}
                    {featuredImage}
                    {salesPitch}
                    {CTA}
                </p>

                <p>
                    I am a very exciting person. I know this because I'm following a very exciting tutorial, and a not-exciting person wouldn't do that.
                </p>
            </Layout>
        </>
    )
}

export default About

export async function getStaticProps() {
    const portfolio = await import(`../content/siteconfig.json`)

    return {
        props: {
            title: portfolio.aboutMe.title,
            subtitle: portfolio.aboutMe.subtitle,
            profession: portfolio.aboutMe.profession,
            featuredImage: portfolio.aboutMe.featuredImage,
            salesPitch: portfolio.aboutMe.salesPitch,
            CTA: portfolio.aboutMe.CTA,
        },
    }
}