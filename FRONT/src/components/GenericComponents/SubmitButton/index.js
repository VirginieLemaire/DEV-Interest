import PropTypes from 'prop-types';

import './submit-button.scss';

// color (true or false) : permet d'utiliser soit la couleur principale ou en false un gris clair
// styling ("full" or "outline"): permet d'avoir le fond du bouton rempli ou juste les contours
// submit (true or false): si tu indique submit, le bouton sera submit
// sinon par défaut sans le précisé, le bouton est de type button
const SubmitButton = ({
  color, styling, content, fontSize,
}) => (
  <button
    className={color ? `submit-button color ${styling} ${fontSize}` : `submit-button no-color ${styling} ${fontSize}`}
    type="submit"
  >
    {content}
  </button>
);

SubmitButton.propTypes = {
  styling: PropTypes.string.isRequired,
  color: PropTypes.bool,
  content: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

SubmitButton.defaultProps = {
  color: false,
  fontSize: 'normal',
};

// == Export
export default SubmitButton;
