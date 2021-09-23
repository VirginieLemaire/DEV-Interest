import './home.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tag = ({ name, color }) => (
  <Link className="tag_link" to="">
    <div className="home__tags-content-wraper__tags-container__tag" style={{ background: color }}>
      {name}
    </div>
  </Link>
);

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

Tag.defaultProps = {
  name: "",
  color: '#7a7676',
};
export default Tag;
