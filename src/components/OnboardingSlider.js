import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { Modal } from "./";

// install Swiper modules
SwiperCore.use([Pagination]);

const paginationSettings = {
  clickable: true,
};

const OnboardingSlider = ({ slidesArray, handleOnboardingEnd }) => {
  const swiperRef = useRef(null);
  const [okButtonText, setOkButtontext] = useState("Next");

  const onNextClick = () => {
    if (swiperRef.current.swiper.isEnd) {
      handleOnboardingEnd();
    } else {
      swiperRef.current.swiper.slideNext();
      if (swiperRef.current.swiper.isEnd) {
        setOkButtontext("Start Now!");
      }
    }
  };

  const handleSlide = () => {
    if (swiperRef.current.swiper.isEnd) {
      setOkButtontext("Start Now!");
    } else {
      setOkButtontext("Next");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-sm px-5 py-5">
        <div className="mx-auto rounded-3xl bg-white text-gray-600 w-full	pt-4 text-center">
          {slidesArray?.length > 0 && (
            <>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides
                pagination={paginationSettings}
                className="cursor-grab"
                ref={swiperRef}
                onSlideChange={() => handleSlide()}
              >
                {slidesArray.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={slide.img}
                        className="w-64 h-64 mx-auto mb-3 bg-cover bg-center"
                      />
                      <h2 className="text-gray-700 text-lg title-font font-semibold mb-3">
                        {slide.title}
                      </h2>
                      <p class="text-sm leading-tight h-16 mb-10">
                        {slide.body}
                      </p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="flex justify-between mt-5">
                <button
                  type="button"
                  className="mr-2 flex-1 px-4 py-2 border border-red-500 shadow-sm text-red-500 text-sm transition-all rounded-md bg-white hover:text-white hover:bg-red-500 hover:shadow-lg"
                  onClick={() => handleOnboardingEnd()}
                >
                  Skip
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-2 border border-transparent shadow-sm text-white text-sm transition-all rounded-md bg-red-500 hover:border-red-500 hover:text-white hover:bg-red-600 hover:shadow-lg"
                  onClick={() => onNextClick()}
                >
                  {okButtonText}
                </button>
              </div>
            </>
          )}
          {!slidesArray && (
            <h2 className="font-semibold text-md text-red-500 mb-8">
              No slides provided
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default OnboardingSlider;
