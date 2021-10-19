import { useSelector } from 'react-redux';

import logoDevLovePper from '../../../assets/LogoDEVLovePPER.svg';

import './loader.scss';

const Loader = () => {
  const { loading } = useSelector((state) => state.displayOptions);

  if (!loading) return null;

  return (
    <div className="loader">
      <div className="search-loading-container">
        <div className="search-loading-heart">
          <img src={logoDevLovePper} alt="DEVLovePPER Logo" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
