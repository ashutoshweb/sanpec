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

const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]

const values = [
  {
    name: 'Environmental Compliance .',
    description:
      'Our operations adhere to federal statutes like the Clean Air Act, Clean Water Act, and more. As environmental regulations evolve, our industry faces technical, operational, and financial challenges. We actively participate in developing well-informed regulations. For more disclosure, refer to SEC Form 10-K.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Compliance in Action',
    description: 'Our facilities undergo environmental inspections, ensuring regulatory compliance. We verify compliance through internal audits, revealing potential gaps. In 2022, 21 environmental audits were conducted.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Environmental Performance',
    description:
      'We set annual targets, aiming for zero violations. Our Environmental Performance Index (EPI) promotes self-reporting and prevention. New standards in 2022 expanded EPI events, including air and land media events, with 35 EPI events. Strategies in 2023 aim to develop a similar standard for the Energy Delivery business.',
    icon: UserGroupIcon,
  },

  {
    name: 'Environmental Good Catch',
    description: 'Our program identifies and prevents conditions leading to environmental events, fostering an accountable culture. Over 300 Good Catches were identified in 2022, ensuring compliance.',
    icon: SparklesIcon,
  },
]

export default function EnvCompliance() {
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
              Environmental Compliance
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#151949]">
            Striving for Zero Violations and Enforcement Actions
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  At SANPEC, our goal is zero violations of environmental laws and
                  regulations and zero enforcement actions. We strive towards
                  this goal through our commitment to operational excellence
                  which includes complying with all applicable environmental
                  regulations and being good stewards of Earth’s natural
                  resources. Whether through reclaiming former industrial land
                  for outdoor recreation, reducing our water consumption,
                  integrating conservation measures into new and rebuilt
                  transmission lines, or responsibly managing our waste, we
                  value and practice environmental stewardship and conservation
                  across our service territory.
                </p>
              </div>
              <div>
                <p>
                  <img
                    alt="global"
                    src="https://www.cigre.org/userfiles/images/Community/CIGRE_Global_community_01.png"
                    className='aspect-[9/7]'
                   
                   
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
            Commitment to Environmental Excellence
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