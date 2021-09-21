import './card-details.scss';

const CardDetails = ()=>{

  return (
<div className='card__container'>
  
    <img className='image__card'src='https://www.mentalhealthtoday.co.uk/media/37238/young-people-diversity-prime.jpg'/>
    <h2 className='card__title'> Apprendre react en 5 minutes</h2>
    <p className='card__pseudo'>proposé par:  </p>
    <p className='card__date'>le 12 septembre 2021</p>
    <p className='card__level'>Débutant</p>
    <p className='card__language'> JS CSS</p>
    <p className='card__category'>Apprendre</p>
    <button className='card__button'>Vidéo</button>
    <button className='card__bookmark'>Favoris</button>

  </div>
  )
  
};

export default CardDetails
 