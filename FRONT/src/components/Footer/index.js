import { Link } from 'react-router-dom';
import {
  faFacebookF, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <div className="footer__compulsory-links">
      <Link className="footer_link" to="/about">A propos</Link>
      <Link className="footer_link" to="/terms-of-use">Conditions d'utilisation</Link>
      <Link className="footer_link" to="/legal">Mentions légales</Link>
    </div>
  </div>
);

export default Footer;
