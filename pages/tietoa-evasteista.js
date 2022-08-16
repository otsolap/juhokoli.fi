import React from 'react'
import Meta from '@components/Meta'
import Link from 'next/link'

const PrivacyPolicyPage = ({ meta, cookies }) => {
    return (
        <>
            <Meta
                meta={meta}
            />
            <main id="cookies">
                <div class="container">
                    <header className="sectionHeader">
                        <h1>{cookies.sectionTitle}</h1>
                        <p>{cookies.sectionDescription}</p>
                    </header>
                    <div className="content">
                        <h2>{cookies.moreInformationTitle}</h2>
                        <div className="externalLinkWrapper">
                            <Link href={cookies.linkToWikipedia}><a className="externalLink">{cookies.wikipediaTitle}</a></Link>
                            <Link href={cookies.linkToTraficom}><a className="externalLink">{cookies.traficomTitle}</a></Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PrivacyPolicyPage

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
            cookies: {
                sectionTitle: site.Cookies.SectionTitle,
                sectionDescription: site.Cookies.SectionDescription,
                moreInformationTitle: site.Cookies.moreInformationTitle,
                wikipediaTitle: site.Cookies.wikipediaTitle,
                linkToWikipedia: site.Cookies.linkToWikipedia,
                traficomTitle: site.Cookies.traficomTitle,
                linkToTraficom: site.Cookies.linkToTraficom
            }
        },
    }
}