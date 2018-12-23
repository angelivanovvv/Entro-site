import '../libs/slick.min.js';

class Slider {
    constructor() {
        this.sliderContainer = $('.slider__container');
        this.createSlider();
    }
    createSlider() {
        this.sliderContainer.slick({
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
    }
}

export default Slider;