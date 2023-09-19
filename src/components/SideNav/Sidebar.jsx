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

export function Sidebar({ navigation, firstSelected }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selected, setSelected] = useState(firstSelected)
    console.log("selected:", selected)
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
    console.log("LookUpComponent:",)
    const Test = LookUpComponent();

    return (
        <>
            <div className="lg:flex">
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
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {nav.map((item) => (
                                                            <SidebarLink
                                                                key={item.id}
                                                                item={item}
                                                                selected={selected}
                                                                setSelected={setSelected}
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
                <div className="hidden lg:flex lg:h-[550px] lg:w-72 lg:my-3 overflow-y-auto">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col gap-y-5 bg-white px-6 overflow-y-auto">
                        
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {nav.map((item) => (
                                            <li key={item.name}>
                                                {!item.children ? (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-indigo-800 text-white' : 'text-black-400 hover:text-white hover:bg-indigo-800',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                        )}
                                                        onClick={() => setSelected(item.name)}

                                                    >
                                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <SideNavRow classNames={classNames} selected={selected} setSelected={setSelected} item={item} />
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