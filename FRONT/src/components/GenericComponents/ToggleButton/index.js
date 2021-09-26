import PropTypes from 'prop-types';

import './toggle-button.scss';

const ToggleButton = ({ isOn, handleToggle }) => (
  <div className="react-switch-checkbox__container">
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id="react-switch-new"
      type="checkbox"
    />
    <label
      className="react-switch-label"
      htmlFor="react-switch-new"
    >
      <span className="react-switch-button">{isOn ? 'D' : 'L'}</span>
    </label>
  </div>
);

ToggleButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleButton;
