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
  FreeMode,
  EffectCards
} from "swiper/core";

// install Swiper modules
SwiperCore.use([
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  FreeMode,
  EffectCards
]);

export default function App() {
  return (
    <div className="w-screen flex justify-center static md:mr-0">
      <div className="w-screen inset-x-0">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false
          }}
          mousewheel={{
            invert: true,
            releaseOnEdges: true,
            forceToAxis: true
          }}
          className="w-1/2   mt-3  md:w-1/2 lg:w-2/5"
        >
          <SwiperSlide className=" rounded-full">
            <img src="/sharks/base.svg" className="" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/bloodSciFi.svg" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/river.svg" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/deepFancy.svg" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/roseHippy.svg" />
          </SwiperSlide>

          <SwiperSlide className="rounded-full">
            <img src="/sharks/saffron.svg" />
          </SwiperSlide>
          <SwiperSlide className="rounded-full">
            <img src="/sharks/spaceChad.svg" />
          </SwiperSlide>
        </Swiper>
        <style>{`
        
        .swiper {
          
        }

        .swiper-button-prev {
          color: #FFFFFF;
          transform: translate(-65px);
        }

        .swiper-button-next {
          color: #FFFFFF;
          transform: translate(65px);
            
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
