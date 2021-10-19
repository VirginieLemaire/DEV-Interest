// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './url-field.scss';

// == Composant
const UrlField = ({
  value,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
  readOnly,

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
        type="url"
        className="url-field__input"
        placeholder={placeholder}
        name={name}
        required={required}
        readOnly={readOnly}
      />

      <label
        htmlFor={inputId}
        className="url-field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

UrlField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
  readOnly: PropTypes.bool,
};

// Valeurs par défaut pour les props
UrlField.defaultProps = {
  value: '',
  required: false,
  autoComplete: false,
  readOnly: false,
};

// == Export
export default UrlField;
