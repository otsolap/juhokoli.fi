import Image from 'next/image'
import styles from '../styles/Newsletter.module.css'

const Newsletter = ({ newsletter }) => {

    const registerNewsletter = async e => {
        e.preventDefault()

        const res = await fetch(
            'https://hooks.zapier.com/hooks/catch/123456/abcde',
            {
                body: JSON.stringify({
                    email: e.target.email.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        // result.email => 'otso@kultakammen.fi'

    }


    return (
        <section id="newsletter">
            <div className={styles.newsletterContent}>
                <Image
                    src={newsletter.backgroundImage}
                    layout="fill"
                    objectFit='cover'
                    quality={100}
                    objectPosition="center"
                    alt={newsletter.title}
                    className={styles.newsletterBGImg}
                />
                <div className={styles.content}>
                    <Image
                        src={newsletter.logo}
                        alt={newsletter.title}
                        height={175}
                        width={165}
                        quality={100}
                    />
                    <h2>{newsletter.title}</h2>
                    <p>{newsletter.description}</p>
                    <div className={styles.formContainer}>
                        <form className="newsletterForm" onSubmit={registerNewsletter}>
                            <input
                                placeholder="Sähköposti* "
                                id="newsletterEmail"
                                name="newsletterEmail"
                                type="email"
                                autoComplete="email"
                                required
                            />
                            <button
                                className={`btn`}
                                type="submit">
                                {newsletter.cta}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
