import React from 'react'
import Meta from '@components/Meta'
import Link from 'next/link'

const PrivacyPolicyPage = ({ meta, cookies }) => {
    const cookiesList = cookies.cookieList.map((cookie, i) => {
        return (
            <article className="cookieCard" key={i}>
                <header>
                    <strong>Evästeen nimi:</strong>
                    {cookie.name}
                </header>
                <div className="cookieCardBody">
                    <strong>Evästeen käyttötarkoitus:</strong>
                    {cookie.description}
                </div>
                <div className="cookieCardFooter">
                    <strong>Evästeen tyyppi, säilytysaika:</strong>
                    {cookie.type}
                </div>
            </article>
        )
    })

    const linkList = cookies.linkList.map((link, i) => {
        return (
            <Link href={link.link} key={i}>
                <a className="externalLink" target="_blank" rel="noopener noreferrer">{link.title}</a>
            </Link>
        )
    })


    return (
        <>
            <Meta
                meta={meta}
            />
            <main id="cookies">
                <div className="container">
                    <header className="sectionHeader">
                        <h1>{cookies.sectionTitle}</h1>
                        <p>{cookies.sectionDescription}</p>
                    </header>
                    <div className="content">
                        <h2>{cookies.cookieListTitle}</h2>
                        <div className="cookieWrapper">
                            {cookiesList}
                        </div>
                        <h3>{cookies.moreInformationTitle}</h3>
                        <div className="externalLinkWrapper">
                            {linkList}
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
                cookieListTitle: site.Cookies.cookieListTitle,
                cookieList: site.Cookies.cookieList,
                moreInformationTitle: site.Cookies.moreInformationTitle,
                linkList: site.Cookies.linkList
            }
        },
    }
}