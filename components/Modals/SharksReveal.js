import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

import { sharkTokenAddress } from "../../config";
import Token from "../../abis/sharkToken.json";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { toast, Toaster, ToastBar } from "react-hot-toast";

export default function MyModal() {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
    library
  } = useWeb3React();
  const router = useRouter();
  const [balance, setBalance] = useState([]);
  const [sold, setSold] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [displaytoken, setDisplayToken] = useState([]);
  const [currenttoken, setCurrentToken] = useState([]);

  const [counter, setCounter] = useState(0);

  const [token, setToken] = useState(0);

  let [isOpen, setIsOpen] = useState(false);

  let [loading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeLoad() {
    setLoading(false);
  }

  function openLoad() {
    setLoading(true);
  }

  const isConnected = typeof account === "string" && !!library;

  console.log({ isConnected });

  useEffect(() => {
    if (isConnected === true) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const TokenContract = new ethers.Contract(
        sharkTokenAddress,
        Token.abi,
        provider
      );

      // Create an scoped async function in the hook
      async function loadSharkInfo() {
        if (currenttoken[0] === undefined) {
          let response = await TokenContract.balanceOf(account);
          setBalance(parseInt(response._hex, 16));

          let meta2 = await TokenContract.totalSupply();
          setSold(parseInt(meta2._hex, 16));

          let meta3 = 5000 - sold;
          setRemaining(meta3);

          let count = 0;
          let current = 0;
          let array = [];
          let array2 = [];

          for (let i = 0; i < balance; i++) {
            current = await TokenContract.tokenOfOwnerByIndex(account, count);
            array[count] = parseInt(current._hex, 16);
            count++;
            console.log(count);
          }
          console.log("owned_tokens");
          console.log(parseInt(current._hex, 16));

          let count2 = 0;

          for (let i = 0; i < balance; i++) {
            current = await TokenContract.idToShark(array[count2]);

            array2[count2] = current[3];
            count2++;
            console.log(count2);
          }
          console.log("are_revealed");
          console.log(array2);

          count = 0;

          for (let i = 0; i < balance; i++) {
            if (array2[count] === true) {
              array.splice(count, 1, 0);
              console.log(count);
            }
            count = count + 1;
          }

          let up = array.filter(function (number) {
            return number > 0;
          });

          console.log("updated_array");
          console.log(up);
          console.log(array);

          setCurrentToken(up);
          setToken(up[0]);
        }
      }
      // Execute the created function directly

      loadSharkInfo();
    }
  });

  if (typeof window !== "undefined") {
    window.ethereum.on("accountsChanged", function (accounts) {
      setCurrentToken([]);
    });
  }

  function upToken() {
    if (counter + 1 !== currenttoken.length) {
      setToken(currenttoken[counter + 1]);
      setCounter(counter + 1);
      console.log(counter);
      console.log(currenttoken.length);
    }
  }

  function downToken() {
    if (counter !== 0) {
      setToken(currenttoken[counter - 1]);
      setCounter(counter - 1);
      console.log(counter);
      console.log(currenttoken.length);
    }
  }

  async function setFinalDNA2() {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(sharkTokenAddress, Token.abi, signer);

    let url = "/shiftysharks/" + token;
    /* user will be prompted to pay the asking proces to complete the transaction */
    console.log("finalDNA");
    toast("⮑ Confirm Set_Final_DNA Transaction");

    await contract
      .setFinalDNA(token)
      .then((tx) => {
        //action prior to transaction being mined

        toast("⮑ Please Wait While Transaction Is Mined");
        provider.waitForTransaction(tx.hash).then(() => {
          toast("⮑ Set_Final_DNA Transaction Mined");
          toast("⮑ Confirm Reveal_Shark Transaction");
          contract
            .revealShark(token)
            .then((tx) => {
              toast("⮑ Please Wait While Transaction is Mined");
              provider.waitForTransaction(tx.hash).then(() => {
                //action after tx is mined
                toast(
                  <span>
                    <a href={url}>⮑ Click HERE To Go To Shark {token}</a>
                  </span>,
                  {
                    duration: 30000
                  }
                );

                toast(<span>You have Revealed Shifty Shark {token}! </span>, {
                  duration: 10000
                });
              });
            })
            .catch(() => {
              //action if tx is rejected
              toast("⮑ Rejected Reveal Shark TX. Baaad Idea.");
            });
        });
      })
      .catch(() => {
        //action if tx is rejected
        toast("⮑ Rejected Set Final DNA Transaction. No Worries.");
      });
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="animate-bounce rounded-lg bg-gray-100 border px-6 mx-1"
        >
          Reveal Sharks!
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="fixed h-screen w-screen text-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur"></div>
          <div className="h-screen w-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="justify-center border relative font-mono inline-block w-full max-w-4xl px-10 pt-6 mt-6 mb-10  text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {loading ? (
                  <div>
                    <p className="lg:pl-8 text-gray-600 text-xl justify-center items-center pt-3 pb-1">
                      Please Confirm Finalize DNA Transaction ...
                    </p>
                    <p className="text-gray-600 text-large justify-center  pb-3">
                      (This may take a moment, please be patient)
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-16 h-16 mb-8 text-gray-600 animate-spin flex mx-auto"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
                    </svg>
                  </div>
                ) : (
                  <div className="">
                    {currenttoken[0] ? (
                      <div>
                        <div className="absolute right-2 top-2">
                          <button
                            type="button"
                            className="text-xl inline-flex justify-center text-gray-600 text-sm font-medium text-gray-700  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal}
                          >
                            X
                          </button>
                        </div>
                        <div
                          className="inset-x-0 -mt-1 ml-4 z-40 flex mr-3 justify-center font-medium text-4xl lg:text-6xl font-medium  text-gray-900"
                          id="modal"
                        >
                          shifty sharks reveal
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <div className="z-0 -mt-1 flex items-center">
                            <img
                              src="./121212.svg"
                              className="rounded-full h-64 w-64 mt-1 z-0  justify-center"
                            />
                          </div>

                          <div className="items-center -mt-3 flex w-full justify-center">
                            <div
                              className="z-50 mr-3 text-xl -mt-1 text-gray-300 cursor-pointer"
                              onClick={downToken}
                            >
                              ❮
                            </div>

                            <div className="flex text-gray-500 text-xs z-50 px-5 p-1 border rounded-lg bg-gray-50">
                              token id: {token}
                            </div>

                            <div
                              className="z-50 ml-3 text-xl -mt-1 text-gray-300 cursor-pointer"
                              onClick={upToken}
                            >
                              ❯
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-medium mt-6 ml-6"></div>
                        <div className="flex mx-auto mb-2 justify-center">
                          <p className="w-full text-sm text-gray-600 px-12 pb-2 pt-0  rounded-lg">
                            You currently own {currenttoken.length} Unrevealed
                            Sharks. Please choose one of your Sharks from above
                            and click Reveal Shark below. The process will take
                            two transactions and you will be prompted to confirm
                            both. Costs 6 MATIC each.
                          </p>
                        </div>
                        <p></p>
                        <div className="mb-4 text-center items-center flex mx-auto justify-center  text-xs text-gray-500 p-2 lg:p-4 ">
                          <button
                            type="button"
                            onClick={setFinalDNA2}
                            className="-mt-4 animate-bounce text-base font- px-16 py-1.5  border rounded-lg bg-gray-50 hover:bg-gray-300"
                          >
                            Reveal Shark
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-400 justify-center flex flex-col">
                        <p className="ml-8 text-xl">LOADING SHARKS... </p>
                        <p className="text-sm w-3/4 flex mx-auto py-3">
                          This can take awhile if you have a lot of Sharks,
                          please be patient.
                          <br /> If you have a lot of Sharks you are likely a
                          power user, if know the token id of the Shark you want
                          to reveal, you can visit:
                          <br />
                          <br />
                          depict.limited/shiftysharks/inserttokenidhere
                          <br />
                          <br />
                          To reveal it instead rather than waiting :)
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-24 h-24 mb-8 mt-3 justify-center flex mx-auto text-gray-400 animate-spin"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
                        </svg>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col">
                  <div className="flex mx-auto justify-center"></div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <style jsx>{`
        #INFOBUTTON,
        #MINTBUTTON,
        #UP,
        #DOWN {
          fill: #3f3f3f;
        }

        #INFOBUTTON:hover,
        #MINTBUTTON:hover,
        #UP:hover,
        #DOWN:hover {
          fill: #666;
        }

        #quantity {
          fill: #8d8d8d;
        }

        @font-face {
          font-family: myFirstFont1;
          src: url(/fonts/BlankRiver.ttf);
        }

          #modal,
          #text {
            font-family: myFirstFont1;
            font-style: normal;
          }
        }
      `}</style>
    </>
  );
}
