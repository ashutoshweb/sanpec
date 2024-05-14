import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Content from '@/components/DEContent'
import { SidebarLink } from '@/components/SideNav/SideBarLink'
import { SideNavRow } from '@/components/SideNav/SideNavRow'
import Link from 'next/link'

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Sidebar({ navigation, firstSelected, bgColor }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selected, setSelected] = useState(firstSelected)
   
    const [nav, updateNav] = useState(navigation)

    useEffect(() => {
        const newNav = nav.map((item) => {
            if (item.name === selected) {
                item.current = true
            } else {
                item.current = false
            }
            item.children = item.children?.map((child) => {
                if (child?.name === selected) {
                    child.current = true
                } else {
                    child.current = false
                }
                return child
            })
            return item
        })
        updateNav(newNav)
    }, [selected])

    const LookUpComponent = () => {
        let component = null
        nav.forEach((item) => {
            if (item.current) {
                component = item.component
            }
            item.children?.forEach((child) => {
                if (child.current) {
                    component = child.component
                }
            })
        })
        return component
    }
    
    const Test = LookUpComponent();
   

    return (
        <>
            <div className={`lg:flex ${bgColor}` }>
            <div
            className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>
                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">

                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1" >
                                                        {nav.map((item) => (
                                                            <SidebarLink
                                                                key={item.id}
                                                                item={item}
                                                                selected={selected}
                                                                setSelected={setSelected}
                                                                sidebarOpen={sidebarOpen}
                                                                setSidebarOpen={setSidebarOpen}
                                                            />
                                                            
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:h-[550px] lg:w-72 lg:my-24 overflow-y-auto  font-poppins">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col gap-y-5 px-6 overflow-y-auto">
                        
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-2 ">
                                        {nav.map((item) => (
                                            <li key={item.name}>
                                                {!item.children ? (
                                                    <Link
                                                        href={item.href}  
                                                        className={classNames(
                                                            item.current ? ' text-[#e8b44b] bg-gray-800' : '  text-white  hover:text-[#554423] ',
                                                            'group flex gap-x-3  p-2 text-lg leading-6 w-full font-semibold    relative rounded-2xl transition-colors hover:bg-gray-800/30'
                                                        )}
                                                        onClick={() => setSelected(item.name)}

                                                    >    <span className="h-6 px-12 shrink-0" aria-hidden="true" >{item.name}</span>
                                                    </Link>
                                                ) : (
                                                    <SideNavRow classNames={classNames} selected={selected} setSelected={setSelected} item={item}  sidebarOpen={sidebarOpen}
                                                    setSidebarOpen={setSidebarOpen} />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-5 flex items-center gap-x-6 bg-indigo-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-white">{selected}</div>
                </div>
                <main>
                    <div className="h-full">
                        {Test && <Test />}
                    </div>
                </main>
            </div>
        </>
    )
}