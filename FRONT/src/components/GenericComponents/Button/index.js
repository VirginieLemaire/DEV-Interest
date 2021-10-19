import PropTypes from 'prop-types';

import './button.scss';

// color (true or false) : permet d'utiliser soit la couleur principale ou en false un gris clair
// styling ("full" or "outline"): permet d'avoir le fond du bouton rempli ou juste les contours
// submit (true or false): si tu indique submit, le bouton sera submit
// sinon par défaut sans le précisé, le bouton est de type button
const Button = ({
  color, styling, submit, handleClick, content, fontSize,
}) => (
  <button
    className={color ? `button color ${styling} ${fontSize}` : `button no-color ${styling} ${fontSize}`}
    type={submit ? 'submit' : 'button'}
    onClick={handleClick}
  >
    {content}
  </button>
);

Button.propTypes = {
  styling: PropTypes.string.isRequired,
  color: PropTypes.bool,
  submit: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

Button.defaultProps = {
  color: false,
  submit: false,
  fontSize: 'normal',
};

// == Export
export default Button;
