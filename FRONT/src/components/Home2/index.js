import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomeLP from './HomeLP';
import HomeCards from '../HomeCards';

import './home2.scss';

import { fetchCardsHome } from '../../action/cardsHome';
import { getUserWithToken } from '../../action/userCurrent';

const Home2 = () => {
  const dispatch = useDispatch();
  //focntion qui va se déclencher à chaque changement de state
  useEffect(() => {
    dispatch(fetchCardsHome());
    dispatch(getUserWithToken());
  }, []);//uniquement au 1er chargement de la page

  return (
    <div className="home2">
      <HomeLP />
      <HomeCards />
    </div>
  );
};
export default Home2;
