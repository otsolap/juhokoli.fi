import Image from 'next/image'
import styles from '../../styles/References.module.css'

const ReferenceItem = ({ referees, heart, heartAlt }) => {
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
                        />
                    </div>
                    <div className={styles.referenceBuble}>
                        <p>{reference.reference}</p>
                        <h4 className={styles.referee}>{reference.referee}</h4>
                        <h6 className={styles.refereeWorkTitle}>{reference.refereeTitle}
                            <span className={styles.heart}>
                                <Image
                                    src={heart}
                                    alt={heartAlt}
                                    quality={100}
                                    width={30}
                                    height={30}
                                />
                            </span>
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReferenceItem