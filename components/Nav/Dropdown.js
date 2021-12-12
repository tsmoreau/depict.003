import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  BeakerIcon,
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

const people = [
  { name: "machine carousel", unavailable: false, url: "/machines" },
  { name: "shifty sharks", unavailable: false, url: "/shiftysharks/" },

  { name: "depict soup", unavailable: false, url: "/depictsoup/" }
];

export default function Example() {
  const [selected, setSelected] = useState(people[0]);

  const router = useRouter();

  function goTo(x) {
    router.push(x);
  }

  return (
    <div className="w-44 -mt-0.5">
      <Listbox value={selected} onChange={goTo}>
        <div className="relative -ml-5 -mr-2">
          <Listbox.Button className="  text-sm font-mono relative w-full text-left  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
            <span className="cursor-pointer w-full block truncate text-sm py-1  text-gray-700 text-center items-center text-sm leading-snug transition duration-100 ease-in-out transform hover:-translate-y-1">
              token machines
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="flex flex-col items-center justify-center absolute w-52 py-1 mt-1.5 mr-3 transform -translate-x-1.5 overflow-auto text-base rounded-xl bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
                          cursor-pointer text-sm font-mono w-full justify-center text-center flex mx-auto select-none relative py-2 pl-3 pr-4`
                  }
                  value={person.url}
                  disabled={person.unavailable}
                >
                  {({ selected, active }) => (
                    <>
                      <a href={person.url}>{person.name}</a>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
