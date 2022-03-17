import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/style.css"
// import required modules
// import required modules
import { Pagination } from "swiper";

import Login from "./Login";
import Validate from "./Validate";
import { Simulate } from "react-dom/test-utils";

function Home() {
    const pagination = {
         clickable: true,
        renderBullet: function (index, className) {
            return "";
        },
    };


    return (
        <div className="container">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                simulateTouch={false}
            >
                <SwiperSlide>
                    <Login />
                </SwiperSlide>
                <SwiperSlide>
                    <Validate />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Home
