import Image from 'next/image'
import Logo from '../content/site.json'
import Icons from '../content/site.json'
import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const SoMe = Icons.Footer.socialMedia.map((icons, i) => {
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
        <footer>Footer Built by me!
            <div style={{ backgroundColor: 'blue' }}>
                <Image
                    src={Logo.Footer.logo}
                    width={50}
                    height={50}
                    alt="Kokoomus Turku logo"
                />
            </div>
            <p>Testing FA Icons:</p>
            {SoMe}
        </footer>
    )
}

export default Footer;