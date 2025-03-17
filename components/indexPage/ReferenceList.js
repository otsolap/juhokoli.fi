import Image from "next/image"
import styles from '@/styles/references.module.css'

const ReferenceList = ({ references, }) => {
    return (
        <div className="alt-bg">
            <section id={styles.referenceSection} className="alt-bg">
                    <header className="sectionHeader">
                        <h2>{references.sectionTitle}</h2>
                    </header>
                    <div className={styles.referenceItemContainer}>
                        <div className={styles.reference}>
                            {references.referees.map((reference, i) => (
                                <div className={styles.referenceItem} id={`refence-item-${i}`} key={i}>
                                    <div className={styles.imageContainer}>
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
                                    </div>
                                    <div className={`${styles.referenceBuble}  ${i % 2 === 0 ? `${styles.even}` : `${styles.odd}`}`}>
                                        <p>{reference.reference}</p>
                                        <h4 className={styles.referee}>{reference.referee}</h4>
                                        <p className={styles.refereeWorkTitle}>{reference.refereeTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </div>

    )

}

export default ReferenceList;