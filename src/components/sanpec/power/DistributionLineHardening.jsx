import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'




const testing = [
  'Implement wildfire mitigation plan to monitor weather and equipment.',
  'Enhance inspections process of all overhead power lines in high fire risk areas and apply preventive maintenance to reduce risks of ignition.',
  'Use fire-resistant poles, composite cross-arms, and covered conductors in high fire risk areas.',
  'Install current limiting fuses that interrupt current more quickly to boost reliability by segmenting circuits to isolate problems.',
  'Install HD camera that enable fire agencies to observe potential fire activity.',
  'Install weather stations with multiple sensors to provide real time weather data.',
  'Evaluate the ability to install new access roads and increase line ROW.',
  'As a last resort, cut power to high fire areas when winds reach above a certain predetermined threshold.',

];



export default function DistributionLineHardening() {
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
              Fire Prevention and Detection:

              <span className="text-lg font-semibold leading-8 pl-2 text-blue-800">

                Severe drought conditions
                coupled with high winds and other factors, have resulted in an
                increased number and severity of wildfires that can devastate
                natural habitats and communities.
              </span>


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
