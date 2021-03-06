import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/navigation";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  Mousewheel,
  FreeMode,
  EffectCards,
  Virtual,
  Autoplay
} from "swiper/core";

import {
  colorTraits,
  eyesTraits,
  headTraits,
  mouthTraits,
  clothingTraits,
  neckTraits,
  leftFinTraits,
  rightFinTraits,
  extraTraits
} from "../Samples/shiftysharks/traits";

// install Swiper modules
SwiperCore.use([
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  FreeMode,
  EffectCards,
  Autoplay,
  Virtual
]);

const slides = [];

for (let i = 0; i < 120; i++) {
  slides.push(
    <SwiperSlide key={`slide-${i}`}>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 40.67 40.89"
          className="rounded-sm"
        >
          <path
            fill="#5fd8ff"
            stroke="#878787"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.18"
            d="M0 0h40.67v40.89H0z"
          ></path>
          <path
            fill="#5fd8ff"
            fillRule="evenodd"
            stroke="#878787"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.09"
            d="M16.32 31.56c1.05.73 8.53 2 8.43-.42s-3.88-9.71-8.83-9.33c1.49 2.04 2.75 6.93.4 9.75z"
          ></path>
          <text
            transform="translate(20.06 38.56)"
            style={{ isolation: "isolate" }}
            fill="#8ae3ff"
            fontFamily="TimesNewRomanPSMT, Times New Roman"
            fontSize="1.89"
          >
            <tspan>/5000</tspan>
          </text>
          <text
            transform="translate(14.1 36.26)"
            style={{ isolation: "isolate" }}
            fill="#8ae3ff"
            fontFamily="TimesNewRomanPSMT, Times New Roman"
            fontSize="2.62"
          >
            <tspan>shiftysharks</tspan>
          </text>
          <text
            transform="translate(16.68 40.01)"
            style={{ isolation: "isolate" }}
            fill="#8ae3ff"
            fontFamily="TimesNewRomanPSMT, Times New Roman"
            fontSize="0.75"
          >
            depict.limited/shiftysharks
          </text>
          <text
            transform="translate(16.18 38.59)"
            style={{ isolation: "isolate" }}
            fill="#8ae3ff"
            fontFamily="TimesNewRomanPSMT, Times New Roman"
            fontSize="1.89"
          >
            <tspan>
              {i.toString().length === 1 ? (
                <tspan>000{i} </tspan>
              ) : (
                <tspan></tspan>
              )}
              {i.toString().length === 2 ? (
                <tspan>00{i} </tspan>
              ) : (
                <tspan></tspan>
              )}
              {i.toString().length === 3 ? (
                <tspan>0{i} </tspan>
              ) : (
                <tspan></tspan>
              )}
              {i.toString().length === 4 ? (
                <tspan>{i} </tspan>
              ) : (
                <tspan></tspan>
              )}
            </tspan>
          </text>
        </svg>
      </div>
    </SwiperSlide>
  );
}

const SVGpart01 = `<svg className="rounded-xl shadow-xl w-96" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 2500 2500'><defs>
  
    <style>
    
    .body,.underbody,.nostrils,.eyes,.pupils,.mouth,.teeth,.fins,.gills
    {stroke:#606060;}

    .body,.underbody,.nostrils,.eyes,.pupils,.mouth,.teeth,.fins,.gills
    {stroke-width:5px;}
    
    .bg,.nostrils,.eyes,.pupils,.mouth,.teeth,.fins,.body,.underbody,.gills
    {stroke-linecap:round;stroke-linejoin:round;}
    
    .bg
    {stroke-width:5px;fill:url(#linear-gradient);}
    
    .bg,.body,.underbody,.nostrils,.eyes,.pupils,.mouth,.teeth,.fins,.gills,.shadow
    {fill-rule:evenodd;}`;
const SVGpart02 = `colorTraits`;
const SVGpart03 = ` 
    </style>
    
    <linearGradient id='linear-gradient' x1='-419.5' y1='250' x2='2079.5' y2='250' gradientTransform='matrix(0, 1, 1, 0, 1000, 420)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#ffee6f'/><stop offset='1' stop-color='#edb705'/></linearGradient>
    
    </defs>
    
    <g id='background'><path class='bg' d='M2500,.5v2499H0V.5Z'/></g>
    <g id='mouth'><path class='mouth' d='M1255.37,1044.18S1207.93,1204,1395.14,1298c222.17,116.6,237.2,132.09,333.44,161.81,101.44,19.29,154.8-22.2,160.08-37.06s14.66-50.91-67.29-122c-80.86-70-49.26-45.12-120.83-70.58-62.28-27.72-92.51-49.37-325.25-76.55C1351.16,1071.08,1255.37,1044.18,1255.37,1044.18Z'/></g>
    <g id='teeth1'><path class='teeth' d='M1341.1,1247.93c52.72-35.88,43.42-57.52,29.8,30.46,77.67-32.61,41.24-47.25,44.15,30.66,70-27.09,37.66-73.76,41.84,24.08,54.18-31,54.07-61.14,45.06,17.68,2.18,7.34,43.72-36.33,49.55-41.76,2.37,8.24-.51,40.71-3.34,60.28,15.12-15.13,32.4-35.23,47.61-41.93-17.94,62.87-47.21,78.71,32.19,12.3-10.66,23-12.69,42.14-13,54.37,34.24-18.3,69.4-64.42,49.91-27.45-43.71,74,10.42,20.56,39.65,2.89-3,8.88-13.21,30.89-17.12,44.66,10.1-5.43,33.6-25.27,52.72-37.14-5.74,16.94-18.21,37.78-23.22,49.65,20-12,37.42-29.45,57.55-43.13-15.76,23.11-19.4,46.66-23.68,53,15.21-8.79,57.91-48.38,65.83-54.81-25.76,73.93-13.56,60.07,30.14-4.89,0,0-19.21,53.18-10.56,51.73,27.59-14.95,43.14-78.84,43.41-23.34,27.34-24.91,10.07-21.14,12.35-24.31-22.59,195-563.67,79.45-559-89.7'/></g><g id='teethUpper2'><path class='teeth' d='M1927.79,1309.05c-28.13-3-71.45,29.48-101.41,30.65,13.66-18.75,38.76-55.7-.31-38.69-45.26,11.69-61.83,49.39-41-17.56,5.37-23.82-43.42,21.16-66.19,35.39,1.21-25.12,4.17-47.87,6.5-60.07-8,5.47-42.34,40.35-69.84,52.67,1.82-11.69,41.15-74.11,9-54.09-68.47,50.92-55.72,59.25-43.25-19.39-26.5,7.89-36.15,47.93-65.74,54.09,4.1-22.92,14.57-47.29,8.47-72.12-.91-22.64-47.81,56.36-61.74,60.8,1.82-11.78,20-69.65,20-93.8-8.74,14.86-53,52.48-65.66,64.17-4.19-14.77,2.82-42.74-2.06-66.69-10.74,11.51,9.5-12.05-60.13,49.11-3-94.94,32.81-78.91-66.38-8.51,29.14-124.39,40.7-120.86,164-109.17,95.43,21.74,205.88,10.06,284.37,69.58'/></g>
    
    <g id='finRight'><path class='fins' d='M1250.9,1720.85c261.79,90.86,485.24,344.81,485.24,344.81s22.4,21.2,42.16,5.89c19-13.41,27-28.45,24.68-39.78-1.92-48.19-79-372.89-282.46-537C1382.39,1417,1196.91,1578.16,1250.9,1720.85Z'/></g>
    <g id='finTop'><path class='fins' d='M719.87,1036.57c75.75,0,484.69-188,398-303.68s-516-344.18-745-158.91C514.26,623.63,740.17,819.68,719.87,1036.57Z'/></g>
    <g id='body'><path class='body' d='M2071.77,1291.78c-53.45,20.56-79.49,34.15-123.47,23.55-20.94-5.79-294-80.08-392.72-105.9-32-8.34-68.53-43.6-123.38-35.43-99.89-19.66-52.36-20.29-149.52-107.45,44.35,147.41,69,213.54,128,254.49,44.89,29.72,260,113.52,362.49,122.4,127.3,5.8,136.49-69.22,68.11-125.84-84.23-64,188.85,71.93-40.61,181.65-131.3,49.55-254.32,29-261.6,36.51-131.12,49.64-341.21,375.85-341.21,375.85-63.11,193.7-117.55,227.28-17.3,588.39-52.15,0-323.71,8.92-524.13-.5,0,0-440.95-841.53-69.72-1413.29,24.22-39.32,118.1-177.11,224-246.69,258.42-196.69,595.32-242.08,886.61-137.35,159.53,55.36,237.38,151.12,329.35,221.51,79.71,64.1,154.16,128.92,197.68,183.28C2275,1166.66,2219.37,1197.65,2071.77,1291.78Z'/></g>
    <g id='bodyUnder'><path class='underbody' d='M2075.51,1291.78c-53.45,20.56-67.77,36.82-123.48,23.55-20.94-5.79-299.2-65.95-397.91-91.77C1502,1209.19,1502,1197,1435.93,1174c-99.89-19.66-50.81-11.23-148-98.39,44.35,147.41,63.83,204.48,122.75,245.43,44.89,29.72,263.79,113.52,366.13,122.4,127.3,5.8,136.5-69.22,68.11-125.84-84.22-64,188.85,71.93-40.61,181.65-131.3,49.55-254.32,29-261.6,36.51-131.12,49.64-276,268-329.53,382.31-32.6,69.58-132.87,220.82-32.62,581.93-103.56,0-290.61-.5-290.61-.5s-94.81-236.89-75.69-481.86C854.81,1742,1091.47,1506.49,1142.46,1465c57.43-59.76,133.44-84.07,107.54-186.61-74.29-294.06-91.43-350.45,158.34-234.12,71.57,24.82,300.48-41,434-22.11,171.64,24.28,298.39,97.76,302.49,3.63,30.87,23.55,47.9,40,83.23,81.35C2278.74,1166.66,2223,1197.65,2075.51,1291.78Z'/></g>
    <g id='teeth2'><path class='teeth' d='M1829.57,1298c17.78-2.46,19-5.32,28-3.81-.45,8,0,45.56,1.67,52.81,9.92-5.89,22.46-24.94,27.74-34.82,2.82,11.24-29.32,84.35-4.92,60.52,34.33-58,10.08,31.69-2.39,32.59,0,0-5.44-16-7.44-20.18-5.83-11.59-44.87-70.17-54.34-79'/></g>
    <g id='gills'><path class='gills' d='M984.66,1134.5c-1.19-4.35,8.83,42.49,12.84,53.36,28.22,78.1,51,110.62,117.19,162.44-44.71-40.31-67.2-114.6-83.59-175.94-10.57-39.95-7.56-94.94,17.3-14.94,25.22,63.41,74.66,115,121.1,163-40.15-39.68-64-91.87-73.12-147.22-9.56-47.65-14.93-107,10.66-149.39,4.19,83.44,26.31,168.6,89,229.39,5.37,6.07,12,14.31,17.12,19.38-76.95-91.14-71.39-222-92.52-328.14-63.74,67.59-75.94,146.68-41.24,231.21-12.48-30.35-45.44-99.84-44.53-172.23-3.73-43.58-22.49,35.79-23.95,50.65-3.64,36-6.65,59.06-1.46,94.58,2.92,19.66,4.65,40.86,7.29,47.47-19.85-49.37-19.49-84-28.5-125.93-.46-4.26.09-9-.55-13.23-5.73,31.71-10,44.85-3,75.56'/></g>
    <g id='tail'><path class='fins' d='M1706.29,2501.25s38,33.25,76.31-139.61a27.09,27.09,0,0,0-.09-11.51c-31-141.69,64.74-251.77,82.86-256.3s-83.5,137.35-23.95,250c21.94,31.89,57.56,54.9,88,75.92-11.92,8.06-55.27,5.53-77.85,3.71-8.19-.72-15.12,5-16.93,13.5l-18.39,64.24C1818.93,2504.42,1706.29,2501.25,1706.29,2501.25Z'/></g>
    <g id='finLeft'><path class='fins' d='M258.21,2148.46c-12.38-3.8,3.92-66.31,7.83-85.7,34.33-169.78,99-436,355.12-598.85C906.44,1282.54,887,1576,1013.89,1615.21,677.62,1751.1,429.76,2019.54,321.22,2109.6,297,2129.8,268.78,2155.44,258.21,2148.46Z'/></g>
    
    <g id='nostrils'><path class='nostrils' d='M2124.49,1111.18s11.2,8.61,36.52,17.85C2177.58,1122.69,2139.52,1106.83,2124.49,1111.18Z'/></g><g id='nostrilRight'><path class='nostrils' d='M1870.73,1085.85c6.37,12.87-5.1,28.63,62.28,33.88C1870.73,1085.85,1840.77,1072.35,1870.73,1085.85Z'/></g>
    
    <g id='eyes'>
    <path class='eyes' d='M1394.32,854.65c-24,6.52,118,23.74,108.81,63.51-17.67-19.3-59.19-24.19-84-27.45-105.9-7.07-47.35-11.51-8.84,20.2,10.2,18.93,32,44.21,97.07,31.53,20.85-2.36,40.43,23.46,51,30.16,60.73-7,87.14-6.34,4.28-11.23-15.66-3.89-41.61-28-51.72-38,.91-9.6-6.37-26.91-10.2-34.52C1476.27,879.47,1422.45,849.3,1394.32,854.65Z'/></g>
    <g id='eyeRIghtBG'>
    <path class='eyes' d='M1903,870.32c-12,8.43-27.87,23-22.13,33.7,12.66,23.56,34.51,41.68,58.18,56.72,41.43,26.18,58,24.46,58,24.46s-45.9-22.92-49.81-32.53c-3.73-9.33-1.28-30.71-10.11-36.24-13.66-8.6-36.42-6.43-47.26-12.14C1893,894.6,1890.48,890.53,1903,870.32Z'/></g>
    
    <g id="eRb3g6eWQXr30_to" transform="translate(1707.7948,925.796997)"><g id="eRb3g6eWQXr30" transform="translate(-1707.7948,-925.796997)" clip-rule="evenodd"><path class="pupils" d="M1487.09,904.906C1478.99,904.906,1472.31,911.488,1472.31,919.688C1472.31,927.887,1478.89,934.5,1487.09,934.5C1495.29,934.5,1501.91,927.888,1501.91,919.688C1501.91,911.488,1495.29,904.906,1487.09,904.906ZM1931.81,918.312C1923.61,918.313,1923.31,925.806,1922.91,931.906C1922.31,940.106,1929.49,946.688,1937.69,946.688C1945.99,946.688,1942.59,934.406,1942.59,934.406C1942.59,934.406,1939.91,918.212,1931.81,918.312Z"/></g></g>
    
    <g id='teeth3'><path class='teeth' d='M1943.24,1313.39c-26.9-3.83-85.27,17.68-116.86,26.31,13.66-18.75,38.76-55.7-.31-38.69-45.26,11.69-70.46,67.24-42.65-22.62,28.89,6.73,108.55,22.79,159.82,35.3'/></g>
    <g id='shadow'><path class='shadow' d='M1817.84,1464.86c-60.66,59.48-202.85,55.58-288.73,51.82-111.66-10.27-225.43-15.84-316-74.09,15.45,26.8,115,93.52,185.72,103.44,23.33,10.38,71-5.65,54.26,5.93-84.06,58.36-174.63,176.24-189.17,200.42C1155.27,1933,1036.3,2105.86,1143.54,2500c-81.78,0-254.52,3.82-360.71,3.82-59.5-121.22-89.86-230.53-88.47-434.66.74-109.4,39.48-277.94,90.93-333.76,15.37-16.68,180.55-97.8,195.72-106.75,32.88-19.4,0,3.53,32.88-13.48C981,1609.7,929,1544,893,1482.83c-52-88.37,199-341,310.43-407.26,11.79,118.86,44.44,251.07,167.18,313.18C1555.59,1482.33,1703.42,1474.51,1817.84,1464.86Z'/></g>
    `;
const SVGpart04 = `extraTraits`;
const SVGpart05 = `</svg>`;

export default function Home() {
  const [SVG01, setSVG01] = useState();
  const [SVG02, setSVG02] = useState();
  const [SVG03, setSVG03] = useState();
  const [SVG04, setSVG04] = useState();
  const [SVG05, setSVG05] = useState();
  const [SVG06, setSVG06] = useState();
  const [SVG07, setSVG07] = useState();
  const [SVG08, setSVG08] = useState();

  useEffect(() => {
    Randomize();
  }, []);

  const router = useRouter();

  function Randomize() {
    setSVG01(
      SVGpart01 +
        colorTraits[Math.floor(Math.random() * colorTraits.length)] +
        extraTraits[Math.floor(Math.random() * colorTraits.length)] +
        SVGpart03 +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * headTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * headTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * headTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * headTraits.length)] +
        mouthTraits[Math.floor(Math.random() * headTraits.length)] +
        SVGpart05
    );
    setSVG02(
      SVGpart01.replaceAll("body", "body01a")
        .replaceAll("fins", "fins01a")
        .replaceAll("underbody", "underbody01a")
        .replaceAll("mouth", "mouth01a")
        .replaceAll("nostrils", "nostrils01a")
        .replaceAll("teeth", "teeth01a")
        .replaceAll("extra", "extra01a")
        .replaceAll("eyes", "eyes01a")
        .replaceAll("pupils", "pupils01a")
        .replaceAll("gills", "gills01a") +
        colorTraits[Math.floor(Math.random() * colorTraits.length)]
          .replaceAll("body", "body01a")
          .replaceAll("fins", "fins01a")
          .replaceAll("underbody", "underbody01a")
          .replaceAll("mouth", "mouth01a")
          .replaceAll("nostrils", "nostrils01a")
          .replaceAll("teeth", "teeth01a")
          .replaceAll("extra", "extra01a")
          .replaceAll("eyes", "eyes01a")
          .replaceAll("pupils", "pupils01a")
          .replaceAll("gills", "gills01a") +
        extraTraits[Math.floor(Math.random() * extraTraits.length)].replaceAll(
          "pupils",
          "pupils01a"
        ) +
        SVGpart03.replaceAll("body", "body01a")
          .replaceAll("fins", "fins01a")
          .replaceAll("underbody", "underbody01a")
          .replaceAll("mouth", "mouth01a")
          .replaceAll("nostrils", "nostrils01a")
          .replaceAll("teeth", "teeth01a")
          .replaceAll("extra", "extra01a")
          .replaceAll("eyes", "eyes01a")
          .replaceAll("pupils", "pupils01a")
          .replaceAll("gills", "gills01a") +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * headTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * headTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * headTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * headTraits.length)]
          .replaceAll("body", "body01a")
          .replaceAll("fins", "fins01a")
          .replaceAll("underbody", "underbody01a")
          .replaceAll("mouth", "mouth01a")
          .replaceAll("nostrils", "nostrils01a")
          .replaceAll("teeth", "teeth01a")
          .replaceAll("extra", "extra01a")
          .replaceAll("eyes", "eyes01a")
          .replaceAll("pupils", "pupils01a")
          .replaceAll("gills", "gills01a") +
        mouthTraits[Math.floor(Math.random() * headTraits.length)].replaceAll(
          "extra",
          "extra01a"
        ) +
        SVGpart05
    );
    setSVG03(
      SVGpart01.replaceAll("body", "body01")
        .replaceAll("fins", "fins01")
        .replaceAll("underbody", "underbody01")
        .replaceAll("mouth", "mouth01")
        .replaceAll("nostrils", "nostrils01")
        .replaceAll("teeth", "teeth01")
        .replaceAll("extra", "extra01")
        .replaceAll("eyes", "eyes01")
        .replaceAll("pupils", "pupils01")
        .replaceAll("gills", "gills01") +
        colorTraits[Math.floor(Math.random() * colorTraits.length)]
          .replaceAll("body", "body01")
          .replaceAll("fins", "fins01")
          .replaceAll("underbody", "underbody01")
          .replaceAll("mouth", "mouth01")
          .replaceAll("nostrils", "nostrils01")
          .replaceAll("teeth", "teeth01")
          .replaceAll("extra", "extra01")
          .replaceAll("eyes", "eyes01")
          .replaceAll("pupils", "pupils01")
          .replaceAll("gills", "gills01") +
        SVGpart03.replaceAll("body", "body01")
          .replaceAll("fins", "fins01")
          .replaceAll("underbody", "underbody01")
          .replaceAll("mouth", "mouth01")
          .replaceAll("nostrils", "nostrils01")
          .replaceAll("teeth", "teeth01")
          .replaceAll("extra", "extra01")
          .replaceAll("eyes", "eyes01")
          .replaceAll("pupils", "pupils01")
          .replaceAll("gills", "gills01") +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * headTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * headTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * headTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * headTraits.length)]
          .replaceAll("body", "body01")
          .replaceAll("fins", "fins01")
          .replaceAll("underbody", "underbody01")
          .replaceAll("mouth", "mouth01")
          .replaceAll("nostrils", "nostrils01")
          .replaceAll("teeth", "teeth01")
          .replaceAll("extra", "extra01")
          .replaceAll("eyes", "eyes01")
          .replaceAll("pupils", "pupils01")
          .replaceAll("gills", "gills01") +
        mouthTraits[Math.floor(Math.random() * headTraits.length)].replaceAll(
          "extra",
          "extra01"
        ) +
        SVGpart05
    );
    setSVG04(
      SVGpart01.replaceAll("body", "body01b")
        .replaceAll("fins", "fins01b")
        .replaceAll("underbody", "underbody01b")
        .replaceAll("mouth", "mouth01b")
        .replaceAll("nostrils", "nostrils01b")
        .replaceAll("teeth", "teeth01b")
        .replaceAll("extra", "extra01b")
        .replaceAll("eyes", "eyes01b")
        .replaceAll("pupils", "pupils01b")
        .replaceAll("gills", "gills01b") +
        colorTraits[Math.floor(Math.random() * colorTraits.length)]
          .replaceAll("body", "body01b")
          .replaceAll("fins", "fins01b")
          .replaceAll("underbody", "underbody01b")
          .replaceAll("mouth", "mouth01b")
          .replaceAll("nostrils", "nostrils01b")
          .replaceAll("teeth", "teeth01b")
          .replaceAll("extra", "extra01b")
          .replaceAll("eyes", "eyes01b")
          .replaceAll("pupils", "pupils01b")
          .replaceAll("gills", "gills01b") +
        SVGpart03.replaceAll("body", "body01b")
          .replaceAll("fins", "fins01b")
          .replaceAll("underbody", "underbody01b")
          .replaceAll("mouth", "mouth01b")
          .replaceAll("nostrils", "nostrils01b")
          .replaceAll("teeth", "teeth01b")
          .replaceAll("extra", "extra01b")
          .replaceAll("eyes", "eyes01b")
          .replaceAll("pupils", "pupils01b")
          .replaceAll("gills", "gills01b") +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * headTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * headTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * headTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * headTraits.length)]
          .replaceAll("body", "body01b")
          .replaceAll("fins", "fins01b")
          .replaceAll("underbody", "underbody01b")
          .replaceAll("mouth", "mouth01b")
          .replaceAll("nostrils", "nostrils01b")
          .replaceAll("teeth", "teeth01b")
          .replaceAll("extra", "extra01b")
          .replaceAll("eyes", "eyes01b")
          .replaceAll("pupils", "pupils01b")
          .replaceAll("gills", "gills01b") +
        mouthTraits[Math.floor(Math.random() * headTraits.length)].replaceAll(
          "extra",
          "extra01b"
        ) +
        SVGpart05
    );
    setSVG05(
      SVGpart01.replaceAll("body", "body01c")
        .replaceAll("fins", "fins01c")
        .replaceAll("underbody", "underbody01c")
        .replaceAll("mouth", "mouth01c")
        .replaceAll("nostrils", "nostrils01c")
        .replaceAll("teeth", "teeth01c")
        .replaceAll("extra", "extra01c")
        .replaceAll("eyes", "eyes01c")
        .replaceAll("pupils", "pupils01c")
        .replaceAll("gills", "gills01c") +
        colorTraits[Math.floor(Math.random() * colorTraits.length)]
          .replaceAll("body", "body01c")
          .replaceAll("fins", "fins01c")
          .replaceAll("underbody", "underbody01c")
          .replaceAll("mouth", "mouth01c")
          .replaceAll("nostrils", "nostrils01c")
          .replaceAll("teeth", "teeth01c")
          .replaceAll("extra", "extra01c")
          .replaceAll("eyes", "eyes01c")
          .replaceAll("pupils", "pupils01c")
          .replaceAll("gills", "gills01c") +
        SVGpart03.replaceAll("body", "body01c")
          .replaceAll("fins", "fins01c")
          .replaceAll("underbody", "underbody01c")
          .replaceAll("mouth", "mouth01c")
          .replaceAll("nostrils", "nostrils01c")
          .replaceAll("teeth", "teeth01c")
          .replaceAll("extra", "extra01c")
          .replaceAll("eyes", "eyes01c")
          .replaceAll("pupils", "pupils01c")
          .replaceAll("gills", "gills01c") +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * neckTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * rightFinTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * leftFinTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * headTraits.length)]
          .replaceAll("body", "body01c")
          .replaceAll("fins", "fins01c")
          .replaceAll("underbody", "underbody01c")
          .replaceAll("mouth", "mouth01c")
          .replaceAll("nostrils", "nostrils01c")
          .replaceAll("teeth", "teeth01c")
          .replaceAll("extra", "extra01c")
          .replaceAll("eyes", "eyes01c")
          .replaceAll("pupils", "pupils01c")
          .replaceAll("gills", "gills01c") +
        mouthTraits[Math.floor(Math.random() * headTraits.length)].replaceAll(
          "extra",
          "extra01c"
        ) +
        SVGpart05
    );
    setSVG06(
      SVGpart01.replaceAll("body", "body01d")
        .replaceAll("fins", "fins01d")
        .replaceAll("underbody", "underbody01d")
        .replaceAll("mouth", "mouth01d")
        .replaceAll("nostrils", "nostrils01d")
        .replaceAll("teeth", "teeth01d")
        .replaceAll("extra", "extra01d")
        .replaceAll("eyes", "eyes01d")
        .replaceAll("pupils", "pupils01d")
        .replaceAll("gills", "gills01d") +
        colorTraits[Math.floor(Math.random() * colorTraits.length)]
          .replaceAll("body", "body01d")
          .replaceAll("fins", "fins01d")
          .replaceAll("underbody", "underbody01d")
          .replaceAll("mouth", "mouth01d")
          .replaceAll("nostrils", "nostrils01d")
          .replaceAll("teeth", "teeth01d")
          .replaceAll("extra", "extra01d")
          .replaceAll("eyes", "eyes01d")
          .replaceAll("pupils", "pupils01d")
          .replaceAll("gills", "gills01d") +
        SVGpart03.replaceAll("body", "body01d")
          .replaceAll("fins", "fins01d")
          .replaceAll("underbody", "underbody01d")
          .replaceAll("mouth", "mouth01d")
          .replaceAll("nostrils", "nostrils01d")
          .replaceAll("teeth", "teeth01d")
          .replaceAll("extra", "extra01d")
          .replaceAll("eyes", "eyes01d")
          .replaceAll("pupils", "pupils01d")
          .replaceAll("gills", "gills01d") +
        clothingTraits[Math.floor(Math.random() * headTraits.length)] +
        neckTraits[Math.floor(Math.random() * neckTraits.length)] +
        rightFinTraits[Math.floor(Math.random() * rightFinTraits.length)] +
        leftFinTraits[Math.floor(Math.random() * leftFinTraits.length)] +
        headTraits[Math.floor(Math.random() * headTraits.length)] +
        eyesTraits[Math.floor(Math.random() * eyesTraits.length)]
          .replaceAll("body", "body01d")
          .replaceAll("fins", "fins01d")
          .replaceAll("underbody", "underbody01d")
          .replaceAll("mouth", "mouth01d")
          .replaceAll("nostrils", "nostrils01d")
          .replaceAll("teeth", "teeth01d")
          .replaceAll("extra", "extra01d")
          .replaceAll("eyes", "eyes01d")
          .replaceAll("pupils", "pupils01d")
          .replaceAll("gills", "gills01d") +
        mouthTraits[Math.floor(Math.random() * mouthTraits.length)].replaceAll(
          "extra",
          "extra01d"
        ) +
        SVGpart05
    );
  }

  const html = "" + SVG01;
  const html2 = "" + SVG02;
  const html3 = "" + SVG03;
  const html4 = "" + SVG04;
  const html5 = "" + SVG05;
  const html6 = "" + SVG06;

  function App() {
    const T = parse(html);
    return <div className="flex mx-auto">{T}</div>;
  }

  function App1() {
    const T = parse(html2);
    return <div className="flex mx-auto">{T}</div>;
  }

  function App2() {
    const T = parse(html3);
    return <div className="flex mx-auto">{T}</div>;
  }
  function App3() {
    const T = parse(html4);
    return <div className="flex mx-auto">{T}</div>;
  }
  function App4() {
    const T = parse(html5);
    return <div className="flex mx-auto">{T}</div>;
  }
  function App5() {
    const T = parse(html6);
    return <div className="flex mx-auto">{T}</div>;
  }

  return (
    <div className="">
      <div className=" w-80 mt-7">
        <Swiper
          slidesPerView={1}
          keyboard={{
            enabled: true,
            onlyInViewport: false
          }}
          // slidesPerColumn={2}
          // slidesPerColumnFill="row"

          // slidesPerGroup={2}
          // autoplay
          // loop
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
          slideShadow={true}
          effect={"cards"}
          className="rounded-full fixed"
        >
          {slides}
        </Swiper>

        <style>{`
        

        .swiper-button-prev {
          color: #FFFFFF;
          transform: translate(-55px, 15px);
        }

        .swiper-button-next {
          color: #FFFFFF;
          transform: translate(55px, 15px);
            
        }
        
        .swiper1-wrapper {
          height: 500px;
        }
          
        .swiper {
          calc(100vw - 20px)
          padding-bottom: 50px;
          
          justify-content: center;
          align-items: center;
          color: "white";
          background-color: transparent;
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
       
        
        
        
      `}</style>
      </div>
    </div>
  );
}
