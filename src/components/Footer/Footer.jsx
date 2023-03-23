import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
        
        <div className="footer__links">
			<a href="https://www.facebook.com/lemonpiero" className="footer__links__item" aria-label="lien vers facebook" target="_blank" rel="noreferrer" title="Facebook"><FontAwesomeIcon icon={ faFacebook } className="footer__icon"/></a>
			<a href="https://www.instagram.com/pf.creations13/" className="footer__links__item" aria-label="lien vers instagram" target="_blank" rel="noreferrer" title="Instagram"><FontAwesomeIcon icon={ faInstagram } className="footer__icon"/></a>
			<a href="https://wa.me/33651853051" className="footer__links__item" aria-label="lien vers whatsapp" target="_blank" rel="noreferrer" title="Whatsapp"><FontAwesomeIcon icon={ faWhatsapp } className="footer__icon"/></a>
			<a href="https://www.linkedin.com/in/pierre-fasce-9a5a001a0/" className="footer__links__item" aria-label="lien vers linkedin" target="_blank" rel="noreferrer" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} className="footer__icon"/></a>
		</div>

        <p className="footer__copyright">@PF WebDeveloper - 2023</p>
    </footer>
    )
}

export default Footer;