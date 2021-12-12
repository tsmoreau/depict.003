import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/Nav/Nav";
import { render, ReactDOM } from "react-dom";
import parse from "html-react-parser";
import TEST from "../../components/Swipers/SwiperSharkMainPage";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  colorParts,
  eyeParts,
  mouthParts,
  clothesParts,
  neckParts,
  leftfinParts,
  rightfinParts,
  eyesTraits,
  eyeNames,
  headParts,
  mouthTraits,
  mouthNames,
  clothingTraits,
  clothingNames,
  neckTraits,
  neckNames,
  leftFinTraits,
  leftFinNames,
  rightFinTraits,
  rightFinNames,
  extraTraits,
  extraNames
} from "../../components/Samples/shiftysharks/traits_mutator";

export default function App(props) {
  const [count, setCount] = React.useState(0);
  const [countUseEffect, setCountUseEffect] = React.useState(0);
  const [countNoEffect, setCountNoEffect] = React.useState(0);
  const [initialValue] = React.useState(count);
  const [test, setTest] = React.useState("");

  console.log(headParts[0].svgcode);

  const [colorTrait, setColorTrait] = React.useState(colorParts[0].svgcode);
  const [headTrait, setHeadTrait] = React.useState(0);
  const [eyeTrait, setEyeTrait] = useState(0);
  const [mouthTrait, setMouthTrait] = useState(0);
  const [clothingTrait, setClothingTrait] = useState(0);
  const [leftFinTrait, setLeftFinTrait] = useState(0);
  const [rightFinTrait, setRightFinTrait] = useState(0);
  const [neckTrait, setNeckTrait] = useState(0);

  const [colorCounter, setColorCounter] = React.useState(0);
  const [headCounter, setHeadCounter] = React.useState(0);
  const [eyeCounter, setEyeCounter] = React.useState(0);
  const [mouthCounter, setMouthCounter] = React.useState(0);
  const [clothingCounter, setClothingCounter] = React.useState(0);
  const [leftFinCounter, setLeftFinCounter] = React.useState(0);
  const [rightFinCounter, setRightFinCounter] = React.useState(0);
  const [neckCounter, setNeckCounter] = React.useState(0);

  const [colorName, setColorName] = useState("Base");
  const [headName, setHeadName] = useState("No Hat Trait");
  const [eyeName, setEyeName] = useState("No Eyes Trait");
  const [mouthName, setMouthName] = useState("No Mouth Trait");
  const [clothingName, setClothingName] = useState("No Clothing Trait");
  const [leftFinName, setLeftFinName] = useState("No Left Fin Trait");
  const [rightFinName, setRightFinName] = useState("No Right Fin Trait");
  const [neckName, setNeckName] = useState("No Necklace Trait");

  React.useEffect(
    () => {
      setColorTrait(colorParts[colorCounter].svgcode);
      setColorName(colorParts[colorCounter].name);
    },
    [colorCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setHeadTrait(parse(headParts[headCounter].svgcode));
      setHeadName(headParts[headCounter].name);
      console.log(headCounter);
    },
    [headCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setEyeTrait(parse(eyeParts[eyeCounter].svgcode));
      setEyeName(eyeParts[eyeCounter].name);
      console.log(eyeCounter);
    },
    [eyeCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setMouthTrait(parse(mouthParts[mouthCounter].svgcode));
      setMouthName(mouthParts[mouthCounter].name);
      console.log(mouthCounter);
    },
    [mouthCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setClothingTrait(parse(clothesParts[clothingCounter].svgcode));
      setClothingName(clothesParts[clothingCounter].name);
      console.log(clothingCounter);
    },
    [clothingCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setNeckTrait(parse(neckParts[neckCounter].svgcode));
      setNeckName(neckParts[neckCounter].name);
      console.log(neckCounter);
    },
    [neckCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setLeftFinTrait(parse(leftfinParts[leftFinCounter].svgcode));
      setLeftFinName(leftfinParts[leftFinCounter].name);
      console.log(leftFinCounter);
    },
    [leftFinCounter] // Only updates when count updates
  );

  React.useEffect(
    () => {
      setRightFinTrait(parse(rightfinParts[rightFinCounter].svgcode));
      setRightFinName(rightfinParts[rightFinCounter].name);
      console.log(rightFinCounter);
    },
    [rightFinCounter] // Only updates when count updates
  );

  function colorUp() {
    if (colorCounter < colorParts.length - 1) {
      setColorCounter(colorCounter + 1);
    } else {
      setColorCounter(0);
    }
  }
  function colorDown() {
    if (colorCounter >= 1) {
      setColorCounter(colorCounter - 1);
    } else if (colorCounter < 1) {
      setColorCounter(colorParts.length - 1);
    }
  }

  function headUp() {
    if (headCounter < headParts.length - 1) {
      setHeadCounter(headCounter + 1);
    } else {
      setHeadCounter(0);
    }
  }
  function headDown() {
    if (headCounter >= 1) {
      setHeadCounter(headCounter - 1);
    } else if (headCounter < 1) {
      setHeadCounter(headParts.length - 1);
    }
  }

  function eyeUp() {
    if (eyeCounter < eyeParts.length - 1) {
      setEyeCounter(eyeCounter + 1);
    } else {
      setEyeCounter(0);
    }
  }
  function eyeDown() {
    if (eyeCounter >= 1) {
      setEyeCounter(eyeCounter - 1);
    } else if (eyeCounter < 1) {
      setEyeCounter(eyeParts.length - 1);
    }
  }

  function mouthUp() {
    if (mouthCounter < mouthParts.length - 1) {
      setMouthCounter(mouthCounter + 1);
    } else {
      setMouthCounter(0);
    }
  }
  function mouthDown() {
    if (mouthCounter >= 1) {
      setMouthCounter(mouthCounter - 1);
    } else if (mouthCounter < 1) {
      setMouthCounter(mouthParts.length - 1);
    }
  }

  function clothingUp() {
    if (clothingCounter < clothesParts.length - 1) {
      setClothingCounter(clothingCounter + 1);
    } else {
      setClothingCounter(0);
    }
  }
  function clothingDown() {
    if (clothingCounter >= 1) {
      setClothingCounter(clothingCounter - 1);
    } else if (clothingCounter < 1) {
      setClothingCounter(clothesParts.length - 1);
    }
  }

  function leftFinUp() {
    if (leftFinCounter < leftfinParts.length - 1) {
      setLeftFinCounter(leftFinCounter + 1);
    } else {
      setLeftFinCounter(0);
    }
  }
  function leftFinDown() {
    if (leftFinCounter >= 1) {
      setLeftFinCounter(leftFinCounter - 1);
    } else if (leftFinCounter < 1) {
      setLeftFinCounter(leftfinParts.length - 1);
    }
  }

  function rightFinUp() {
    if (rightFinCounter < rightfinParts.length - 1) {
      setRightFinCounter(rightFinCounter + 1);
    } else {
      setRightFinCounter(0);
    }
  }
  function rightFinDown() {
    if (rightFinCounter >= 1) {
      setRightFinCounter(rightFinCounter - 1);
    } else if (rightFinCounter < 1) {
      setRightFinCounter(rightfinParts.length - 1);
    }
  }

  function neckUp() {
    if (neckCounter < neckParts.length - 1) {
      setNeckCounter(neckCounter + 1);
    } else {
      setNeckCounter(0);
    }
  }
  function neckDown() {
    if (neckCounter >= 1) {
      setNeckCounter(neckCounter - 1);
    } else if (neckCounter < 1) {
      setNeckCounter(neckParts.length - 1);
    }
  }

  return (
    <>
      <div className="items-center  bg-gradient-to-b from-cyan-300 via-blue-700 to-indigo-800 w-screen min-h-screen flex mx-auto flex-col ">
        <p id="title" className="text-7xl mt-6 -mb-4 z-40 ">
          Shifty Sharks!
        </p>
        <div className="flex  w-9/12 h-min">
          <div className="w-8/12 flex flex-col items-end  px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1080 1080"
              {...props}
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1={-840.46}
                  y1={-298.47}
                  x2={239.86}
                  y2={-298.47}
                  gradientTransform="rotate(90 -299.245 540.755)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#ffee6f" />
                  <stop offset={1} stopColor="#edb705" />
                </linearGradient>
                <style>
                  {
                    ".body,.underbody,.nostrils,.mouth,.eyes,.pupils,.teeth,.fins,.gills{stroke:#606060;}.body,.underbody,.nostrils,.eyes,.pupils,.teeth,.fins,.gills{stroke-width:2.2px;}.bg,.nostrils,.eyes,.pupils,.teeth,.fins,.body,.underbody,.gills{stroke-linecap:round;stroke-linejoin:round;}fill:url(#linear-gradient);}.bg,.body,.underbody,.nostrils,.eyes,.pupils,.mouth,.teeth,.fins,.gills,.shadow{fill-rule:evenodd}"
                  }
                  {colorTrait}
                </style>
              </defs>
              <path
                d="M1080.36-.46v1080.32H-.39V-.46Z"
                style={{
                  fill: "url(#linear-gradient)"
                }}
              />
              <ellipse
                cx={577.59}
                cy={552.67}
                rx={108.08}
                ry={164.28}
                className="mouth"
              />
              <ellipse
                cx={577.59}
                cy={595.9}
                rx={237.77}
                ry={72.19}
                className="mouth"
              />
              <path
                className="teeth"
                d="M579.37 538.8c22.79-15.51 18.77-24.86 12.88 13.17 33.58-14.09 17.83-20.42 19.09 13.26 30.26-11.71 16.28-31.89 18.08 10.41 23.43-13.4 23.38-26.43 19.48 7.64 1 3.17 18.9-15.71 21.42-18 1 3.56-.22 17.6-1.44 26.06 6.54-6.54 14-15.23 20.58-18.13-7.75 27.18-20.41 34 13.92 5.32a58.29 58.29 0 0 0-5.62 23.5c14.8-7.91 30-27.85 21.57-11.87-18.89 32 4.51 8.89 17.14 1.25-1.29 3.84-5.71 13.36-7.4 19.31 4.37-2.35 14.53-10.92 22.79-16-2.48 7.32-7.87 16.33-10 21.46 8.64-5.19 16.17-12.73 24.88-18.65-6.82 10-8.39 20.17-10.24 22.92 6.57-3.8 25-20.92 28.46-23.7-11.14 32-5.87 26 13-2.11 0 0-8.31 23-4.57 22.36 11.93-6.46 18.65-34.08 18.77-10.09 11.82-10.77 4.35-9.14 5.34-10.51-9.77 84.3-243.68 34.35-241.66-38.78"
              />
              <path
                className="teeth"
                d="M833 565.23c-12.16-1.3-30.88 12.74-43.84 13.25 5.91-8.11 16.76-24.08-.13-16.73-19.57 5-26.73 21.35-17.72-7.59 2.32-10.3-18.77 9.15-28.62 15.3a205.82 205.82 0 0 1 2.81-26c-3.46 2.37-18.3 17.44-30.19 22.77.79-5 17.79-32 3.89-23.38-29.6 22-24.09 25.61-18.7-8.39-11.45 3.42-15.62 20.73-28.42 23.39 1.78-9.91 6.3-20.45 3.67-31.18-.4-9.79-20.67 24.36-26.69 26.28.78-5.09 8.64-30.11 8.64-40.55-3.78 6.43-22.91 22.69-28.38 27.75-1.82-6.39 1.22-18.48-.89-28.84-4.65 5 4.1-5.2-26 21.24-1.3-41.05 14.19-34.12-28.69-3.68 12.59-53.78 17.59-52.25 70.89-47.2 41.26 9.4 89 4.35 122.94 30.08"
              />
              <path
                className="fins"
                d="M540.37 743.23c113.18 39.29 207.24 164.95 228 151.61 6.6-9.14-23.43-178.42-111.45-249.36-59.7-33.59-139.92 36.1-116.55 97.75ZM310.81 447.43c32.74 0 209.53-81.27 172.05-131.28S259.8 167.36 160.8 247.45c61.12 21.47 158.78 106.22 150.01 199.98Z"
              />
              <path
                className="body"
                d="M911.82 485.28c-9-2.51-302.21-6.79-362.41-28.75C567.56 642.6 422.62 959.82 510 1080.12c-22.52 0-139.93 3.85-226.57-.21 0 0-190.64-363.79-30.13-611 10.46-17 51.06-76.56 96.84-106.65 111.7-85 257.35-104.66 383.28-59.35 69 23.95 102.62 65.32 142.35 95.75 102.69 89.15 72.82 56.21 36.05 86.62Z"
              />
              <path
                d="M896.85 557.77c-23.09 8.91-29.31 15.91-53.39 10.16-9-2.51-129.34-28.49-172-39.69-22.57-6.22-22.57-11.5-51.1-21.44-43.19-8.52-22-4.84-64-42.54 19.2 63.74 27.64 88.41 53.09 106.09 19.42 12.84 114 49.07 158.27 52.91 55 2.51 59-29.91 29.44-54.38-36.4-27.67 81.66 31.08-17.55 78.55-56.76 21.44-109.94 12.57-113.09 15.78-56.68 21.44-119.32 115.86-142.44 165.27C510 858.57 466.62 923.93 510 1080c-44.78 0-48.66 2.61-125.63-.21-56-146.93-52.56-267.39 109.16-447.22 24.82-25.85 57.67-36.36 46.47-80.67-32.12-127.14-39.51-151.48 68.44-101.2 31 10.72 129.9-17.72 187.62-9.55 74.18 10.5 129 42.28 130.77 1.55 13.36 10.16 20.71 17.3 36 35.15 21.86 25.84-2.22 39.24-65.98 79.92Z"
                className="underbody"
              />
              <path
                className="teeth"
                d="M790.53 560.45c7.69-1.06 8.22-2.3 12.11-1.65-.2 3.46 0 19.7.72 22.83 4.29-2.54 9.71-10.78 12-15 1.22 4.86-12.67 36.46-2.12 26.16 14.84-25.07 4.35 13.7-1 14.09 0 0-2.35-6.91-3.21-8.72-2.52-5-19.4-30.34-23.5-34.15"
              />
              <g id="gills_ts" data-name="gills ts">
                <path
                  d="M425.29 489.77c-.51-1.86 3.81 18.37 5.54 23.08 12.19 33.77 22 47.82 50.66 70.21-19.32-17.42-29.05-49.54-36.14-76-4.58-17.25-3.28-41 7.48-6.44 10.9 27.4 32.29 49.71 52.35 70.46-17.37-17.16-27.66-39.73-31.6-63.63-4.15-20.62-6.44-46.26 4.63-64.59 1.81 36.05 11.37 72.89 38.47 99.17 2.34 2.64 5.19 6.18 7.4 8.39-33.25-39.39-30.87-96-40-141.84-27.54 29.22-32.81 63.42-17.81 99.95-5.41-13.1-19.63-43.15-19.24-74.45-1.6-18.84-9.73 15.48-10.33 21.92-1.56 15.57-2.9 25.55-.65 40.9 1.25 8.51 2 17.68 3.15 20.53-8.6-21.35-8.43-36.31-12.32-54.42-.21-1.86.05-3.89-.21-5.71-2.6 13.57-4.46 19.24-1.39 32.51"
                  id="gills"
                  style={{
                    fill: "#de9f90",
                    strokeWidth: "2.2px",
                    stroke: "#606060"
                  }}
                />
              </g>
              <path
                className="body"
                d="M737.24 1080.64s16.43 14.35 33-60.35c-20.42-38 7.59-96.37 35.79-115.77-28.13 95-16.07 116.51 27.71 140.89-5.14 3.5-25.09-2.1-39.37-1.56-8.87.33-9.56 36.75-9.56 36.75 1.11 1.4-47.57.04-47.57.04Z"
              />
              <path
                className="fins"
                d="M111.23 928.12c-15.83-31 46.17-225.53 156.88-295.91 123.33-78.42 114.9 48.46 169.76 65.41-145.38 58.75-252.5 174.78-299.45 213.73-10.42 8.65-22.61 19.76-27.19 16.77Z"
              />
              <path
                className="nostrils"
                d="M918 479.69s4.84 3.72 15.79 7.71c7.21-2.74-9.26-9.59-15.79-7.71ZM808.33 468.74c2.75 5.56-2.21 12.37 26.92 14.64-26.92-14.64-39.87-20.48-26.92-14.64Z"
              />
              <path
                className="eyes"
                d="M602.37 368.79c-10.37 2.82 51 10.26 47 27.45-7.64-8.34-25.59-10.45-36.31-11.86-45.78-3.06-20.47-5-3.82 8.73 4.41 8.18 13.83 19.11 42 13.63 9-1 17.48 10.14 22 13 26.25-3 37.67-2.74 1.85-4.86-6.77-1.68-18-12.1-22.36-16.42.39-4.15-2.75-11.64-4.41-14.93-10.52-4.01-33.79-17.05-45.95-14.74ZM822.28 375.56c-5.19 3.65-12 9.95-9.57 14.57 5.47 10.19 14.92 18 25.15 24.52 17.91 11.32 25.08 10.58 25.08 10.58s-19.85-9.91-21.54-14.07-.55-13.27-4.37-15.66c-5.9-3.72-15.74-2.78-20.43-5.25 1.4-4.19.27-5.95 5.68-14.69Z"
              />
              <path
                className="teeth"
                d="M839.67 567.1c-11.63-1.65-36.86 7.65-50.52 11.38 5.91-8.11 16.76-24.08-.13-16.73-19.57 5-30.46 29.07-18.44-9.78 12.49 2.91 46.93 9.85 69.09 15.26"
              />
              <path
                d="M785.45 632.6c-26.25 25.72-87.68 24-124.81 22.39-48.29-4.45-97.44-6.83-136.61-32 54.16 49.74 87.52 46.47 107.65 43.75C595.33 692 552.3 746.38 546 756.85c-47 78.07-98.4 152.81-52.06 323.15-35.36 0-110 1.65-155.93 1.65-25.72-52.4-38.86-99.65-38.26-187.92.31-47.3 17.08-120.14 39.3-144.31 6.66-7.22 81.55-45.75 98.82-52-14.18-2.25-36.66-30.65-52.22-57.11-22.48-38.22 86-147.42 134.19-176.08 5.1 51.4 19.19 108.55 72.28 135.4C672.1 640.12 736 636.75 785.45 632.6Z"
                style={{
                  opacity: 0.14,
                  isolation: "isolate"
                }}
              />
              <g id="pupils_to" data-name="pupils to">
                <ellipse
                  cx={835.25}
                  cy={400.5}
                  rx={4.65}
                  ry={6}
                  className="pupils"
                />
                <circle cx={642.01} cy={396.18} r={6} className="pupils" />
              </g>

              {clothingTrait}

              {neckTrait}
              {rightFinTrait}
              {leftFinTrait}
              {headTrait}
              {mouthTrait}
              {eyeTrait}
            </svg>
            <p className="flex mx-auto text-gray-50">
              DNA:{colorCounter}:{headCounter}:{clothingCounter}:{eyeCounter}:
              {mouthCounter}:{neckCounter}:{leftFinCounter}:{rightFinCounter}
              :0:0
            </p>
            <div className="flex mx-auto border justify-center">
              <input
                type="text"
                value={test}
                onInput={(e) => setTest(e.target.value)}
              />
            </div>
            {test}
          </div>
          <div className="w-4/12 mt-24 text-gray-50 flex  translate  justify-start items-start  mx-auto">
            <ul>
              <li className="flex border items-center mx-auto text-2xl rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={colorDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">{colorName}</p>
                <p className="cursor-pointer" onClick={colorUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={headDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">{headName}</p>
                <p className="cursor-pointer" onClick={headUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={eyeDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">{eyeName}</p>
                <p className="cursor-pointer" onClick={eyeUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={mouthDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">{mouthName}</p>
                <p className="cursor-pointer" onClick={mouthUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={clothingDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">
                  {clothingName}
                </p>
                <p className="cursor-pointer" onClick={clothingUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={neckDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">{neckName}</p>
                <p className="cursor-pointer" onClick={neckUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={leftFinDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">
                  {leftFinName}
                </p>
                <p className="cursor-pointer" onClick={leftFinUp}>
                  ►
                </p>
              </li>
              <li className="flex items-center mx-auto text-2xl border rounded-xl px-4 py-1 shadow-lg my-2">
                <p className="cursor-pointer" onClick={rightFinDown}>
                  ◄
                </p>
                <p className="w-32 text-sm flex justify-center">
                  {rightFinName}
                </p>
                <p className="cursor-pointer" onClick={rightFinUp}>
                  ►
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: myFirstFont1;
          src: url(/fonts/BlankRiver.ttf);
        }

          #title {
            font-family: myFirstFont1;
            text-shadow: 3px 4px white;
          }

          
        }
      `}</style>
    </>
  );
}
