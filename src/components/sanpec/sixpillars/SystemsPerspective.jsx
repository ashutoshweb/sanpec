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
      name: 'Visionary leadership/Shared vision:',
      description: 'The leaders create an organizational mission and core values and maintain a focused vision to manage all the business components as a unified whole to achieve and sustain ongoing success.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Sustainability strategy:',
      description: 'The sustainability strategy provides a feedback-driven intelligence for building and sustaining a value-aligned and purpose-driven organization.',
      icon: HandRaisedIcon,
    },
    {
      name: 'Role-model behavior:',
      description: 'We develop engineering leadership capacity, exemplify role-model behavior, and ensure that our people, processes, and strategies are aligned to achieve performance excellence and sustainability.',
      icon: UserGroupIcon,
    },
  {
    name: 'Prioritized focus:',
    description: 'Our business objectives are systematically created, communicated, and improved. We consistently focus on organizational effectiveness and align people with purpose to deliver exceptional results.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Creating value:',
    description: 'Our system emphasizes managing value-aligned key strategies and measuring performance excellence. We are devoted to being a force for good and achieving sustainability through daily activities.',
    icon: UserGroupIcon,
  }
   
  ]

export default function SystemsPerspective() {
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


        {/* Values section */}
        <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight  sm:text-3xl">Systems Perspective</h2>
            <p className="mt-4 text-lg leading-8">

            </p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:gap-x-16">
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
