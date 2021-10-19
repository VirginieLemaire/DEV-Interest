import './tag.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tag = ({ name, color }) => (
  <Link className="tag-link" to="">
    <div className="tag" style={{ background: color }}>
      {name}
    </div>
  </Link>
);

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

Tag.defaultProps = {
  name: '',
  color: '#7a7676',
};
export default Tag;
