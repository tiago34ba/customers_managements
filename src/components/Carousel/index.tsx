import carouselBg from '../../assets/carousel-background.png';
import './Style.css';

const Carousel = () => {
    return (
    <div id="carouselExampleCaptions" className="carousel slide relative h-screen bg-primary" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active rounded-full"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
        </div>
        <div className="carousel-inner flex items-center text-center absolute top-0 bottom-0 w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={carouselBg}
                        className="block w-4/6 "
                        alt="..."
                    />
                </div>
    
                <div className="carousel-caption md:block text-center mx-auto max-w-md">
                </div>
            </div>        
        </div>
        <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        </button>
        <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        </button>
    </div>
    )
}

export default Carousel;