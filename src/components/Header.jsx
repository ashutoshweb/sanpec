import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/Analytics', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: 'engagement', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: 'security', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: 'integrations', icon: SquaresPlusIcon },
  { name: 'Automation', description: 'Build strategic funnels that will convert', href: 'automation', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '/demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '/about', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Careers', href: '/careers', description: 'Looking for you next career opportunity? See all of our open positions' },
  {
    name: 'Support',
    href: '/support',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
  },
  { name: 'Blog', href: '/blog', description: 'Read our latest announcements and get perspectives from our team' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://cdn.firespring.com/images/e2e5a88a-f06b-43b7-9f5e-556a83a3d522.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Electric Power
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          <Link href="/power" className="text-sm font-semibold leading-6 text-gray-900">
            Electric Power
          </Link>
          <Link href="/sustainability" className="text-sm font-semibold leading-6 text-gray-900">
            Sustainability
          </Link>
          <Link href="/projects" className="text-sm font-semibold leading-6 text-gray-900">
            Projects
          </Link>
          <Link href="/research" className="text-sm font-semibold leading-6 text-gray-900">
            Research And Innovation
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 ">
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://cdn.firespring.com/images/e2e5a88a-f06b-43b7-9f5e-556a83a3d522.png"
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
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
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

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;