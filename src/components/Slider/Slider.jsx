import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import 'swiper/swiper-bundle.css';

function Slider({slides}){
    return (
        <div id="slider" className="slider">
            <Swiper
                id="swiper"
                modules = {[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween = {50}
                slidesPerView = {3}
                loop={true}
                navigation
                pagination = {{ clickable: true}}
                onSlideChange = { () => console.log('slide change')}
                onSwiper = { (swiper) => console.log(swiper)}
                effect = {"cube"}
                cubeEffect = {{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.source}>
                        <img className="sliderImg" src={slide.source} alt={slide.title}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>   
    )
}

export default Slider;