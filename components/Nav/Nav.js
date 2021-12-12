import React, { useState } from "react";
import Account from "../Account";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";

import Network from "../NetworkDropdown";
import Dropdown from "./Dropdown";

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { account, library } = useWeb3React();

  const isConnected2 = typeof account === "string" && !!library;
  const triedToEagerConnect = useEagerConnect();

  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}

        <nav className="fixed font-molle text-3xl hidden lg:flex py-4 shadow-none lg:shadow-md px-6 w-full flex justify-between items-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 z-40">
          <div className="flex">
            <a
              href="/"
              className="ml-2 -mb-2 cursor-pointer font-medium text-4xl"
              id="depict"
            >
              Depict.Limited
            </a>
            <a
              href="/machines"
              className="hidden font-mono -ml-6 mr-2 mt-1 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-200 ease-in-out transform hover:-translate-y-1"
            >
              token machines
            </a>
            <Dropdown />
            <a
              href="/market"
              className="hidden font-mono px-2.5 mt-1 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1"
            >
              <span className=""></span>
              token_market!
            </a>
            <a
              href="/stats"
              className="hidden font-mono px-2.5 mt-1 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-500 ease-in-out transform hover:-translate-y-1"
            >
              <span className=""></span>
              stats
            </a>
            <a
              href="/faq"
              className="-ml-7 font-mono px-2.5 mt-1 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1"
            >
              <span className=""></span>
              faq
            </a>
          </div>
          <div></div>
          <div className="flex items-center">
            <div className="relative mr-6 "></div>
            <div>
              <div className="hidden lg:flex items-center">
                <div className="text-base absolute relative flex flex-row items-center">
                  <Network />

                  <Account triedToEagerConnect={triedToEagerConnect} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          {show ? (
            <div className="h-px -mt-0.5"></div>
          ) : (
            <div className="fixed font-molle text-3xl py-4 shadow-md px-6 w-full flex lg:hidden justify-between items-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 z-40">
              <div className="-mb-2">
                <a
                  href="/"
                  className="ml-2 cursor-pointer text-4xl"
                  id="depict2"
                >
                  Depict.Limited
                </a>
              </div>
              <div className="flex items-center">
                <div className="relative mr-6 "></div>
                <div
                  id="menu"
                  className="text-gray-800"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className={
              show
                ? "w-full lg:hidden h-full  fixed  z-40  transform  translate-x-0 "
                : "   w-full lg:hidden h-full  fixed z-40  transform -translate-x-full -translate-y-full"
            }
          >
            {" "}
            <div className="flex justify-items-end shadow transform translate-x-64 fixed top-0 w-screen h-20 -mt-3 bg-white backdrop-filter backdrop-blur-sm bg-opacity-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden icon icon-tabler icon-tabler-menu-2 justify-self-end absolute transform -translate-x-1 translate-y-1 mr-5 mt-8 right-64"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={4} y1={6} x2={20} y2={6} />
                <line x1={4} y1={12} x2={20} y2={12} />
                <line x1={4} y1={18} x2={20} y2={18} />
              </svg>
            </div>
            <div
              className=" bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed z-40 top-0 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="-mb-2 font-molle text-2xl text-gray-800 ml-3">
                            <a
                              href="/"
                              className="cursor-pointer text-3xl "
                              id="depict3"
                            >
                              Depict.Limited
                            </a>
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a href="/machines" className="cursor-pointer">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center">
                            <div className="text-indigo-700"></div>
                            <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                              token machines
                            </p>
                          </div>
                        </li>
                      </a>
                      <a href="/market" className="cursor-pointer">
                        <li className="hidden text-gray-800 pt-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-gray-800"></div>
                              <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                                {" "}
                                token_market
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a href="/stats" className="hidden cursor-pointer">
                        <li className="text-gray-800 pt-1">
                          <div className="flex items-center">
                            <div className="text-gray-800"></div>
                            <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                              stats
                            </p>
                          </div>
                        </li>
                      </a>
                      <a href="/faq" className="cursor-pointer">
                        <li className="text-gray-800 pt-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-gray-800"></div>
                              <p className="font-mono px-3 py-4 flex text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
                                faq
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <li className="mt-8 ml-9 flex mx-auto items-center">
                        <Network />
                      </li>
                      <li className="text-gray-800 mt-3 text-center justify-center">
                        <Account triedToEagerConnect={triedToEagerConnect} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
      <style jsx>{`
        @font-face {
          font-family: myFirstFont;
          src: url(/fonts/Halaney.otf);
        }

          #depict,
          #depict2,
          #depict3 {
            font-family: myFirstFont;
            
          }
        }
      `}</style>
    </>
  );
}
