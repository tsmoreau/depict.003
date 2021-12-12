import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BeakerIcon, CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { sharkStorageAddress } from "../../../config";
import Storage from "../../../abis/sharkStorage.json";
import { colorRarity, colorNames, colorSVGCodes } from "./traits";
import { rightfinParts } from "./traits";

const people = [
  {
    name: rightfinParts[0].name,
    svgcode: rightfinParts[0].svgcode,
    rarity: rightfinParts[0].rarity,
    traitset: rightfinParts[0].traitset
  },
  {
    name: rightfinParts[1].name,
    svgcode: rightfinParts[1].svgcode,
    rarity: rightfinParts[1].rarity,
    traitset: rightfinParts[1].traitset
  },
  {
    name: rightfinParts[2].name,
    svgcode: rightfinParts[2].svgcode,
    rarity: rightfinParts[2].rarity,
    traitset: rightfinParts[2].traitset
  },
  {
    name: rightfinParts[3].name,
    svgcode: rightfinParts[3].svgcode,
    rarity: rightfinParts[3].rarity,
    traitset: rightfinParts[3].traitset
  },
  {
    name: rightfinParts[4].name,
    svgcode: rightfinParts[4].svgcode,
    rarity: rightfinParts[4].rarity,
    traitset: rightfinParts[4].traitset
  },
  {
    name: rightfinParts[5].name,
    svgcode: rightfinParts[5].svgcode,
    rarity: rightfinParts[5].rarity,
    traitset: rightfinParts[5].traitset
  },
  {
    name: rightfinParts[6].name,
    svgcode: rightfinParts[6].svgcode,
    rarity: rightfinParts[6].rarity,
    traitset: rightfinParts[6].traitset
  },
  {
    name: rightfinParts[7].name,
    svgcode: rightfinParts[7].svgcode,
    rarity: rightfinParts[7].rarity,
    traitset: rightfinParts[7].traitset
  },
  {
    name: rightfinParts[8].name,
    svgcode: rightfinParts[8].svgcode,
    rarity: rightfinParts[8].rarity,
    traitset: rightfinParts[8].traitset
  },
  {
    name: rightfinParts[9].name,
    svgcode: rightfinParts[9].svgcode,
    rarity: rightfinParts[9].rarity,
    traitset: rightfinParts[9].traitset
  },
  {
    name: rightfinParts[10].name,
    svgcode: rightfinParts[10].svgcode,
    rarity: rightfinParts[10].rarity,
    traitset: rightfinParts[10].traitset
  },
  {
    name: rightfinParts[11].name,
    svgcode: rightfinParts[11].svgcode,
    rarity: rightfinParts[11].rarity,
    traitset: rightfinParts[11].traitset
  },
  {
    name: rightfinParts[12].name,
    svgcode: rightfinParts[12].svgcode,
    rarity: rightfinParts[12].rarity,
    traitset: rightfinParts[12].traitset
  },
  {
    name: rightfinParts[13].name,
    svgcode: rightfinParts[13].svgcode,
    rarity: rightfinParts[13].rarity,
    traitset: rightfinParts[13].traitset
  },
  {
    name: rightfinParts[14].name,
    svgcode: rightfinParts[14].svgcode,
    rarity: rightfinParts[14].rarity,
    traitset: rightfinParts[14].traitset
  },
  {
    name: rightfinParts[15].name,
    svgcode: rightfinParts[15].svgcode,
    rarity: rightfinParts[15].rarity,
    traitset: rightfinParts[15].traitset
  },
  {
    name: rightfinParts[16].name,
    svgcode: rightfinParts[16].svgcode,
    rarity: rightfinParts[16].rarity,
    traitset: rightfinParts[16].traitset
  },
  {
    name: rightfinParts[17].name,
    svgcode: rightfinParts[17].svgcode,
    rarity: rightfinParts[17].rarity,
    traitset: rightfinParts[17].traitset
  }
];

export default function Example() {
  const [selected, setSelected] = useState(people[0]);
  const [uploaded, setUploaded] = useState("Uploaded:");

  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError
  } = useWeb3React();

  function uploadTrait() {
    toast(
      <span>
        CONFIRM_UPLOAD: {selected.traitset}: {selected.name}
      </span>,
      {
        duration: 10000
      }
    );
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const StorageContract = new ethers.Contract(
      sharkStorageAddress,
      Storage.abi,
      signer
    );

    StorageContract.setRightFinTrait(
      selected.rarity,
      selected.traitset,
      selected.name,
      selected.svgcode
    )
      .then((tx) => {
        toast(
          <span>
            BEING_MINED: {selected.traitset}: {selected.name}
          </span>,
          {
            duration: 10000
          }
        );
        provider.waitForTransaction(tx.hash).then(() => {
          //action after tx is mined
          toast(
            <span>
              MINED! {selected.traitset}: {selected.name}
            </span>,
            {
              duration: 10000
            }
          );
          setUploaded(uploaded + " " + selected.name + " ");
        });
      })
      .catch(() => {
        //action if tx is rejected
        toast("TX_ERROR. UH OH.");
      });
  }

  return (
    <div className=" flex flex-col border w-full rounded-xl py-6 px-6">
      <Toaster
        position="bottom-center"
        reverseOrder={true}
        gutter={3}
        containerClassName="w-auto font-mono mb-6 justify-start text-gray-50 text-sm bg-opacity-0 rounded-xl"
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "border mr-1 w-auto bg-white",
          duration: 7500,
          style: {
            background: "#F9FAFB",
            color: "#000000",
            padding: "0.5"
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
      ></Toaster>

      <div className="w-full items-center  flex justify-between">
        <p className=" mr-4">Right Fin Traits!: {rightfinParts.length}</p>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mr-2">
            <Listbox.Button className="px-2 text-sm font-mono relative w-48 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
              <span className="w-full block truncate text-sm py-1 pl-2.5">
                {selected.name}
              </span>
              <span className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${
                        active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                      }
                          cursor-default text-sm font-mono select-none relative py-2 pl-3 pr-4`
                    }
                    value={person}
                    disabled={person.unavailable}
                  >
                    {({ selected, active }) => <>{person.name}</>}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <button
          onClick={uploadTrait}
          className="rounded border bg-gray-50 text-gray-800 px-4 py-0.5"
        >
          UPLOAD
        </button>
      </div>
      <div className="mt-1 text-sm border px-3 py-0.5 bg-gray-50 rounded-lg w-min">
        {uploaded}
      </div>
      <div className="py-2 text-sm  break-words">
        {selected.name}, {selected.rarity}, {selected.traitset}
      </div>
      <div className="break-all flex text-xs overflow-hidden text-justify w-full flex-wrap">
        {selected.svgcode}
      </div>
    </div>
  );
}
