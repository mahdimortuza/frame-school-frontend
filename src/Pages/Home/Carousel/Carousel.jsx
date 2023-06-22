import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../../../src/assets/carousel/slide1.jpg'
import slide2 from '../../../../src/assets/carousel/slide2.jpg'
import slide3 from '../../../../src/assets/carousel/slide3.jpg'
import slide4 from '../../../../src/assets/carousel/slide4.jpg'
import slide5 from '../../../../src/assets/carousel/slide5.jpg'

const Carousel = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
        <div className="h-screen flex bg-[#FFF4EA] items-center justify-center">
            <img className="w-full h-5/6" src={slide1}></img>
          <h3 className="text-center text-3xl font-bold mt-10 text-[#DC143C]">Portrait Photography</h3>
        </div>
        <div className="h-screen flex items-center justify-center">
        <img className="w-full h-5/6" src={slide3}></img>
        <h3 className="text-center text-3xl mt-10 font-bold text-[#DC143C]">Event Photography</h3>
        </div>
        <div className="h-screen flex items-center justify-center">
        <img className="w-full h-5/6" src={slide4}></img>
        <h3 className="text-center text-3xl font-bold mt-10 text-[#DC143C]">Macro Photography</h3>
        </div>
        <div className="h-screen flex items-center justify-center">
        <img className="w-full h-5/6" src={slide5}></img>
        <h3 className="text-center text-3xl font-bold mt-10 text-[#DC143C]">Wildlife Photography</h3>
        </div>
        <div className="h-screen flex items-center justify-center">
        <img className="w-full h-5/6" src={slide1}></img>
        <h3 className="text-center text-3xl font-bold mt-10 text-[#DC143C]">Portrait Photography</h3>
        </div>
      </Slider>
    );
};

export default Carousel;