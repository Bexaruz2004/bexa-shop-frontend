import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    category: "Футболка",
    title: "Новая летняя коллекция",
    price: "от 70 000 сум",
    bgColor: "#FF3C00",
    accentColor: "#FFD600",
  },
  {
    category: "Платье",
    title: "Лёгкие образы для жары",
    price: "от 120 000 сум",
    bgColor: "#8000FF",
    accentColor: "#FFC700",
  },
  {
    category: "Обувь",
    title: "Комфорт на каждый день",
    price: "от 95 000 сум",
    bgColor: "#0081FF",
    accentColor: "#FFDC00",
  },
  {
    category: "Брюки",
    title: "Классика и удобство",
    price: "от 110 000 сум",
    bgColor: "#00B894",
    accentColor: "#FFE600",
  },
];

function PromoSwiper() {
  return (
    <div className="promo-swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="promo-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                background: `linear-gradient(to right, ${slide.bgColor} 70%, ${slide.accentColor})`,
              }}
            >
              <div className="text-box">
                <h2 className="category">{slide.category}</h2>
                <h1 className="title">{slide.title}</h1>
                <p className="price">{slide.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PromoSwiper;
