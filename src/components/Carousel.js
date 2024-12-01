import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { src: '/images/image1.jpeg', caption: 'Breathe deeply.' },
    { src: '/images/image2.jpeg', caption: 'Appreciate nature.' },
    { src: '/images/image03.jpeg', caption: 'Stay present.' },
];

// Custom Next Arrow
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer z-10"
            onClick={onClick}
        >
            →
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer z-10"
            onClick={onClick}
        >
            ←
        </div>
    );
};

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="mb-10"> {/* Added margin-bottom to separate the dots */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.caption} className="w-full h-[500px] object-contain rounded-lg" />
                        <p className="text-center mt-2">{image.caption}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
