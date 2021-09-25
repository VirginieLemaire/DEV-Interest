// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './url-field.scss';

// == Composant
const UrlField = ({
  value,
  type,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
  pattern,
}) => {
  const inputId = `url-field-${name}`;

  return (
    <div className={value.length > 0 ? 'url-field url-field--has-content' : 'url-field'}>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="url-field__input"
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        required={required}
      />

      <label
        htmlFor={inputId}
        className="field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

UrlField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
  pattern: PropTypes.string,
};

// Valeurs par défaut pour les props
UrlField.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  autoComplete: false,
};

// == Export
export default UrlField;
