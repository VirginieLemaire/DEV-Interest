import { Link } from 'react-router-dom';
import {
  faFacebookF, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { darkMode } = useSelector((state) => state.displayOptions);
  return (
    <div className="footer">
      <div className={darkMode ? 'footer__social-links footer__social-links--dark' : 'footer__social-links'}>
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
      <div className={darkMode ? 'footer__compulsory-links footer__compulsory-links--dark' : 'footer__compulsory-links'}>
        <Link className="footer_link" to="/about">A propos</Link>
        <Link className="footer_link" to="/terms-of-use">Conditions d'utilisation</Link>
        <Link className="footer_link" to="/legal">Mentions légales</Link>
      </div>
    </div>
  );
};
export default Footer;
