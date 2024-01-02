import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import flowchartSourceInspection from '@/custom-images/flowchart-source-inspection.png'
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



const takeawayList1 = [
  'Transmission Line Engineering (Sustainability Approach)',
  'Structural Analysis, Design and Detailing of Steel Poles and Lattice Towers',
  'Full Scale Structural Testing (Witnessing and Validation)',
  'Minimize adverse environmental impacts',
  'Optimize the ROW',
  'Plan resiliency in transmission line system',


];

const takeawayList2 = [
  'Deliver electricity in safe, reliable and an efficient manner',
  'Provide economic benefits to shareholders and communities',
  'Optimize operational and maintenance practices',
  'Use environmentally preferable structures: Steel Poles/Towers',
  'Utilize lifecycle economics and use best practice specs',

];


export default function Introduction() {
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
          <div className="mx-auto max-w-2xl pt-2 text-center ">
            <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
              Source Inspection
            </h2>
            <p className="mt-6 text-lg font-bold leading-8 text-blue-800">
              Introduction
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-2">
              <div>
                <p className=" text-xl leading-8">
                  A source inspection is a quality inspection in which
                  utility customers (clients) require a quality check
                  before the material is received.

                  There are many reasons to utilize source inspection services. While most
                  customers aim to increase efficiency and profitability by minimizing the expense related to production
                  errors, there are various other benefits that are of ten overlooked.

                  As most of the manufacturing world has
                  evolved to a “Just in Time” delivery model, source
                  inspection services become increasingly critical to the
                  assurance of on-time delivery of properly specified transmission structures and its components.


                </p>

              </div>
              <div>
                <p>
                  <Image
                      alt="global"
                      src={flowchartSourceInspection}
                      className="aspect-[9/5] rounded-md"
                  />
                </p>
              </div>
            </div>

            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-[#151949] lg:max-w-none lg:grid-cols-1">
              <div>
                <p className="mt-6 text-xl leading-8">
                  And aside from product shipment delays, mitigating risk up
                  front at the supplier point is the best way to
                  minimize liability for product failures and construction delays. Due to orders exceeding current
                  production capacity, many suppliers are having sub-assemblies and components fabricated by 3rd
                  party vendors. Quality assurance and control needs to be
                  monitored by either suppliers or outsourced vendors
                  by highly qualified representatives at site. Source inspection insures that the suppliers and 3rd party
                  subcontractors are aware of the owner’s specification and that the owner’s will only accept quality
                  finished products that meet those specifications.
                </p>
              </div>
              <div>
                <p className="mt-6 text-xl leading-8">
                  It is a very common practice today that the utility customers rely on a supplier’s own quality assurance
                  program and in-house inspection process for manufacturing transmission structures. Most of the
                  customers provide detailed technical specification along with an important statement that all
                  2012-TSDOS-Why Source Inspection Is Critical For.pdf
                  The 45th Annual Transmission & Substation Design & Operation Symposium
                  2
                  manufacturing related work shall be performed in accordance with the highest industry standards and in
                  compliance with all applicable codes. Due to large recent investment in transmission infrastructure and
                  subsequent growing demand for transmission structures, utility customers are making compromise in pre-
                  approval process and allowing new suppliers from both
                  domestic and international level. There are huge
                  shortages of skilled and experienced manpower industry
                  wise which is affecting the quality of finished
                  products. Customers are facing several challenges due to
                  poor quality materials at job site and losing
                  millions of dollars in downtime and start-up delays. Today’s fast paced manufacturing world, it is highly
                  recommended that the utility customers should implement source inspection or third part inspection
                  process at the manufacturing plant. This paper provid es general guidelines of source inspection for Steel
                  Tubular Poles and Lattice Steel Towers
                </p>
              </div>
              <div>

              </div>
            </div>



          </div>
        </div>


      </main>
    </div>
  )
}
