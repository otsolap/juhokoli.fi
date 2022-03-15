import Image from 'next/image'

const ReferenceItem = ({ referees }) => {
    return (
        <div className="reference">
            {referees.map((reference, i) => (
                <div id={`refence-item-${i}`} key={i}>
                    <div className="image-container">
                        <Image
                            width={50}
                            height={50}
                            alt={reference.referee}
                            src={reference.image}
                        />
                    </div>
                    <div className="reference-bubble">
                        <p>{reference.reference}</p>
                        <h2>{reference.referee}</h2>
                        <h4>{reference.refereeTitle}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReferenceItem