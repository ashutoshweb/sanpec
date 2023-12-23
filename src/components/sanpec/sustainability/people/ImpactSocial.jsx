import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import turtleInWaterImage from '@/custom-images/david-troeger-M8xxVih_V_U-unsplash.jpg'
import WaterImage from '@/custom-images/greg-becker-sYzFIusQp3Q-unsplash.jpg'
import huddlePeople from '@/custom-images/melissa-askew-tSlvoSZK77c-unsplash.jpg'
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



const values = [
  {
    name: 'Societal well-being:',
    description:
      'SANPEC contributes to societal well-being through a feedback-driven and dedicated approach to strengthening local community services, improving the environment and emergency preparedness, quality education, community of excellence, and health goals.',
    icon: UserGroupIcon,
  },

  {
    name: 'Ecosystem-focused business model:',
    description:
      'We apply community-focused business models that contribute to the local economies where we operate and create social and environmental value. We use problem-driven adaptive iteration to co-evolve and co-create sustainable solutions. Our leaders are role models for the well-being of our communities.',
    icon: HandRaisedIcon,
  },

  {
    name: 'Youth Sports: ',
    description:
      'SANPEC is highly involved with local and statewide communities to support quality education, youth sports, and communities of excellence programs through volunteer contributions.',
    icon: RocketLaunchIcon,
  },

  {
    name: 'Strong K-12 support and Workforce commitment: ',
    description:
      'We have devoted our time, money, and resources to support the K-12 communities. The workforce members contribute to the well-being and improvement of the greater Houston communities.',
    icon: RocketLaunchIcon,
  },

   
]

export default function PeopleImpactSocial() {
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
              Social Impact
            </h2>

          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  SANPEC incorporates societal well-being as part of our
                  strategy and daily operations to transform the lives of our
                  workforce and communities.

                </p>
                <p>
                 Sustainability at work involves fostering a workplace culture that prioritizes the well-being, development, and inclusivity of employees. 
                SANPEC aims to create an environment where individuals can thrive, grow, and contribute their best efforts while maintaining a healthy work-life balance.
                </p>
              </div>
              <div>
                <p>
                  <Image
                    alt="global"
                    src={huddlePeople}
                    className="aspect-[9/4] rounded-md"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-12 max-w-7xl px-6 pb-6 sm:mt-12 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-2xl">
            Societal Well-being Initiatives
            </h2>
            <p className="mt-4 text-lg leading-8"></p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16 ">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold">{value.name}</dt>{' '}
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
