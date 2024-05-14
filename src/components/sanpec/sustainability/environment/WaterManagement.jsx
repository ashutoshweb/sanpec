import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import turtleInWaterImage from '@/custom-images/david-troeger-M8xxVih_V_U-unsplash.jpg'
import WaterImage from '@/custom-images/greg-becker-sYzFIusQp3Q-unsplash.jpg'
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

const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]

const values = [

  {
    name: 'Watershed Stewardship:',
    description:
      'We actively participate in voluntary efforts to protect watersheds, including Caddo Lake, a Ramsar Convention-designated wetland. Additionally, we engage in the Illinois River Watershed Partnership (IRWP) and support environmental education through grants, benefiting thousands of students.',
    icon: UserGroupIcon,
  },
  
  {
    name: 'Water Management in High-Risk Areas:',
    description: 'Drought and flooding can impact our operations, particularly in drought-prone regions. We have conservation plans for select power plants, conserving millions of gallons of water in 2022. The Knox Lee Plant implemented Stage 1 of its drought contingency plan for two weeks in August 2022. The Pirkey Plant ceased operation as planned in April 2023, further reducing water use.',
    icon: HandRaisedIcon,
  },

  {
    name: 'Water Use Reporting: ',
    description:
      'We prioritize transparency by extensively reporting our water management, fulfilling both required and voluntary obligations. Our water data is shared in platforms like the ESG Data Center and the CDP Water Survey.',
    icon: RocketLaunchIcon,
  },
  

  
]

export default function EnvWater() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white text-[#151949] rounded-md">
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
            Water Use & Management
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#151949]">
            Balancing Consumption, Reporting, and Conservation
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                Water is vital for electricity production and various processes, notably equipment cooling. While the majority of our power generation relies on water, we aim to minimize consumption. Most water is returned to its source, with less than 3% lost to evaporation from cooling and flue gas scrubbing. We expect reduced water use with the addition of water-independent wind and solar assets, coupled with the retirement of fossil fuel generation.
                </p>
              </div>
              <div>
                <p>
                  <Image
                    alt="global"
                    src={WaterImage}
                    className='aspect-[9/4] rounded-md'
                   
                   
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-12 lg:px-8 pb-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-2xl">
            Water Resource Management
            </h2>
            <p className="mt-4 text-lg leading-8">
            
            </p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16 ">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
      </main>
    </div>
  )
}
