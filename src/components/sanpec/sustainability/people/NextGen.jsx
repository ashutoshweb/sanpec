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
      name: 'Encourage active membership .',
      description: 'Encourage active membership of NGN for the mutual benefit of members and NGN.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Take responsibility.',
      description: 'Report to the Baldrige Steering Committee on a regular basis',
      icon: HandRaisedIcon,
    },
    {
      name: 'Be supportive.',
      description: 'Organize and promote networking events, technical visits, tutorials, and meetings.',
      icon: UserGroupIcon,
    },
   
    {
      name: 'Share everything you know.',
      description: 'Improve communication between Baldrige and NGN members.',
      icon: SparklesIcon,
    },
   
  ]

export default function NextGenFeature() {
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
              Next Generation Network
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#151949]">
              Next Generation  global network sharing knowledge and
              expertise.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  The NGN seeks to facilitate successful transition into the
                  power systems industry for young professionals and students –
                  by providing technical resources and relationship connections
                  to foster technical and career development. The Network aims
                  to ensure that the interests of new members are represented in
                  Baldrige, both for their own benefit and for the future
                  sustainability of Baldrige.
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

        {/* Values section */}
        <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Our goals</h2>
            <p className="mt-4 text-lg leading-8">
            Facilitate successful transition into the power systems industry for young professionals and students.
            </p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
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
