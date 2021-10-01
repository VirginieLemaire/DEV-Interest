import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './slider.scss';


const Slider = () => {
  const data = useSelector((state) => state.cardsHome.cards.slice(0, 10));
  const { darkMode } = useSelector((state) => state.displayOptions);

  return (
    <div className="slider">
      <Carousel 
        autoPlay
        interval={2000}
        infiniteLoop
        thumbWidth={50}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        {
          data.map((slide) => (
            <div key={slide.id} className="slide">
              <img  className="slide__image" src={slide.image} alt=""/>
              <h2 className="slide__title">{slide.title}</h2>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}; 

export default Slider;
