import Image from "next/image"
import styles from '@/styles/references.module.css'

const References = ({ references, }) => {
    return (
        <div className="alt-bg">
            <section className={styles.references}>
                {references.sectionTitle &&
                    <header className={styles.header}>
                        <h2>{references.sectionTitle}</h2>
                    </header>
                }
                <div className={styles.wrapper}>
                    {references.referees.map((reference, i) => (
                        <article className={styles.item} id={`refence-item-${i}`} key={i}>
                            <figure className={styles.imageContainer}>
                                <Image
                                    width={160}
                                    height={160}
                                    quality={100}
                                    alt={reference.referee}
                                    src={reference.image}
                                    className={styles.image}
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }} />
                            </figure>
                            <div className={`${styles.content}  ${i % 2 === 0 ? `${styles.even}` : `${styles.odd}`}`}>
                                <p className={styles.description}>{reference.reference}</p>
                                <h3 className={styles.title}>{reference.referee}</h3>
                                <p className={styles.subtitle}>{reference.refereeTitle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>

    )

}

export default References;