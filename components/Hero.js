import Image from 'next/image'

const Hero = ({ hero }) => {
    return (
        <section className="hero">
            <div className="image-container">
                <Image
                    src={hero.DesktopHeroImage}
                    alt={hero.heroTitle}
                    width={55}
                    height={150} />
                <div className="container">
                    <div className="content">
                        <h1>{hero.heroTitle}</h1>
                        <h3>{hero.heroSubtitle}</h3>
                        <div className="button-wrapper">
                            <a className="button"
                                href={hero.CTALink}
                            >
                                {hero.CTA}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero