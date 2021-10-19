// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './password-field.scss';

// == Composant
const PasswordField = ({
  value,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
  minlength,
}) => {
  const inputId = `password-field-${name}`;

  return (
    <div className={value.length > 0 ? 'password-field password-field--has-content' : 'password-field'}>
      <input
        autoComplete={autoComplete}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type="password"
        className="password-field__input"
        placeholder={placeholder}
        name={name}
        required={required}
        minLength={minlength}
      />

      <label
        htmlFor={inputId}
        className="password-field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  minlength: PropTypes.string,
};

// Valeurs par défaut pour les props
PasswordField.defaultProps = {
  value: '',
  required: false,
  autoComplete: 'off',
  minlength: '4',
};

// == Export
export default PasswordField;
