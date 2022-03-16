import Image from 'next/image'

const Hero = ({ hero }) => {
    return (
        <section id="hero">
            <div className="image-container">
                <div className="desktop-only">
                    <Image
                        src={hero.DesktopHeroImage}
                        alt={hero.heroTitle}
                        width={150}
                        height={150}
                    />
                </div>
                <div className="mobile-only">
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        width={150}
                        height={150}
                    />
                </div>
                {hero.DisplayElectionNumber && (
                    <div className="number-wrapper">
                        <span>
                            {hero.ElectionNumber}
                        </span>
                    </div>
                )}
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