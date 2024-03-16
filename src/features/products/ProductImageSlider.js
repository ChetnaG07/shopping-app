import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";

const ProductImageSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log("pimgs", images);

  return (
    <>
      <div className="col-lg-12">
        <Swiper
          // install Swiper modules
          modules={[Zoom, Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          grabCursor={true}
          zoom={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="image-slider-lg"
        >
          {images &&
            images.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="swiper-zoom-container">
                    <img src={image} alt="Product Image" />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className="image-slider-thumbs"
        >
          {images &&
            images.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={image} alt="Product Image" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductImageSlider;
