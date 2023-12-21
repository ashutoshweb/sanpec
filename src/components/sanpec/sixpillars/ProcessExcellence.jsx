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



const values = [
    {
      name: '',
      description: 'Purpose-driven decision-making ensures a dynamic balance between growth and the common good.',
      icon: RocketLaunchIcon,
    },
    {
      name: '',
      description: 'Our values guide our behavior. It promotes consistent product/service quality and customer satisfaction.',
      icon: HandRaisedIcon,
    },
    {
      name: '',
      description: 'We provide a unique system and comprehensive approach for filling the gaps and addressing long-term priorities beyond making plans and implementing short-term projects.',
      icon: UserGroupIcon,
    },
    {
        name: '',
        description: 'We actively improve the process, value people, share ideas, and discuss issues for improving the company and the community.',
        icon: RocketLaunchIcon,
    },
    {
        name: '',
        description: 'We help, mentor, and train others to deliver value and achieve their performance goals.',
        icon: HandRaisedIcon,
    },
    {
        name: '',
        description: 'Excellence in all we do.',
        icon: RocketLaunchIcon,
    },
    {
        name: '',
        description: 'Effective business model has helped us learn the necessity for stewardship of physical, financial, environmental, and human resources. We create an environment for high performance and long-term sustainability by developing, nurturing, and maintaining a purpose-led, customer-focused, and value-driven entrepreneurial culture.',
        icon: HandRaisedIcon,
    },
   
  ]

export default function ProcessExcellence() {
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
            <h2 className="text-2xl font-bold tracking-tight  sm:text-2xl">Continuous Improvement in Business Processes</h2>
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
