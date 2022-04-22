import Image from 'next/image'
import styles from '../../styles/References.module.css'

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
                            layout="responsive"
                        />
                    </div>
                    <div className={`${styles.referenceBuble}  ${i % 2 === 0 ? `${styles.even}` : `${styles.odd}`}`}>
                        <p>{reference.reference}</p>
                        <h4 className={styles.referee}>{reference.referee}</h4>
                        <h6 className={styles.refereeWorkTitle}>{reference.refereeTitle}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReferenceItem