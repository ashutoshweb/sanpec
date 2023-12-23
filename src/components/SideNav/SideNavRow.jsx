import React from "react";
import { Disclosure } from '@headlessui/react'
import {
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

export function SideNavRow({ classNames, selected, setSelected, item, sidebarOpen, setSidebarOpen }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              selected === item.name
                ? 'bg-indigo-800 text-white'
                : 'text-blue-900 hover:text-white hover:bg-blue-400',
              'flex items-center w-full text-left group gap-x-3 rounded-md p-2 lg:text-xl leading-6 font-semibold'
            )}
          >
            
            {item.name}
            <ChevronRightIcon
              className={classNames(
                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                'ml-auto h-5 w-5 shrink-0'
              )}
              aria-hidden="true"
            />

          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="mt-1 pl-8">
            {item.children.map((subItem) => (
              <li key={subItem.name}>
                <a
                  href={subItem.href}
                  className={classNames(
                    subItem.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-blue-900 hover:text-white hover:bg-blue-400',
                    'flex items-center w-full text-left group gap-x-3 rounded-md p-2 text-bg leading-6 font-semibold'
                  )}
                  onClick={() =>  {
                    setSidebarOpen(false);
                    setSelected(subItem.name);
                   
                  }
                                  
                                   }
                >
                  {subItem.name}
                </a>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default SideNavRow;