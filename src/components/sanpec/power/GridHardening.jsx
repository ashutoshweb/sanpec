import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'




const testing = [
  'Dual OHGW to reduce the potage caused by lightning.',
  'OPGW to provide the communication path across the grid, enhancing the cybersecurity and improving reliability.',
  'New Insulator design and materials provide greater reliability.',
  'Higher Capacity, steel reinforced conductor allows for more efficient power flow and reduce electrical losses.',
  'Greater clearances between electrical lines reduces outages caused by animal and provides safer working conditions for line crews.',
  'Sturdier steel poles/concrete poles improve resiliency during storms, provide longer lifeexpectancy and lower maintenance costs.',
  'Improved grounding provides better lightning performance and safer operation of T&D system.',


];



export default function GridHardening() {
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


          {/* Content section */}
          <div className="mx-auto mt-10  px-6 lg:px-8">
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Hardening the Grid: &nbsp;
              <span className="text-lg font-semibold leading-8 pl-2 text-blue-800">
                Reinforcing the T&D
                infrastructure to prevent or reduce the damage
                from extreme weather events.
              </span>

            </p>
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Right selection of poles, Towers and Wires:
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
