import Image from 'next/image'

const Newsletter = ({ newsletter }) => {
    return (
        <section id="newsletter">
            <div className="container newsletter-content">
                <Image
                    src={newsletter.backgroundImage}
                    layout="fill"
                    objectFit='cover'
                    quality={100}
                    objectPosition="center"
                    alt={newsletter.title}
                    className="newsletter-bg-img"
                />
                <div className="content">
                    <h2>{newsletter.title}</h2>
                    <p>{newsletter.description}</p>
                    <form className="newsletterForm" action="http://www.acme.com/register" method="POST">
                        <label for="name">Sähköposti</label>
                        <input id="email" type="email" autocomplete="email" required />
                        <button classname="btn" type="submit">Tilaa uutiskirje</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
