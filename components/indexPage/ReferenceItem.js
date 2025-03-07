import Image from "next/image"
import styles from '../../styles/references.module.css'

const ReferenceItem = ({ referees }) => {
    return (
        <div className="reference">
            {referees.map((reference, i) => (
                <div className={styles.referenceItem} id={`refence-item-${i}`} key={i}>
                    <div className={styles.imageContainer}>
                        <Image
                            width={160}
                            height={160}
                            quality={100}
                            alt={reference.referee}
                            src={reference.image}
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
    );
}

export default ReferenceItem