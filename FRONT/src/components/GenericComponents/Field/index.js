// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
  minlength,
  maxlength,
  readOnly,
  className,
}) => {
  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        autoComplete={autoComplete}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        required={required}
        minLength={minlength}
        maxLength={maxlength}
        readOnly={readOnly}
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

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  minlength: PropTypes.string,
  maxlength: PropTypes.string,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  autoComplete: 'off',
  minlength: '',
  maxlength: '',
  readOnly: false,
  className: 'field__input',
};

// == Export
export default Field;
