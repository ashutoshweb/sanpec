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
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import baldrigeMain from '@/custom-images/baldrige-framework_home.jpeg'
import sanpeclogoImage from '@/custom-images/SANPEC_Logo_transparent.png'
import sanpeclogoImageOriginal from '@/custom-images/SANPEC_Logo.jpg'

const logoImage = sanpeclogoImageOriginal;
const navigation = [

  { name: 'CONTACT US', href: '/contact-us' },
  { name: 'ABOUT', href: '/about-sanpec' },
]

const mobileNav = [
  { name: 'Electric Power', href: '/power' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Projects', href: '/project' },
  /*{ name: 'Events', href: '/event' },*/
  { name: 'Research', href: '/research' },
  { name: 'About', href: '/about-sanpec' },
]

const company = [
  { name: 'Electric Power', href: '/power' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Projects', href: '/project' },
  /*{ name: 'Events', href: '/event' },*/
  { name: 'Research', href: '/research' },
]

const products = [
  {
    name: 'Change Management',
    description: 'Navigating Change for Organizational Growth and Success',
    href: '/changemanagement',
  },
  {
    name: 'Disaster Management',
    description: 'Effective Strategies for Resilient Disaster Management and Recovery',
    href: '/changemanagement',
  },
  {
    name: 'Baldrige Consulting',
    description: 'Excellence Through Baldrige Consulting Services',
    href: '/changemanagement',
    icon: FingerPrintIcon,
  },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const backgroundStyle = { backgroundColor: '#151949' }

//bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

export function SanpecHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" isolate z-20 bg-[#151949] font-poppins sticky top-0" style={{
      position: 'fixed',
      top: '0',
      width: '100%',
    }}>
      <div className="container mx-auto flex">
        <div className="flex-1">
          <div className="3 mt-4 cursor-pointer p-1.5">
            <span className="sr-only">Your Company</span>
            <Link key="logo" href="/">
              <Image
                className="h-20 w-20"
                src={logoImage}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div>
          <nav
            className="flex max-w-7xl items-center justify-end pt-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex justify-end lg:hidden">
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="anime-href text-base font-semibold  leading-6 text-[#e8b44b]"
                >
                  {item.name}
                </Link>
              ))}
             
            </div>
          </nav>
          <nav
            className="flex max-w-7xl items-center justify-between p-6 lg:px-8 "
            aria-label="Global"
          >
            <Popover.Group className="hidden lg:flex lg:gap-x-12">


              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="anime-href from-left text-xl font-semibold leading-6 text-white "
                >
                  {item.name}
                </Link>
              ))}

              {/*<Popover>
                <Popover.Button className="anime-href flex items-center gap-x-1  text-xl font-semibold leading-6 text-white">
                  Consulting
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
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
                    <div className="mx-auto grid  grid-cols-3 gap-x-4 bg-white px-6 py-10 lg:px-8 xl:gap-x-8">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="mx-auto group relative rounded-lg p-2 text-sm leading-6 hover:bg-gray-200 "

                        >
                          <Link
                            href={item.href}
                            className="mt-6 block text-xl font-semibold hover:text-[#151949]  hover:text-2xl"

                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-[#151949] text-base">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                  </Popover.Panel>
                </Transition>
              </Popover>*/}
            </Popover.Group>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full   font-poppins  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#151949]">
              <div className="flex items-center justify-between ">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-12 w-auto"
                    src="https://higherlogicdownload.s3.amazonaws.com/BALDRIGEFOUNDATION/feca4eb6-6fe8-4830-acc6-5649178a00da/UploadedImages/BF_GlobeMainLG_2.png"
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root ">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>

                        </>
                      )}
                    </Disclosure>
                    {mobileNav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg  py-2 text-base font-semibold leading-7 text-white "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}


                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white "
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
