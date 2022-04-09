import Image from 'next/image'

const Newsletter = ({ newsletter }) => {
    return (
        <section id="newsletter">
            <div className="background-image-container">
                <Image
                    src={newsletter.backgroundImage}
                    /*             layout="fill" */
                    height={500}
                    width={150}
                    objectFit='cover'
                    quality={100}
                    objectPosition="center"
                    alt={newsletter.title}
                    className="newsletter-bg-img"
                />
            </div>
            <div className="container">
                <h2>{newsletter.title}</h2>
                <div className="content">
                    <p>{newsletter.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
