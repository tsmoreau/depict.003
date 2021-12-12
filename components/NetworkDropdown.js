import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BeakerIcon, CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { name: "polygon", unavailable: false },
  { name: "ethereum", unavailable: true },

  { name: "avalanche", unavailable: true },
  { name: "tao", unavailable: true }
];

export default function Example() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-36">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mr-2">
          <Listbox.Button className="px-2 text-sm font-mono relative w-full text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
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
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? "text-gray-900 bg-gray-100" : "text-gray-900"}
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
    </div>
  );
}
