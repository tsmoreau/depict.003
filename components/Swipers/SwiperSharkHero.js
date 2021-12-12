import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/navigation";

import RecycleBin from "../Machines/recyclebin";
import DepictSoup from "../Machines/depictsoup";
import Sharks from "../Machines/shiftysharks";
import Test from "../Machines/test";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  Mousewheel,
  FreeMode
} from "swiper/core";

// install Swiper modules
SwiperCore.use([
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  FreeMode
]);

export default function App() {
  return (
    <div className="w-screen justify-center flex">
      <div className="w-11/12 max-w-7xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          navigation={false}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          loopedSlides={50}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false
          }}
          freeMode={{
            enabled: false,
            sticky: true,
            momentum: false
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: false
          }}
          mousewheel={{
            invert: true,
            releaseOnEdges: true,
            forceToAxis: true
          }}
          breakpoints={{
            // when window width is >= 320px
            50: {
              slidesPerView: 2,
              spaceBetween: -50
            },
            // when window width is >= 480px
            600: {
              slidesPerView: 3,
              spaceBetween: -75
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 4,
              spaceBetween: -100
            }
          }}
          className="flex mx-auto justify-center"
        >
          <SwiperSlide className="rounded-full">
            <img src="/sharks/base.svg" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/screen.png" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/download (5) (1).png" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/download (3) (1).png" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/download (1) (1).png" />
          </SwiperSlide>

          <SwiperSlide className="rounded-full">
            <img src="/sharks/download (6) (1).png" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/download (2) (1).png" />
          </SwiperSlide>
        </Swiper>

        <style>{`
        

        .swiper-button-prev {
          color: #FFFFFF;
          
        }

        .swiper-button-next {
          color: #FFFFFF;
            
        }
        
        
        
        
        
        
        
           
          .swiper-pagination-bullet {
                background-color: transparent;
                border: 1px solid #FFFFFF;
                border-radius: 50%;
                width: 12px;
                height: 12px;
                opacity: 1;
            }
        
            .swiper-pagination-bullet-active {
                background-color: #FFFFFF;
            }
        }
        }
        
        .swiper1-wrapper {
          height: 500px;
        }
          
        .swiper-container {
          width: 50px;
          padding-bottom: 50px;
          
          justify-content: center;
          align-items: center;
          color: "white";
          background-color: transparent;
        }
        
        .swiper-slide {
          background-position: center;
          
          width: 50px;
          
          
          overflow: hidden;
        }
        
        
        
      `}</style>
      </div>
    </div>
  );
}
