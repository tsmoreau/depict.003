import { useRouter } from "next/router";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { toast, Toaster, ToastBar } from "react-hot-toast";

import { sharkStorageAddress, sharkTokenAddress } from "../../config";
import Storage from "../../abis/sharkStorage.json";
import Token from "../../abis/sharkToken.json";
import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import Machine from "../../components/Machines/shiftysharks/id";
import useEagerConnect from "../../hooks/useEagerConnect";

import {
  colorParts,
  headParts,
  clothesParts,
  eyeParts,
  mouthParts,
  neckParts,
  leftfinParts,
  rightfinParts,
  extraParts
} from "../../components/Samples/shiftysharks/traits";

export default function Home() {
  const [revealed, setRevealed] = useState([]);
  const [tokenname, setTokenName] = useState([]);
  const [image, setImage] = useState([]);
  const [owner, setOwner] = useState([]);
  const [owner2, setOwner2] = useState([]);
  const [dna, setDNA] = useState([]);
  const [exists, setExists] = useState(true);
  const [rawdna, setRawDNA] = useState(false);

  const [okaymint, setOkayMint] = useState(true);

  const [colorname, setColorName] = useState([]);
  const [colorrarity, setColorRarity] = useState([]);

  const [headname, setHeadName] = useState([]);
  const [headrarity, setHeadRarity] = useState([]);

  const [eyename, setEyeName] = useState([]);
  const [eyerarity, setEyeRarity] = useState([]);

  const [mouthname, setMouthName] = useState([]);
  const [mouthrarity, setMouthRarity] = useState([]);

  const [clothesname, setClothesName] = useState([]);
  const [clothesrarity, setClothesRarity] = useState([]);

  const [neckname, setNeckName] = useState([]);
  const [neckrarity, setNeckRarity] = useState([]);

  const [leftfinname, setLeftFinName] = useState([]);
  const [leftfinrarity, setLeftFinRarity] = useState([]);

  const [rightfinname, setRightFinName] = useState([]);
  const [rightfinrarity, setRightFinRarity] = useState([]);

  const [extraname, setExtraName] = useState([]);
  const [extrararity, setExtraRarity] = useState([]);

  const router = useRouter();

  let id;
  id = router.query.id;
  if (!id && typeof window !== "undefined") {
    id = window.location.pathname.split("/").pop();
  }

  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError
  } = useWeb3React();

  const polygonScan =
    "https://mumbai.polygonscan.com/address/" + sharkTokenAddress;

  const openSea =
    "https://testnets.opensea.io/assets/mumbai/" +
    sharkTokenAddress +
    "/" +
    router.query.id;

  const url = "/shiftysharks/" + (parseInt(router.query.id, 10) - 1);

  const url2 = "/shiftysharks/" + (parseInt(router.query.id, 10) + 1);

  const notify = () => toast("Here is your toast.");

  useEffect(() => {
    async function loadNFTs() {
      /* create a generic provider and query for unsold market items */

      const provider2 = new ethers.providers.JsonRpcProvider(
        "https://rpc-mumbai.maticvigil.com/v1/e6345d73074224afbdb82efbda0d99df0c9e3e1d"
      );

      const TokenContract = new ethers.Contract(
        sharkTokenAddress,
        Token.abi,
        provider2
      );

      const sharkInfo = await TokenContract.idToShark(id);
      setRevealed(sharkInfo[3]);
      setRawDNA(sharkInfo[1]._hex.toString(16));
      console.log("rawdna");
      const dnas = ("0" + Number(sharkInfo[1]).toString(16))
        .slice(-2)
        .toUpperCase();

      console.log(sharkInfo[1]._hex.toString(16));
      console.log("revealed");
      console.log(sharkInfo[3]);

      if (sharkInfo[1].length < 8) {
        console.log("No ChainLink");
      }

      let supply = await TokenContract.totalSupply();
      console.log(parseInt(supply._hex, 16));
      let sup = parseInt(supply._hex, 16);
      console.log(id, sup);

      if (id < sup) {
        console.log("exists");
        setExists(true);
        console.log(exists);
      } else if (id >= sup) {
        console.log("does not exist");
        setExists(false);
        console.log(exists);
      }

      if (sharkInfo[3] === true) {
        let rawdna = await TokenContract.getFinalDNA(id);
        let finaldna = [];
        let count = 0;

        for (let i = 0; i < rawdna.length; i++) {
          finaldna[count] = parseInt(rawdna[count]._hex, 16);
          count++;
        }

        console.log("DNA");
        console.log(finaldna);
        setDNA(finaldna);

        setColorName(colorParts[finaldna[0]].name);

        if (colorParts[finaldna[0]].rarity === "Common") {
          setColorRarity(0);
        }
        if (colorParts[finaldna[0]].rarity === "Uncommon") {
          setColorRarity(1);
        }
        if (colorParts[finaldna[0]].rarity === "Rare") {
          setColorRarity(2);
        }
        if (colorParts[finaldna[0]].rarity === "Epic") {
          setColorRarity(3);
        }
        if (colorParts[finaldna[0]].rarity === "Legendary") {
          setColorRarity(4);
        }

        if (finaldna[1] > 0) {
          setHeadName(headParts[finaldna[1] - 1].name);

          if (headParts[finaldna[1] - 1].rarity === "Common") {
            setHeadRarity(1);
          }
          if (headParts[finaldna[1] - 1].rarity === "Uncommon") {
            setHeadRarity(2);
          }
          if (headParts[finaldna[1] - 1].rarity === "Rare") {
            setHeadRarity(3);
          }
          if (headParts[finaldna[1] - 1].rarity === "Epic") {
            setHeadRarity(4);
          }
          if (headParts[finaldna[1] - 1].rarity === "Legendary") {
            setHeadRarity(5);
          }
          if (finaldna[1] === 0) {
            setHeadRarity(0);
          }
        }

        if (finaldna[2] > 0) {
          setClothesName(clothesParts[finaldna[2] - 1].name);

          if (clothesParts[finaldna[2] - 1].rarity === "Common") {
            setClothesRarity(1);
          }
          if (clothesParts[finaldna[2] - 1].rarity === "Uncommon") {
            setClothesRarity(2);
          }
          if (clothesParts[finaldna[2] - 1].rarity === "Rare") {
            setClothesRarity(3);
          }
          if (clothesParts[finaldna[2] - 1].rarity === "Epic") {
            setClothesRarity(4);
          }
          if (clothesParts[finaldna[2] - 1].rarity === "Legendary") {
            setClothesRarity(5);
          }
          if (finaldna[2] === 0) {
            setClothesRarity(0);
          }
        }

        if (finaldna[3] > 0) {
          setEyeName(eyeParts[finaldna[3] - 1].name);

          if (eyeParts[finaldna[3] - 1].rarity === "Common") {
            setEyeRarity(1);
          }
          if (eyeParts[finaldna[3] - 1].rarity === "Uncommon") {
            setEyeRarity(2);
          }
          if (eyeParts[finaldna[3] - 1].rarity === "Rare") {
            setEyeRarity(3);
          }
          if (eyeParts[finaldna[3] - 1].rarity === "Epic") {
            setEyeRarity(4);
          }
          if (eyeParts[finaldna[3] - 1].rarity === "Legendary") {
            setEyeRarity(5);
          }
          if (finaldna[3] === 0) {
            setEyeRarity(0);
          }
        }

        if (finaldna[4] > 0) {
          setMouthName(mouthParts[finaldna[4] - 1].name);

          if (mouthParts[finaldna[4] - 1].rarity === "Common") {
            setMouthRarity(1);
          }
          if (mouthParts[finaldna[4] - 1].rarity === "Uncommon") {
            setMouthRarity(2);
          }
          if (mouthParts[finaldna[4] - 1].rarity === "Rare") {
            setMouthRarity(3);
          }
          if (mouthParts[finaldna[4] - 1].rarity === "Epic") {
            setMouthRarity(4);
          }
          if (mouthParts[finaldna[4] - 1].rarity === "Legendary") {
            setMouthRarity(5);
          }
          if (finaldna[4] === 0) {
            setMouthRarity(0);
          }
        }
        if (finaldna[5] > 0) {
          setNeckName(neckParts[finaldna[5] - 1].name);

          if (neckParts[finaldna[5] - 1].rarity === "Common") {
            setNeckRarity(1);
          }
          if (neckParts[finaldna[5] - 1].rarity === "Uncommon") {
            setNeckRarity(2);
          }
          if (neckParts[finaldna[5] - 1].rarity === "Rare") {
            setNeckRarity(3);
          }
          if (neckParts[finaldna[5] - 1].rarity === "Epic") {
            setNeckRarity(4);
          }
          if (neckParts[finaldna[5] - 1].rarity === "Legendary") {
            setNeckRarity(5);
          }
          if (finaldna[5] === 0) {
            setNeckRarity(0);
          }
        }
        if (finaldna[6] > 0) {
          setLeftFinName(leftfinParts[finaldna[6] - 1].name);

          if (leftfinParts[finaldna[6] - 1].rarity === "Common") {
            setLeftFinRarity(1);
          }
          if (leftfinParts[finaldna[6] - 1].rarity === "Uncommon") {
            setLeftFinRarity(2);
          }
          if (leftfinParts[finaldna[6] - 1].rarity === "Rare") {
            setLeftFinRarity(3);
          }
          if (leftfinParts[finaldna[6] - 1].rarity === "Epic") {
            setLeftFinRarity(4);
          }
          if (leftfinParts[finaldna[6] - 1].rarity === "Legendary") {
            setLeftFinRarity(5);
          }
          if (finaldna[6] === 0) {
            setLeftFinRarity(0);
          }
        }
        if (finaldna[7] > 0) {
          setRightFinName(rightfinParts[finaldna[7] - 1].name);

          if (rightfinParts[finaldna[7] - 1].rarity === "Common") {
            setRightFinRarity(1);
          }
          if (rightfinParts[finaldna[7] - 1].rarity === "Uncommon") {
            setRightFinRarity(2);
          }
          if (rightfinParts[finaldna[7] - 1].rarity === "Rare") {
            setRightFinRarity(3);
          }
          if (rightfinParts[finaldna[7] - 1].rarity === "Epic") {
            setRightFinRarity(4);
          }
          if (rightfinParts[finaldna[7] - 1].rarity === "Legendary") {
            setRightFinRarity(5);
          }
          if (finaldna[7] === 0) {
            setRightFinRarity(0);
          }
        }
        if (finaldna[8] > 0) {
          setExtraName(extraParts[finaldna[8] - 1].name);

          if (extraParts[finaldna[8] - 1].rarity === "Common") {
            setExtraRarity(1);
          }
          if (extraParts[finaldna[8] - 1].rarity === "Uncommon") {
            setExtraRarity(2);
          }
          if (extraParts[finaldna[8] - 1].rarity === "Rare") {
            setExtraRarity(3);
          }
          if (extraParts[finaldna[8] - 1].rarity === "Epic") {
            setExtraRarity(4);
          }
          if (extraParts[finaldna[8] - 1].rarity === "Legendary") {
            setExtraRarity(5);
          }
          if (finaldna[8] === 0) {
            setExtraRarity(0);
          }
        }
      }

      const uri = await TokenContract.tokenURI(id);

      setOwner2(await TokenContract.ownerOf(id));
      setOwner(await TokenContract.ownerOf(id));

      let buff = new Buffer(uri.substring(29), "base64");
      let text = buff.toString("ascii");
      let buff2 = JSON.parse(text.replaceAll("b*", ""));

      setTokenName(buff2.name.substring(7));
      setImage(buff2.image);
    }

    loadNFTs();
  }, []);

  async function setFinalDNA2() {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    console.log("toast");
    toast("Confirm Set_Final_DNA Transaction.");
    setOkayMint(false);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(sharkTokenAddress, Token.abi, signer);

    /* user will be prompted to pay the asking proces to complete the transaction */
    console.log("finalDNA");

    await contract
      .setFinalDNA(router.query.id)
      .then((tx) => {
        //action prior to transaction being mined

        toast("Please Wait While Transaction Is Mined...");
        provider.waitForTransaction(tx.hash).then(() => {
          toast("Set_Final_DNA Transaction Mined!");
          toast("Confirm Reveal_Shark Transaction.");
          contract
            .revealShark(router.query.id)
            .then((tx) => {
              toast("Please Wait While Transaction is Mined...");
              provider.waitForTransaction(tx.hash).then(() => {
                //action after tx is mined
                toast("Reveal_Shark Transaction Mined!");
                toast("Reloading Shark...");

                router.reload();
              });
            })
            .catch(() => {
              //action if tx is rejected
              toast("You Rejected Reveal Shark TX. Baaad Idea.");
              setOkayMint(true);
            });
        });
      })
      .catch(() => {
        //action if tx is rejected
        toast("Rejected Set Final DNA Transaction. No Worries.");
        setOkayMint(true);
      });
  }

  return (
    <div className="text-black">
      {exists === true ? (
        <div>
          <Toaster
            position="bottom-center"
            reverseOrder={true}
            gutter={3}
            containerClassName="font-mono justify-start text-gray-50 text-sm bg-opacity-0 rounded-xl"
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "border -py-1",
              duration: 15000,
              style: {
                background: "#F9FAFB",
                color: "#000000",
                padding: "1"
              },
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black"
                }
              }
            }}
          >
            {(t) => (
              <ToastBar
                toast={t}
                style={{ minWidth: "475px" }} // Overwrite style
              >
                {({ icon, message }) => (
                  <>
                    {icon}
                    {message}
                    {t.type !== "loading" && (
                      <button onClick={() => toast.dismiss(t.id)}>X</button>
                    )}
                  </>
                )}
              </ToastBar>
            )}
          </Toaster>
        </div>
      ) : (
        <div></div>
      )}

      <Head>
        <title>Shifty Shark {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col mx-auto justify-center min-h-screen text-center bg-gradient-to-b from-cyan-300 via-blue-700 to-indigo-800">
        <div id="title" className="z-10 px-1 text-5xl mt-24 text-gray-900">
          {tokenname}
        </div>

        <div className="w-full flex mx-auto justify-center -mt-3 items-center ">
          <div className="z-0 mr-3 text-xl mt-0 text-gray-300 cursor-pointer">
            <a href={url}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="48"
                viewBox="0 0 24 24"
                className="text-gray-50 mt-12 transform rotate-180"
                fill="#ffffff"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </a>
          </div>
          {exists === true ? (
            <img
              src={image}
              className="w-3/4 md:w-1/2 lg:w-1/3 mt-0 rounded-3xl"
            />
          ) : (
            <div className="text-gray-100 w-96">
              <Machine />
            </div>
          )}

          <div className="z-50 ml-3 text-xl mt-0 text-gray-50 cursor-pointer">
            <a href={url2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="48"
                viewBox="0 0 24 24"
                className="text-gray-50 mt-12"
                fill="#ffffff"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-0 font-mono flex flex-col mx-auto text-gray-50  text-xs mt-2">
          <div className="px-1"> </div>
          <div className="flex mx-auto justify-center mb-1 px-1">
            {exists === true ? (
              <div>
                {account === owner ? (
                  <div className="text-gray-100 opacity-70">
                    <div className="opacity">tokenid: {id} owner: You!</div>
                  </div>
                ) : (
                  <div className="text-gray-100 opacity-70">
                    <div className="w-56 overflow truncate">
                      tokenid: {id} Owner: {owner2}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="px-6  mt-3">
          <ul className="text-gray-50 justify-center text-center flex mx-auto">
            {revealed === false && account === owner && rawdna.length > 7 ? (
              <div className="text-gray-800">
                <div className="mt-0 px-2  text-center font-mono">
                  {okaymint === true ? (
                    <div>
                      <div
                        onClick={setFinalDNA2}
                        className="cursor-pointer animate-bounce rounded-lg bg-gray-100 border px-8 mx-1 mt-2 hover:bg-gray-300"
                      >
                        Reveal Shark
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="rounded-lg bg-gray-300 border px-8 mx-1 mt-2 ">
                        Reveal Shark
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {revealed === true ? (
                  <div className="flex flex-col">
                    <div className="flex mx-auto justify-center">
                      <div className="hidden  leading-tight justify-center w-11/12 md:w-7/12 lg:w-5/12  mt-0 px-2 text-xs text-center font-mono flex flex-wrap mx-auto">
                        <div className=" text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-400 border px-5 mx-1 mt-2">
                          Color: River
                        </div>
                        <div className=" text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                          Head: Dunce Cap
                        </div>
                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                          Eyes: Goggles
                        </div>
                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                          Mouth: Cigarette
                        </div>
                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-green-400 border px-5 mx-1 mt-2">
                          Neck: Dog Tags
                        </div>
                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-yellow-400 border px-5 mx-1 mt-2">
                          Clothes:Ballerina
                        </div>

                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                          Left Fin: Baseball Bat
                        </div>
                        <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                          Right Fin: Polygon Coin
                        </div>
                      </div>
                    </div>
                    <div className="text-xs hidden">
                      {dna[0]}-{dna[1]}-{dna[2]}-{dna[3]}-{dna[4]}-{dna[5]}-
                      {dna[6]}-{dna[7]}-{dna[8]}-{dna[9]}
                    </div>
                    <div className="text-xs opacity-70 font-mono -mt-0.5 -mb-1">
                      traits:
                    </div>

                    {/* Trait Tag Container */}
                    <div className="w-11/12 md:w-7/12 lg:w-5/12 flex flex-wrap text-xs text-center justify-center mx-auto ">
                      {/* Color Trait Logic */}
                      <div>
                        {colorrarity === 0 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Color: {colorname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {colorrarity === 1 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Color: {colorname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {colorrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Color: {colorname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {colorrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Color: {colorname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {colorrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Color: {colorname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Head Trait Logic */}
                      <div>
                        {headrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Head: {headname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {headrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Head: {headname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {headrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Head: {headname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {headrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Head: {headname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {headrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Head: {headname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Clothes Trait Logic */}
                      <div>
                        {clothesrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Clothes: {clothesname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {clothesrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Clothes: {clothesname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {clothesrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Clothes: {clothesname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {clothesrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Clothes: {clothesname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {clothesrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Clothes: {clothesname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Eye Trait Logic */}
                      <div>
                        {eyerarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Eyes: {eyename}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {eyerarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Eyes: {eyename}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {eyerarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Eyes: {eyename}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {eyerarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Eyes: {eyename}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {eyerarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Eyes: {eyename}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Mouth Trait Logic */}
                      <div>
                        {mouthrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Mouth: {mouthname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {mouthrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Mouth: {mouthname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {mouthrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Mouth: {mouthname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {mouthrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Mouth: {mouthname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {mouthrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Mouth: {mouthname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Neck Trait Logic */}
                      <div>
                        {neckrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Neck: {neckname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {neckrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Neck: {neckname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {neckrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Neck: {neckname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {neckrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Neck: {neckname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {neckrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Neck: {neckname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* LeftFin Trait Logic */}
                      <div>
                        {leftfinrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Left Fin: {leftfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {leftfinrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Left Fin: {leftfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {leftfinrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Left Fin: {leftfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {leftfinrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Left Fin: {leftfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {leftfinrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Left Fin: {leftfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* RightFin Trait Logic */}
                      <div>
                        {rightfinrarity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Right Fin: {rightfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {rightfinrarity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Right Fin: {rightfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {rightfinrarity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Right Fin: {rightfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {rightfinrarity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Right Fin: {rightfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {rightfinrarity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Right Fin: {rightfinname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                      {/* Extra Trait Logic */}
                      <div>
                        {extrararity === 1 ? (
                          <div className="text-center pt-1.5 pb-1 font-mono rounded-lg bg-gray-50 border px-5 mx-1 mt-2 text-gray-500">
                            Animation: {extraname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {extrararity === 2 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-green-500 border px-5 mx-1 mt-2">
                            Animation: {extraname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {extrararity === 3 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-blue-500 border px-5 mx-1 mt-2">
                            Animation: {extraname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}

                        {extrararity === 4 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-purple-600 border px-5 mx-1 mt-2">
                            Animation: {extraname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                        {extrararity === 5 ? (
                          <div className="text-center pt-1.5   pb-1 text-center font-mono rounded-lg bg-orange-500 border px-5 mx-1 mt-2">
                            Animation: {extraname}
                          </div>
                        ) : (
                          <div className=""></div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </ul>
        </div>
        <div className="w-full mt-7 mb-12 flex justify-center">
          <a href={openSea}>
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
          <a href={polygonScan}>
            <button
              type="button"
              className="mx-0.5 inline-flex text-base justify-center  transform -translate-y-1 pt-2 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
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
        </div>
      </div>

      <div>
        <div className="pb-44 shadow-lg pt-8 h-36 bg-indigo-800 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-100">
          <ul className="w-44 text-gray-200 pt-6 font-mono text-sm flex flex-row justify-center text-center mx-auto">
            <li className=" mx-1.5">
              <a href="/faq" className="cursor-pointer">
                faq
              </a>
            </li>
            <li className=" mx-1.5">
              <a href="/blog" className="cursor-pointer">
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
    </div>
  );
}
