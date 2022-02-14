import { FC } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Slide } from "./Slide";

const srcList = [
    "/img/quadras.jpg",
    "/img/corrimao_d.jpg",
];

export const Slider: FC = () => {

    return (
        <Swiper
            // install Swiper modules
            id="fotos"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                srcList.map((src, index) =>
                    <SwiperSlide key={src} >
                        <Slide src={src} />
                    </SwiperSlide>
                )
            }
        </Swiper >
    )
}