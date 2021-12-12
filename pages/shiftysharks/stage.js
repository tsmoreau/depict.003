import { useRouter } from "next/router";
import { ethers } from "ethers";

import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import { sharkStorageAddress, sharkTokenAddress } from "../../config";
import Storage from "../../abis/sharkStorage.json";
import Nav from "../../components/Nav/Nav";

import parse from "html-react-parser";
import DropdownSVG from "../../components/Samples/shiftysharks/dropdownSVGParts";
import DropdownColor from "../../components/Samples/shiftysharks/dropdownColorTraits";
import DropdownHead from "../../components/Samples/shiftysharks/dropdownHeadTraits";
import DropdownEyes from "../../components/Samples/shiftysharks/dropdownEyesTraits";
import DropdownMouth from "../../components/Samples/shiftysharks/dropdownMouthTraits";
import DropdownClothes from "../../components/Samples/shiftysharks/dropdownClothesTraits";
import DropdownNeck from "../../components/Samples/shiftysharks/dropdownNeckTraits";
import DropdownLeftFin from "../../components/Samples/shiftysharks/dropdownLeftFinTraits";
import DropdownRightFin from "../../components/Samples/shiftysharks/dropdownRightFinTraits";
import DropdownExtra from "../../components/Samples/shiftysharks/dropdownExtraTraits";

export default function App(props) {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError
  } = useWeb3React();
  const [sample, setSample] = useState(null);

  async function getSharkSample() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const StorageContract = new ethers.Contract(
      sharkStorageAddress,
      Storage.abi,
      provider
    );

    let response = await StorageContract.getSharkSample();

    setSample(response);
    console.log(response);
  }

  function clearSample() {
    setSample(null);
  }

  return (
    <>
      <div className="z-50">
        <Nav />
      </div>
      <div className=" bg-gradient-to-b from-cyan-300 via-blue-700 to-indigo-800 w-screen min-h-screen flex mx-auto  justify-center">
        <div className="relative w-8/12 mb-72  flex flex-col items-center justify-start mt-24  px-8">
          <p id="title" className="text-7xl mt-0  z-0 ">
            Shifty Sharks Staging!
          </p>
          <button className="my-2 font-mono text-xs rounded  bg-gray-50 text-gray-800 px-3 py-1">
            Storage Contract!!!: {sharkStorageAddress}
          </button>
          {sample !== null ? (
            <div className="relative">
              <div onClick={clearSample} className="absolute top-2 right-2">
                X
              </div>
              <img src={sample} className="w-96 h-96" />
            </div>
          ) : (
            <div onClick={getSharkSample}>No Sample</div>
          )}
          <div className="font-mono rounded-lg flex w-full justify-center flex-col">
            <p className="z-0  text-base items-center w-full flex justify-between mx-auto  rounded-xl my-1 py-1">
              <DropdownSVG />
            </p>
            <p className="z-30  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownColor />
            </p>
            <p className="z-20 text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownHead />
            </p>
            <p className="z-10  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownEyes />
            </p>
            <p className="z-40  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownMouth />
            </p>
            <p className="z-30  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownClothes />
            </p>
            <p className="z-10  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownNeck />
            </p>
            <p className="z-20  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownRightFin />
            </p>
            <p className="z-10  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownLeftFin />
            </p>

            <p className="z-0  text-base items-center w-full flex justify-between mx-auto rounded-xl my-1 py-1">
              <DropdownExtra />
            </p>
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
