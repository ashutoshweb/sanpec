import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'




const testing = [
  'Identify the substations which are vulnerable to flooding.',
  'Plan for temporary and permanent hardening measures.',
  'For permanent solutions, install sheet piles flood walls that are constructed of composite materials to resist decay and rust.',
  'Raise substation equipment above flood level.',
  'Install flood monitor sensor to alert rising water level.',
  'Substation control houses can be designed for withstand a direct hit from EF3 tornado with back-up control houses available on short',

];



export default function SubstationHardening() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="rounded-md bg-white text-[#151949]">
        <main className="relative isolate">
          {/* Background */}
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

          {/* Header section */}
          <div className="px-6  lg:px-8">
            <div className="mx-auto max-w-2xl  text-center ">



            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-10  px-6 lg:px-8">
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Flooding can create tremendous issues for transmission substations
            </p>
            <div className="mx-auto  lg:mx-0 lg:max-w-none">
              <div className="grid  grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-1">
                <div className="py-5 text-base leading-7 text-[#151949]">
                  <div className="list-disc text-xl leading-8">
                    {testing.map((listItem, index) => (
                        <li key={index} className="py-2 font-semibold normal-case">{listItem}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>
      </div>
  )
}
