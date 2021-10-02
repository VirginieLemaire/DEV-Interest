import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './slider.scss';


const Slider = () => {
  const data = useSelector((state) => state.cardsHome.cards.slice(0, 30));

  return (
    <div className="slider">
      <Carousel 
        autoPlay
        width={850}
        interval={5000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        stopOnHover={false}
        transitionTime={3000}
        centerMode={true}
        centerSlidePercentage={100}
      >
        {
          data.map((slide) => (
            <Link key={slide.id} to={`/cards/${slide.slug}/${slide.id}`}>
            <div  className="slide">
              <img  className="slide__image" src={slide.image} alt=""/>
              <h2 className="slide__title">{slide.title}</h2>
            </div>
            </Link>
          )
        )}
      </Carousel>
    </div>
  );
}; 

export default Slider;
