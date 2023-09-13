import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const company = [
    { name: 'Services', href: '/about' },
    { name: 'Power', href: '/power'},
    { name: 'Sustainability', href: '/sustainability'},
    { name: 'Projects', href: '/projects'},
    { name: 'Research', href: '/research'},
]

const products = [
    {
        name: 'Change Management',
        description: 'Get a better understanding where your traffic is coming from',
        href: '/changemanagement',
        icon: ChartPieIcon,
    },
    {
        name: 'Disaster Management',
        description: 'Speak directly to your customers with our engagement tool',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Sustainable Energy', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    {
        name: 'Integrations',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: SquaresPlusIcon,
    },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
    { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const backgroundStyle = {backgroundColor :'#151949'};

//bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500


export  function BalridgeHeader1() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative isolate z-10 bg-[#151949]    font-poppins ">

            <nav className="mx-auto  flex max-w-7xl items-center justify-between pt-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://higherlogicdownload.s3.amazonaws.com/BALDRIGEFOUNDATION/feca4eb6-6fe8-4830-acc6-5649178a00da/UploadedImages/BF_GlobeMainLG_2.png" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden4="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-base capitalize font-semibold leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                    <a href="#" className="text-base font-semibold leading-6 text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover>
                        <Popover.Button className="flex items-center gap-x-1  font-semibold leading-6 text-white">
                            Services
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel className="absolute inset-x-0 top-10 -z-10  mt-6 pt-14 shadow-lg ring-1 ring-gray-900/5">
                                <div className="mx-auto grid  grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8 bg-white">
                                    {products.map((item) => (
                                        <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-200">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-[#151949]">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                    {item.description}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>


                        {company.map((item) => (
                            <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-white from-left " >
                                {item.name}
                            </a>
                            
                        ))}


                </Popover.Group>

            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
