import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Product from "../components/Product";

const Slider = ({ products }) => {
  const arr = products.map((singleProduct) => {
    return <Product key={singleProduct.id} products={singleProduct} />;
  });

  return (
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={window.innerWidth < 750 ? 2 : 5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide>{arr[0]}</SwiperSlide>
      <SwiperSlide>{arr[1]}</SwiperSlide>
      <SwiperSlide>{arr[2]}</SwiperSlide>
      <SwiperSlide>{arr[3]}</SwiperSlide>
      <SwiperSlide>{arr[4]}</SwiperSlide>
      <SwiperSlide>{arr[5]}</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
