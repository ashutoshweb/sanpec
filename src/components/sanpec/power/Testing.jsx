import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import turtleInWaterImage from '@/custom-images/david-troeger-M8xxVih_V_U-unsplash.jpg'
import WaterImage from '@/custom-images/greg-becker-sYzFIusQp3Q-unsplash.jpg'
import steelTowerOld from '@/custom-images/evgeniy-alyoshin-FXw3zkbqd0w-unsplash.jpg'
import steelTower from '@/custom-images/pls_pole_w.gif'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'



const testing = [
  'Ensure that the customer receives quality product',
  'Minimize liability for product failures and construction delays',
  'Mitigate project risk and maximize profitability (cost savings)',
  'ISO (9001, 14001) and AISC Certification',

];

const inspection = [
  'LiDAR Technology',
  'High quality information',
  'Diagnose problem quickly',
  'No outage required and cost savings',
  'Safe and healthy work environment',

];

export default function Testing() {
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
            <div className="mx-auto max-w-2xl pt-10 text-center ">
              <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
                Transmission And Distribution
              </h2>
              <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
                Tower Testing And Inspections
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-10  px-6 lg:px-8">
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Source Inspections at manufacturing facilities:
            </p>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
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

          <div className="mx-auto mt-5  px-6 lg:px-8">
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Field Inspections Using Drones:
            </p>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
                <div className="py-5 text-base leading-7 text-[#151949]">
                  <div className="list-disc text-xl leading-8">
                    {inspection.map((listItem, index) => (
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
