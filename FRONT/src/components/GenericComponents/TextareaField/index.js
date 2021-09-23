// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './textarea-field.scss';

// == Composant
const TextareaField = ({
  value,
  name,
  placeholder,
  handleChange,
  required,
}) => {
  const inputId = `textarea-field-${name}`;

  return (
    <div className={value.length > 0 ? 'textarea-field textarea-field--has-content' : 'textarea-field'}>
      <textarea
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        className="textarea-field__input"
        placeholder={placeholder}
        name={name}
        required={required}
      />

      <label
        htmlFor={inputId}
        className="textarea-field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

TextareaField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

// Valeurs par défaut pour les props
TextareaField.defaultProps = {
  value: '',
  required: false,
};

// == Export
export default TextareaField;
