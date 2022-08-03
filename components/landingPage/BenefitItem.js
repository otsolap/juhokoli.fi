import Image from 'next/image'
import styles from '../../styles/Benefits.module.scss'

const BenefitItem = ({ benefits }) => {
    return (
        <div className="benefit">
            {benefits.map((benefit, i) => (
                <div className={styles.benefitItem} id={`benefit-item-${i}`} key={i}>
                    {benefit.image && (
                        <div className={styles.imageContainer}>
                            <Image
                                alt={benefit.title}
                                src={benefit.image}
                                width={160}
                                height={160}
                                quality={100}
                                layout="responsive"
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                    )}
                    <div className={styles.contentContainer}>
                        <h4 className={styles.title}>{benefit.title}</h4>
                        <p className={styles.valueProposition}>{benefit.valueProposition}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BenefitItem