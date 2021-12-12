import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Nav/Footer";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function ReadWrite() {
  return (
    <div className="text-black">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col mx-auto justify-center bg-gradient-to-b from-depictblue-50 to-depictpink-50">
        <p className="text-3xl text-gray-800 font-bold mx-auto mt-48 font-mono">
          about
        </p>
        <div className="w-full px-4 pt-16 pb-64">
          <div class="mt-8 px-8 md:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
            <div className="w-full max-w-md p-2 mx-auto font-mono border rounded-lg">
              <Disclosure className="flex flex-col justify-center text-center mx-auto border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mx-auto text-sm leading-0 flex justify-between w-auto px-4 pt-2 text-sm font-medium text-left text-gray-800 bg-gray-0 rounded-lg ">
                      <span>what is your refund policy?</span>
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
