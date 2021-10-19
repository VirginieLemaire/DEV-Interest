import logoDevLovePper from '../../../assets/LogoDEVLovePPER.svg';

import './app-loader.scss';

const AppLoader = () => (
  <div className="app-loading">
    <div className="app-loading-container">
      <div className="app-loading-heart">
        <img src={logoDevLovePper} alt="DEVLovePPER Logo" />
      </div>
    </div>
  </div>
);

export default AppLoader;
