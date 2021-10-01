import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './slider.scss';

const Slider = () => {
  const data = useSelector((state) => state.cardsHome.cards.slice(0, 3));
  console.log(data);

  return (
    <div className="slider">
      <Carousel 
        autoPlay
        interval={2000}
        infiniteLoop
        thumbWidth={50}
        showIndicators={false}
        showStatus={false}
      >
        {
          data.map((slide) => (
            <div key={slide.id}>
              <img src={slide.image} alt=""/>
              <div className="overlay"></div>
              <h2 className="overlay__title">{slide.title}</h2>
              <p className="overlay__text">{slide.description}</p>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}; 

export default Slider;
