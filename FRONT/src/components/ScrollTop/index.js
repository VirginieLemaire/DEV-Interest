import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  // gestion du scroll top au changement de page
  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    },
    [location.pathname],
  );

  return null;
};

export default ScrollTop;
