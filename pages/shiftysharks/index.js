import Head from "next/head";
import Nav from "../../components/Nav/Nav";

import parse from "html-react-parser";

import Machine from "../../components/Machines/shiftysharks";
import Swiperv from "../../components/Swipers/test2";
import Reveal from "../../components/Modals/SharksReveal";
import { toast, Toaster, ToastBar } from "react-hot-toast";

import React, { useRef, useState, useEffect } from "react";

import useKeepSWRDataLiveAsBlocksArrive from "../../hooks/useKeepSWRDataLiveAsBlocks";

import "swiper/css/bundle";
import "swiper/css/navigation";

import { sharkTokenAddress } from "../../config";
import Token from "../../abis/sharkToken.json";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

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

export default function ShiftySharksMainPage() {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [remaining, setRemaining] = useState([]);

  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
    library
  } = useWeb3React();

  const isConnected = typeof account === "string" && !!library;

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-rpc.com/"
    );
    const signer = provider.getSigner();
    const TokenContract = new ethers.Contract(
      sharkTokenAddress,
      Token.abi,
      provider
    );
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      let meta2 = await TokenContract.totalSupply();
      setSold(parseInt(meta2._hex, 16));
      console.log(meta2);
      if (isConnected === true) {
        let meta4 = await TokenContract.balanceOf(account);
        setNfts(parseInt(meta4._hex, 16));
      }

      let meta3 = 5000 - sold;
      setRemaining(meta3);
    }

    // Execute the created function directly
    anyNameFunction();

    console.log("test");
    console.log(sold);
    console.log({ isConnected });
  });

  const polygonLink = "https://polygonscan.com/address/" + sharkTokenAddress;

  return (
    <div className="text-black">
      <Head>
        <title>Shifty Sharks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex relative  w-screen mx-auto justify-items bg-gradient-to-b from-cyan-300 via-blue-700 to-indigo-800">
        <div className="pt-16 justify-center flex-col mx-auto max-w-7xl w-full h-full ">
          <div className="flex flex-col items-center text-center h-full w-full">
            <Swiperv />
            <p
              id="title"
              className="-mt-6 z-10 w-full text-center text-9xl text-gray-800 font-bold mx-auto"
            >
              Shifty Sharks
            </p>
            <div className="mt-0 px-2 lg:ml-8 text-center font-mono flex flex-col md:flex-row">
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                {sold} Minted
              </div>
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                {remaining} Remaining
              </div>
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                10 Days until Reveal Phase
              </div>{" "}
            </div>

            {isConnected ? (
              <div className="pt-3.5 px-2 lg:ml-8 text-center font-mono flex">
                <div className="rounded-lg bg-gray-100 border px-6 mx-1">
                  {" "}
                  You Own {nfts} Sharks
                </div>
                <span className="hidden">
                  <Reveal />
                </span>
              </div>
            ) : (
              <div></div>
            )}

            <div className="-mt-1">
              {" "}
              <div className="mt-1.5">
                <a href="http://opensea.com">
                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-base justify-center transform translate-y-1 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2011 46.512L22.3952 46.2069L34.1015 27.8939C34.2726 27.6257 34.6748 27.6535 34.8043 27.9447C36.7599 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3947 44.4593 35.3544 46.2069C35.2204 46.4612 35.0724 46.7109 34.9152 46.9513C34.8413 47.0622 34.7164 47.127 34.5823 47.127H22.5432C22.2195 47.127 22.03 46.7756 22.2011 46.512Z"
                        fill="#F9FAFB"
                      />
                      <path
                        d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1303 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.9489C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3022 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.046 56.7435 35.655 57.7283 37.3933 57.7283H43.866V52.675H37.4673C37.139 52.675 36.9449 52.2959 37.1344 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9712 50.8257 38.8358 49.4895 39.6957 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4757 44.3438 41.5497 44.1449C41.6745 43.7936 41.804 43.4653 41.8964 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4466 40.3723 42.4466 39.3459C42.4466 38.9437 42.4281 38.523 42.3911 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4572 32.864 41.3278 32.4618C40.9625 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7618 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2856 24.6437 38.1562 24.371 38.0267 24.112C37.9343 23.9132 37.8279 23.7283 37.7539 23.5434L36.9634 22.0824C36.8524 21.8836 37.0373 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2293 23.0533 42.234 23.0533L42.8858 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0033 18 46.4088 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5203 25.0968 49.5619 25.1153 49.5989 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.334 25.7071 50.5328 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7705 27.8107 52.9185 27.9587C53.7229 28.7076 54.6245 29.5861 55.4844 30.557C55.7248 30.8297 55.9606 31.1071 56.201 31.3984C56.4415 31.6943 56.6957 31.9856 56.9177 32.2769C57.2089 32.6652 57.5233 33.0674 57.7961 33.4882C57.9255 33.687 58.0735 33.8904 58.1983 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4096 36.2529 59.5206 36.5257C59.8488 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.362 39.0963 60.3805 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3435 42.2956C60.2742 42.6239 60.1817 42.9336 60.0708 43.2619C59.9598 43.5763 59.8488 43.9045 59.7055 44.2143C59.4281 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4387 46.5583 58.2908 46.7802C58.129 47.016 57.9625 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.1719 48.2828C56.9731 48.5556 56.7697 48.8284 56.5478 49.0688C56.238 49.434 55.9421 49.7808 55.6324 50.1137C55.4474 50.331 55.2486 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.458 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0895 52.638 52.9924 52.675 52.8907 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2135 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1031 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z"
                        fill="#F9FAFB"
                      />
                    </svg>
                  </button>
                </a>
                <a href={polygonLink}>
                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-base justify-center  transform translate-y-1 pt-2 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    <svg
                      className="w-8 h-8"
                      width="1024"
                      height="1024"
                      viewBox="0 0 1024 1024"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="512" cy="512" r="512" />
                      <path
                        d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.326V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.647V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.526 186.567 534.623 200.076 541.767L341.301 620.354C353.582 627.498 369.546 627.498 383.055 620.354L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.954C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.554L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.354V675.126C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.126V516.763C844.799 502.474 837.431 489.377 823.922 482.233L681.469 402.456Z"
                        fill="#F9FAFB"
                      />
                    </svg>
                  </button>
                </a>
                <a href="https://discord.gg/WCFTZ7sUV4">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full  mx-0.5 inline-flex text-base justify-center  transform -translate-y-0.5 mt-0 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    <svg
                      className="w-5 h-5 mt-1"
                      viewBox="0 0 71 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Untitled">
                        <path
                          d="M60.1045+4.8978C55.5792+2.8214+50.7265+1.2916+45.6527+0.41542C45.5603+0.39851+45.468+0.440769+45.4204+0.525289C44.7963+1.6353+44.105+3.0834+43.6209+4.2216C38.1637+3.4046+32.7345+3.4046+27.3892+4.2216C26.905+3.0581+26.1886+1.6353+25.5617+0.525289C25.5141+0.443589+25.4218+0.40133+25.3294+0.41542C20.2584+1.2888+15.4057+2.8186+10.8776+4.8978C10.8384+4.9147+10.8048+4.9429+10.7825+4.9795C1.57795+18.7309-0.943561+32.1443+0.293408+45.3914C0.299005+45.4562+0.335386+45.5182+0.385761+45.5576C6.45866+50.0174+12.3413+52.7249+18.1147+54.5195C18.2071+54.5477+18.305+54.5139+18.3638+54.4378C19.7295+52.5728+20.9469+50.6063+21.9907+48.5383C22.0523+48.4172+21.9935+48.2735+21.8676+48.2256C19.9366+47.4931+18.0979+46.6+16.3292+45.5858C16.1893+45.5041+16.1781+45.304+16.3068+45.2082C16.679+44.9293+17.0513+44.6391+17.4067+44.3461C17.471+44.2926+17.5606+44.2813+17.6362+44.3151C29.2558+49.6202+41.8354+49.6202+53.3179+44.3151C53.3935+44.2785+53.4831+44.2898+53.5502+44.3433C53.9057+44.6363+54.2779+44.9293+54.6529+45.2082C54.7816+45.304+54.7732+45.5041+54.6333+45.5858C52.8646+46.6197+51.0259+47.4931+49.0921+48.2228C48.9662+48.2707+48.9102+48.4172+48.9718+48.5383C50.038+50.6034+51.2554+52.5699+52.5959+54.435C52.6519+54.5139+52.7526+54.5477+52.845+54.5195C58.6464+52.7249+64.529+50.0174+70.6019+45.5576C70.6551+45.5182+70.6887+45.459+70.6943+45.3942C72.1747+30.0791+68.2147+16.7757+60.1968+4.9823C60.1772+4.9429+60.1437+4.9147+60.1045+4.8978ZM23.7259+37.3253C20.2276+37.3253+17.3451+34.1136+17.3451+30.1693C17.3451+26.225+20.1717+23.0133+23.7259+23.0133C27.308+23.0133+30.1626+26.2532+30.1066+30.1693C30.1066+34.1136+27.28+37.3253+23.7259+37.3253ZM47.3178+37.3253C43.8196+37.3253+40.9371+34.1136+40.9371+30.1693C40.9371+26.225+43.7636+23.0133+47.3178+23.0133C50.9+23.0133+53.7545+26.2532+53.6986+30.1693C53.6986+34.1136+50.9+37.3253+47.3178+37.3253Z"
                          opacity="1"
                          fill="#F9FAFB"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            <div className="  justify-center mt-0 lg:mt-0 w-11/12 rounded-lg flex flex-col lg:flex-row">
              <div className="mt-4 ml-0 lg:ml-16 w-full lg:w-3/5 py-8 lg:py-8 lg:px-12">
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul className="">
                    <li className="px-1 lg:px-4 py-2">
                      Shifty Sharks is a Fully On-Chain PFP Project on Polygon
                      Network, with reveal mechanics and using Chainlink for DNA
                      generation.
                    </li>
                    <li className="px-1 lg:px-4 py-2">
                      Everything is Fully On-Chain, from the randomness
                      generation, to the metadata, to the image itself.
                    </li>
                  </ul>
                </div>

                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 lg:px-8 py-1.5">
                      Minting Cost is 3 MATIC.
                    </li>
                    <li className="px-1 lg:px-8 py-1.5">
                      Reveal Cost is 6 MATIC.
                    </li>
                    <li className="px-1 lg:px-8 py-1.5">
                      Total Cost is ~10-12 MATIC with current gas prices.
                    </li>
                    <li className="px-1 lg:px-8 py-1.5">
                      Unrevealed sharks are fully tradeable on OpenSea.
                      Revealing is done individually per token here on Depict,
                      and is not required.
                    </li>
                  </ul>
                </div>
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 lg:px-8 py-2">
                      Reveal Phase will unlock two weeks after project launch or
                      24hrs after sell out, whichever comes first.
                    </li>
                  </ul>
                </div>
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 lg:px-8 py-1.5">
                      Trading of Traits and Re-Rolling of Shark DNA Randomness
                      (Mutation) are coming in 2022.
                    </li>
                    <li className="px-1 py-2 lg:px-8 hidden lg:flex">
                      To Mint, see machine at right, for more project
                      information see below.
                    </li>
                    <li className="px-1 py-2 lg:px-8 lg:hidden ">
                      To Mint, see machine below, for more project information
                      see further below machine.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="-mt-1  w-full lg:w-1/2">
                <Machine />
              </div>
            </div>
            <div className="mt-12 flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold text-xl py-1">How Does It Work?</p>
              <div className=" my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Shifty Sharks is a Profile Picture NFT project on Polygon
                Network. The art, revealed and unrevealed, is fully on chain and
                open-sourced under the CC0 Creative Commons License, and all
                Shark traits are randomized via Chainlink. To obtain a Shark,
                login to Depict with the "connect" button in the upper right
                hand corner and then click the "Mint" button on the vending
                machine above once connected.
              </div>
            </div>
            <div className=" flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold text-xl py-1">Fully On Chain PFP</p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Shifty Sharks are premium NFTs and their art and metadata are
                fully on-chain. This means no reliance on IPFS, or any other
                chain. Your Shark survives as long as Polygon exists. We also do
                not assemble the metadata each time the tokenURI function is
                called, but instead fully embed the SVG into the URI field. We
                are as fully-on-chain as it is possible to be.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold text-xl py-1">
                Individual Reveal Mechanic
              </p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Shifty Sharks must be individually revealed and are fully
                tradable before the reveal period begins. Sharks cost 3 MATIC to
                mint, and 6 MATIC to reveal. Individual Reveal Mechanics allow
                for complete User Curation over trait liquidity and value. The
                supply and value of traits will alter as users reveal more
                sharks. Trait Trading, launching in Q1 2022, will also allow
                users to gain value from sharks with fewer rare traits.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold text-xl py-1">Traits Details</p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Traits are derived from a random value gotten from Chainlink.
                Sections of this value map to Trait Types (see tables below for
                more information on trait types). The values of these sections
                determine the type of trait selected. Some traits are part of a
                set, but not all. Trait Trading is currently set to launch in Q1
                2022 to allow users to gain value from curation of specific
                sharks and traits to gain traits they would not otherwise have
                via randomness by Trading Traits with other users. This will
                also be fully on-chain. Re-Rolling Randomness for your Shark's
                DNA will launch at the same time as Trait Trading. Both will be
                tracked as "Mutations" in the Shark metadata, and the number of
                Mutations will be surfaced on OpenSea. We aniticpate that Sharks
                with the most rare traits and least mutations will be most
                valuable over time.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold text-xl py-1">Traits Tables</p>
              <div className="my-1 px-2 py-4 flex flex-col justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                <table class="table-auto mb-2">
                  <tbody className="">
                    <tr className="">
                      <td>Levels of Trait Rarity:</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Total Number of Trait Sets:</td>

                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Total Number of Traits:</td>

                      <td>120</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6 mb-2 font-bold">Traits Rarity List:</div>
                <div className="mt-2  w-64 lg:w-96 flex flex-wrap justify-center">
                  <span className="mx-1 my-0.5 text-gray-400 border bg-gray-100 rounded-lg px-4 py-0.5">
                    Common
                  </span>

                  <span className="mx-1 my-0.5 border bg-green-500 rounded-lg px-4 py-0.5">
                    Uncommon
                  </span>

                  <span className="mx-1 my-0.5 border bg-blue-500 rounded-lg px-4 py-0.5">
                    Rare
                  </span>

                  <span className="mx-1 my-0.5 border bg-purple-600 rounded-lg px-4 py-0.5">
                    Epic
                  </span>

                  <span className="mx-1 my-0.5 border bg-orange-500 rounded-lg px-4 py-0.5">
                    Legendary
                  </span>
                </div>
                <div className="mt-6 font-bold">Traits Sets List:</div>
                <div className="mt-2 mb-2 flex flex-wrap px-6 lg:px-36">
                  Base, Fancy, French, Western, Clown, Baseball, Punk, Sci-Fi,
                  Western, Hippy, Chad, Virgin, Chef, Ape, Caveshark, Wizard &
                  more...
                </div>
                <div className="mt-6 font-bold">Traits Type List:</div>
                <div className="mt-2 mb-2 px-6 lg:px-36">
                  Color, Head Item, Eyes Item, Mouth Item, Clothing Item,
                  Necklace, Left Fin Item, Right Fin Item, Animation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-44 shadow-lg pt-12 h-36 bg-indigo-800 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-100">
        <ul className="w-44 text-gray-200 pt-6 font-mono text-sm flex flex-row justify-center text-center mx-auto">
          <li className=" mx-1.5">
            <a href="/faq" className="cursor-pointer">
              faq
            </a>
          </li>
          <li className=" mx-1.5">
            <a href="" className="cursor-pointer">
              blog
            </a>
          </li>
          <li className=" mx-1.5">
            <a href="/contact" className="cursor-pointer">
              contact
            </a>
          </li>
        </ul>
        <ul className="w-56 text-gray-200 mt-3 font-mono text-sm flex flex-col mx-auto">
          <li className="flex justify-center">Decentralized Pictures LLC</li>
          <li className="flex justify-center">Terms & Conditions</li>
          <li className="flex justify-center">Privacy Policy</li>
        </ul>
      </div>

      <style jsx>{`
div {
  overflow: hidden;
}

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
    </div>
  );
}
