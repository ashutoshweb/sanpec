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

import Image from 'next/image'
import climateandresilience from '@/custom-images/climateandresilience1.png'




const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]







const values = [

  {
    name: 'Quality of Life',
    description:[
      'Improve Community Quality of Life',
      'Enhance Public Health & Safety',
      ' Improve Construction Safety',
      'Minimize Noise & Vibration',
      'Minimize Light Pollution',
      'Minimize Construction Impacts',
      'Improve Community Mobility Access',
      'Encourage Sustainable Transportation',
      'Improve Access & Wayfinding',
      'Advance Equity & Social Justice',
      'Preserve Historic & Cultural Resources',
      'Enhance Views & Local Character',
      'nhance Public Space & Amenities',

    ],
    icon: RocketLaunchIcon,
  },

  {
    name: 'Leadership',
    description:[
      'Provide Effective Leadership & Commitment',
      'Foster Collaboration & Teamwork',
      ' Provide for Stakeholder Involvement',
      'Pursue Byproduct Synergies',
      'Establish a Sustainability Management Plan',
      'Plan for Sustainable Communities',
      'Plan for Long-Term Monitoring & Maintenance',
      'Plan for End-of-Life',
      'Stimulate Economic Prosperity & Development',
      'Develop Local Skills & Capabilities',
      'Conduct a Life-Cycle Economic Evaluation',

    ],
    icon: RocketLaunchIcon,
  },


  {
    name: 'Resource Allocation',
    description:[
      'Support Sustainable Procurement Practices',
      'Use Recycled Materials',
      ' Reduce Operational Waste',
      'Reduce Construction Waste',
      'Balance Earthwork On Site',
      'Reduce Operational Energy Consumption',
      'Reduce Construction Energy Consumption',
      'Use Renewable Energy',
      'Commission & Monitor Energy Systems',
      'Preserve Water Resources',
      'Reduce Operational Water Consumption',
      'Monitor Water Systems',

    ],


    icon: RocketLaunchIcon,

  },
  {
    name: 'Climate and Resilience',
    description:[
      'Reduce Greenhouse Gas Emissions',
      'Reduce Greenhouse Gas Emissions',
        'Reduce Air Pollutant Emissions',
        'Avoid Unsuitable Development',
        'Assess Climate Change Vulnerability',
        'Evaluate Risk and Resilience',
        'Establish Resilience Goals and Strategies',
        'Maximize Resilience',
        'Improve Infrastructure Integratio',

    ],


    icon: RocketLaunchIcon,

  },
  {
    name: 'Natural World',
    description:[
      'Preserve Sites of High Ecological Value',
      'Provide Wetland & Surface Water Buffers',
      ' Preserve Prime Farmland',
      'Preserve Undeveloped Land',
      'Reclaim Brownfields',
      'Manage Stormwater',
      ' Reduce Pesticide & Fertilizer Impacts',
      'Protect Surface & Groundwater Quality',
      'Enhance Functional Habitats',
      'Enhance Wetland & Surface Water Functions',
      'Maintain Floodplain Functions',
      'Control Invasive Species',
      'Protect Soil Health',

    ],


    icon: RocketLaunchIcon,
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

            </p>

          </div>

        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-1">
              <div>
               {/* <p>
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
                </p>*/}
              </div>
              <div>

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
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:gap-x-16 ">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  
                  {value.name}
                  {value.image}
                </dt>{' '}
                <dd className="inline">{value.description.map((item,itemIdx) =>(
                    <div>{item} </div>
                ))}</dd>


              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
      </main>
    </div>
  )
}
