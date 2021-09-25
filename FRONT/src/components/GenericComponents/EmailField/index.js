// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './email-field.scss';

// == Composant
const EmailField = ({
  value,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
}) => {
  const inputId = `email-field-${name}`;

  return (
    <div className={value.length > 0 ? 'email-field email-field--has-content' : 'email-field'}>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type="email"
        className="email-field__input"
        placeholder={placeholder}
        name={name}
        required={required}
      />

      <label
        htmlFor={inputId}
        className="email-field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

EmailField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
};

// Valeurs par défaut pour les props
EmailField.defaultProps = {
  value: '',
  required: false,
  autoComplete: false,
};

// == Export
export default EmailField;
