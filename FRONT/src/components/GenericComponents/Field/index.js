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
}) => {
  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
        required={required}
        minLength={minlength}
        maxLength={maxlength}
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
  autoComplete: PropTypes.bool,
  minlength: PropTypes.string,
  maxlength: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  autoComplete: false,
  minlength: '',
  maxlength: '',
};

// == Export
export default Field;
