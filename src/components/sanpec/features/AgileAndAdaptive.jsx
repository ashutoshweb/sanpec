import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'




export default function AgileAndAdaptive() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-white text-[#151949]">
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
            <div className="mx-auto max-w-2xl pt-10 text-center ">
              <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
                Agile and Adaptive Operations
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#151949]">
                A collaborative global community sharing knowledge and expertise.
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    In a rapidly changing industry landscape, agility is key. Sanpec&apos;s
                    business model is built to be flexible and responsive to market changes. This agility allows the
                    company to quickly adapt to new challenges and opportunities, maintaining a competitive edge
                    in a dynamic environment.
                  </p>

                </div>
                <div>
                  <p>
                    <img
                        alt="global"
                        src="https://www.cigre.org/userfiles/images/Community/CIGRE_Global_community_01.png"
                    />
                  </p>

                </div>
              </div>


            </div>
          </div>

          {/* CTA section */}
        </main>
      </div>
  )
}
