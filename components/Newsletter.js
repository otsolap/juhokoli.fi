import Image from 'next/image'

const Newsletter = ({ newsletter }) => {
    return (
        <section id="newsletter">
            <div className="background-image-container">
                <Image
                    src={newsletter.backgroundImage}
                    width={50}
                    height={50}
                    alt={newsletter.title}
                />
            </div>
            <div className="container">
                <h2>{newsletter.title}</h2>
                <div className="content">
                    {newsletter.description}
                </div>
            </div>
        </section>
    )
}

export default Newsletter
