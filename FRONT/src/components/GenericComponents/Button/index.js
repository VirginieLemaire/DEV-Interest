import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  color, styling, submit, handleClick, content,
}) => (
  <button className={color ? `button color ${styling}` : `button no-color ${styling}`} type={submit ? 'submit' : 'button'} onClick={handleClick}>{content}</button>
);

Button.propTypes = {
  styling: PropTypes.string.isRequired,
  color: PropTypes.bool,
  submit: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: false,
  submit: false,
};

// == Export
export default Button;
