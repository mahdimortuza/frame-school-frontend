import Carousel from "../Carousel/Carousel";
import Newsletter from "../Newsletter/Newsletter";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderTeacher from "../SliderTeacher/SliderTeacher";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <SliderTeacher></SliderTeacher>
            <Newsletter />
        </div>
    );
};

export default Home;