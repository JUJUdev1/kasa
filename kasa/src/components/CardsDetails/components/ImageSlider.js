import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider(props) {
  let settings = {
    duration: 5000,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    indicators: true,
    numbers: true,
  };
  return (
    <div className="contenairSlide">
      <Slider {...settings}>
        {props.pictures.map((picture) => (
          <img src={picture} key={picture} />
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
