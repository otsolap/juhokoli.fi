import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetails = ({ contact }) => {
    const SoMe = contact.socialMedia.map((icons, i) => {
        return (
            <span className="some-icons" key={i}>
                {icons.icon === 'Instagram' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Instagram profile" icon={faInstagram} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Twitter' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Twitter profile" icon={faTwitter} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'LinkedIn' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="LinkedIn profile" icon={faLinkedin} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Email' ? (
                    <a href={`mailto:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Email" icon={faEnvelope} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Phone' ? (
                    <a href={`tel:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Phone" icon={faPhone} />
                    </a>
                ) : (
                    ""
                )}
            </span>
        )
    })


    return (
        <section>
            <div className="container">
                <h1>{contact.SectionTitle}</h1>
                <p>{contact.SectionDescription}</p>
                <div className="content">
                    {SoMe}
                </div>
            </div>
        </section>
    )
}

export default ContactDetails