import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Nav/Footer";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function ReadWrite() {
  return (
    <div className="text-black">
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col mx-auto justify-center bg-gradient-to-b from-depictblue-50 to-depictpink-50">
        <p className="text-3xl text-gray-800 font-bold mx-auto mt-48 font-mono">
          faq
        </p>
        <div className="w-full px-4 pt-16 pb-64">
          <div class="mt-8 px-8 justify-center w-full flex flex-wrap">
            <div className="w-full  max-w-md p-2 mx-1 font-mono border rounded-lg">
              <Disclosure className="flex flex-col justify-center text-center mx-auto border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 pt-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>what is Depict.Limited?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center bg-gray-200 leading-0 rounded-lg mt-3 px-6 pt-4 pb-3 text-xs text-gray-700">
                      Depict.Limited is a multi-chain NFT art website founded by
                      artist and coder tsmoreau. We aim for on-chain art, work
                      with POS chains as much as possible, and generally focus
                      on EVM compatible networks. Our soft launch is scheduled
                      for Dec 2021 and we plan on having bi-monthly large drops
                      through 2022.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>what's with the Token Machines?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center w-auto bg-gray-200 leading-0 rounded-lg mt-2 px-4 pt-3 pb-3 text-xs text-gray-700">
                      The token machines are the main interface of Depict. They
                      offer the easiet path to minting any of the tokens Depict
                      offers and operate as a nice indicator of past and future
                      projects. <br />
                      <br />
                      Depict is currently looking into launching new machines in
                      conjunction with cutting edge illustrators and designers
                      for new machines and mechanics.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>why is there a chain dropdown?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center w-auto bg-gray-200 leading-0 rounded-lg mt-2 px-4 pt-3 pb-3 text-xs text-gray-700">
                      In the near future we will launch projects on the
                      Avalanche C-Chain, and Mainnet Ethereum (in aniticpation
                      of the switch to POS), as well as smaller EVM compatible
                      chains here and there. For now, the dropdown is inoperable
                      and the site is Polygon-only.
                      <br />
                      <br /> Some time in Q1 2022 the dropdown will become
                      operable and will change your Metamask to the appropriate
                      network, and the selection of machines and projects will
                      change appropriately.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>what does Depict mean?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center w-auto bg-gray-200 leading-0 rounded-lg mt-2 px-4 pt-3 pb-3 text-xs text-gray-700">
                      Depict is a shortening of Decentralized Pictures. Whether
                      fully-on-chain, or IPFS hosted.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="w-full hidden max-w-md p-2 mx-1 font-mono border rounded-lg">
              <Disclosure className="flex flex-col justify-center text-center mx-auto border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 pt-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>what is Depict.Limited?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center bg-gray-200 leading-0 rounded-lg mt-3 px-6 pt-4 pb-3 text-xs text-gray-700">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>do you offer technical support?</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-center w-auto bg-gray-200 leading-0 rounded-lg mt-2 px-4 pt-3 pb-3 text-xs text-gray-700">
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
