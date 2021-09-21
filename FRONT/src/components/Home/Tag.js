import './home.scss';
import PropTypes from 'prop-types';

const Tag = ({ name, color }) => (
  <div className="home__tags-container__tag" style={{ background: color }}>
    {name}
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Tag.defaultProps = {
  color: '#058EA7',
};
export default Tag;
