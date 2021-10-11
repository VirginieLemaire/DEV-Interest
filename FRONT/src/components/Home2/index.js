import HomeLP from './HomeLP';
import HomeCards from '../HomeCards';

import './home2.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCardsHome } from '../../action/cardsHome';

const Home2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardsHome());
  }, []);
  return (
    <div className="home2">
      <HomeLP />
      <HomeCards />
    </div>
  );
};
export default Home2;