import './404.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../GenericComponents/Button';
import CardsDisplay from '../CardsDisplay';

const ErrorPage = () => {
  const history = useHistory();
  const { darkMode } = useSelector((state) => state.displayOptions);

  return (
    <div className={darkMode ? "error-page error-page--dark" : "error-page"}  >
      <h1 className="error-page__title">Oups, cette page n'existe pas ...</h1>
      <Button
        color
        styling="full"
        handleClick={() => history.push('/')}
        content="Retour à l'accueil"
      />
      <p className="error-page__text">Nous pouvons tout de même de proposer quelques lectures sur la 404 ...</p>
      <div className="error-page__cards">
        <CardsDisplay keyword={'404'}/>
      </div>
    </div>
  );
};
export default ErrorPage;


