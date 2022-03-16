import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>Footer Built by me!
            <p>Testing FA Icons:</p>
            <FontAwesomeIcon aria-label="LinkedIn profile" icon={faInstagram} />
            <FontAwesomeIcon aria-label="LinkedIn profile" icon={faTwitter} />
            <FontAwesomeIcon aria-label="LinkedIn profile" icon={faLinkedin} />
            <FontAwesomeIcon aria-label="LinkedIn profile" icon={faEnvelope} />
            <FontAwesomeIcon aria-label="LinkedIn profile" icon={faPhone} />
        </footer>
    )
}

export default Footer;