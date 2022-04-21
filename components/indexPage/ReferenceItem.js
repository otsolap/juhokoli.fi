import Image from 'next/image'
import styles from '../../styles/References.module.css'

const ReferenceItem = ({ referees }) => {
    return (
        <div className="reference">
            {referees.map((reference, i) => (
                <div id={`refence-item-${i}`} key={i}>
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
                    <div className={styles.referenceBuble}>
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