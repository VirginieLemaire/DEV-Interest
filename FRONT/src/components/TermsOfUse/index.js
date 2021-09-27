import { NavHashLink } from 'react-router-hash-link';

import './terms-of-use.scss';

const TermsOfUse = () => (
  <div className="terms-of-use">
    Terms of use
    <NavHashLink
      to="#with-hash-fragment"
      activeClassName="selected"
      activeStyle={{ color: 'red' }}
    >Link to Hash Fragment
    </NavHashLink>
  </div>
);

export default TermsOfUse;
