import PropTypes from 'prop-types';
import './card-details.scss';

const CardDetails = ({ data })=>{

  return (
<div className='card'>

  <img className='card__image'src={ data[0].image } />
  <h2 className='card__title'> { data[0].title }</h2>
  <div className='card__langue'>{ data[0].language }</div>
  <p className='card__article'> { data[0].description } </p>
  <div className='card__pseudo'>Publié par : { data[0].contributor } </div>
  <div className='card__date'> { data[0].createdAt } </div>
  <div className='card__level'> { data[0].level } </div>
  <div className='card__language'> { data[0].technos }</div>
  <p className='card__category'> { data[0].category } </p>
  <button className='card__button' href='#'> { data[0].media } </button>
  <button className='card__bookmark' href='#'> { data[0].bookmark } </button>



</div>
)

};

CardDetails.propTypes = { 
data: PropTypes.arrayOf(
PropTypes.shape({
  image : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  technos: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  bookmark: PropTypes.string.isRequired,

}),
).isRequired,
};




export default CardDetails
 