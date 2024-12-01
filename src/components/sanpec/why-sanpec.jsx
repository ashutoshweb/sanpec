import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import sanpecBalrigeExcellence from '@/custom-images/Sanpec-Baldrige.jpeg'
import sanpecExcellence from '@/custom-images/SanpecExcellence.jpeg'
import circular1 from '@/custom-images/Circular-1.jpeg'
import circular2 from '@/custom-images/Circular-2.jpeg'

import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const sanpecImage = {
  image1: sanpecExcellence,
  image2: sanpecBalrigeExcellence,
  image3: circular1,
  image4: circular2
}

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]

const timeline = [
  {
    name: 'Founded company',
    description:
      'SANPEC was founded to improve the resilience and reliability of power grid systems',
    date: 'Aug 2009',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const sanpec = [
  {
    title: 'Project Management',
    mainHead:
      "From Planning to Execution, SANPEC's Skilled Team Ensures Efficiency, Risk Mitigation, and Global Experience.",
    description:
      'SANPEC develops detailed project schedules to meet construction demands, assists in vendor selections and evaluations, and helps negotiate the best pricing and delivery schedules from vendors. We assist with risk mitigation planning while keeping track of all milestones and critical delivery items. From initial project strategy to lean product development to completion and post-project monitoring, we are the only business where the team is well-trained to lead from the point of dynamic balance and alignment. ',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Logistics and Construction Support',
    mainHead:
      'SANPEC Manages Material Inspection, Documentation, and Technical Assistance for Seamless Construction Projects.',
    description:
      'In Logistics and Construction Support, SANPEC employees follow up logistics planning from vendors, perform inspection of material upon arrival at port and yards, help to track bundling/packaging lists and BOL for tower components for each structure and payment process, and support customers during construction projects, keeping their fingers on the pulse of missing pieces or mis-fab pieces as well as any technical issues.',
    icon: RocketLaunchIcon,
  },

  {
    title: 'Manufacturing and Operational Efficiency',
    mainHead:
      "Enhancing Efficiency in Pole and Tower Manufacturing: SANPEC's End-to-End Services Streamline Processes, Accelerate Feedback, and Enhance Product Development.",
    description:
      'Today’s pole and tower manufacturers focus on managing timelines to improve efficiency and factory capacity utilization. The information is delivered asynchronously in large batches. As a result, the factory floor is unaware of design-in-process and the dynamic changes in engineering and materials. Team SANPEC ensures a smooth execution at all levels. We offer full-spectrum service, covering the entire value chain from engineering to development and delivery, including structure testing and quality inspection. We minimize the invisible and unmeasured queues that impact structure development performance. As a result, we help our value chain partners accelerate feedback and improve product development and response time.',
    icon: RocketLaunchIcon,
  },

  {
    title: 'Testing and Inspection',
    mainHead:
      "SANPEC Ensures Quality and Safety Across a Range of Structural Components and Materials.",
    description:
      'SANPEC also completes testing and inspection of steel pole, lattice towers, substation support structures, insulators, conductors, OPGW, guy wires, shield wires and hardware assembly.  We perform Weld Inspections (NDT Technique), Visual Inspection (VI), Magnetic Particle Inspection (MPI), Ultrasonic Testing (UT), Dye Penetrant Inspection (DPI), Phase Array (PAUT), Fabrication Shop Audits and on-site Inspections, Material Sampling (Metallurgical and Mechanical Testing), Root Cause Analysis, Prototype and Proof of Fit Testing, and Field Inspection for aging transmission structures.',
    icon: RocketLaunchIcon,
  },
  
]

const values = [
  {
    name: 'Visionary Leadership',
    description:
      'focused on results and creating value for all partner organizations.',
    icon: '',
  },
  {
    name: 'Unwavering Commitment',
    description:
      'to continuous improvement and Organizational Performance Excellence.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Trust',
    description:
      'through teamwork, open communication, transparency, diversity and inclusion.',
    icon: HandRaisedIcon,
  },

  {
    name: 'Innovation',
    description:
      'taking creative risks to build a more agile organization that drives transformative change internally.',
    icon: AcademicCapIcon,
  },
]

const whatWeDo = [
  {
    name: 'Product Expertise',
    description:
      'Expertise in a range of items including steel poles, lattice towers, insulators & hardware, conductor, OPGW (Optical Ground Wire), guys wires, and shield wire, all of which are essential components in transmission line engineering and manufacturing.',
  },
  {
    name: 'Transmission and Distribution',
    description:
      'Specialize in T&D (Transmission and Distribution) Line Engineering, Testing, and Manufacturing. Full-scale structural testing, both witnessing and validation, which ensures the safety and reliability of their products and designs.',
  },
  {
    name: 'Sustainability Approach',
    description:
      'SANPEC has a sustainability approach in its transmission line engineering and manufacturing of steel structures, indicating a commitment to environmentally responsible practices.',
  },

  {
    name: 'Experience',
    description:
      ' SANPEC has 160 years of combined worldwide experience in design, engineering, fabrication, and source inspection services, particularly for the power and lighting industries',
  },
  {
    name: 'Professional  Affiliations:',
    description:
      'Participates in professional committees such as ASCE-10, ASCE-48, MOP-74, DOT-AFL, Aesthetic Report, IEEE, and NSPE.',
  },
  {
    name: 'Academic Affiliations',
    description:
      ' Published technical papers in reputable journals like ASEC/SEI, IEEE, EDM, and TSDOS. Academic affiliation with Gonzaga University, specifically in the Master’s Degree Program in T&D (Transmission and Distribution) Engineering.',
  },
]

const valuesX = [
  {
    name: ' Improve economic decisions at all levels of the value-chain.    ',
    description: ''
      
  },

  {
    name: 'Manage dynamic queues and projects effectively in the presence of variability.',
    description:
      '',
  },

  {
    name: 'Accelerate feedback and maintain decentralized control.',
    description:
      ' ',
  },
  {
    name: 'Reduce Idle time and optimize WIP',
    description:
      '',
  },  
 
]
const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function WhySanpec() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      {/* Header */}

      <main className="">
        {/* Background */}

        {/* Header section */}
        <div className="relative isolate bg-gray-900"></div>

        {/* Image section */}
        <div id ='why-sanpec' className=" bg-white pb-12 text-[#151949] ">
          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl bg-white px-6 pt-12 sm:mt-12 lg:px-8">
            <div className="mx-auto max-w-full lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Why SANPEC ?
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8">
                SANPEC is a purpose-led, impact-focused, and innovation-driven company specializing in design,
                engineering, testing, supply chain, asset inspection, risk mitigation, sustainability, and quality
                management for critical electric power, lighting, and renewable energy infrastructures.
                SANPEC team has extensive worldwide experiences in executing transformation line projects with holistic approach.
              </p>

            </div>



            <div className="mt-32  sm:mt-10 xl:mx-auto xl:max-w-7xl xl:px-8 ">
              <Image
                src={sanpecImage.image3}
                alt=""
                className="w-full object-cover xl:rounded-3xl"
              />
            </div>

            <div className="mx-auto mt-6 pl-12 text-lg font-semibold leading-8">
              <p className="pt-5">
                We are a diverse team of purpose-led engineers and
                multidisciplinary professionals with an uncompromising focus on
                resilience, reliability, sustainability, quality, and
                excellence.
              </p>
              <p className="pt-5">
                We have the skill sets and mindsets to lead the transition to a
                circular economy and execute complex infrastructure projects
                with unparalleled engineering excellence, extensive fabrication
                knowledge, cutting-edge research, conscious leadership, and
                integrated quality management practices.
              </p>
              <p className="pt-5">
                We have engineered, fabricated, inspected, and restored millions
                of assets to ensure structural integrity and improve the quality
                of life. Our innovative solutions help solve critical challenges
                by integrating deep domain expertise, market research, valuable
                insights, and advanced technology capabilities.
              </p>
              <p className="pt-5">
                We provide the right blend of cutting-edge research,
                breakthrough innovations, unconventional wisdom, and
                unparalleled technical expertise to ensure the project benefits
                socio-economic value n the dynamic and disruptive energy sector.
              </p>
              <p className="pt-5">
                We are uniquely positioned to lead the energy transition with
                innovative and strategic solutions while anticipating and
                mitigating tomorrow&apos;s disruptions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
            Managing grid resilience and sustainability
          </h2>
          <p className="mt-6 text-xl leading-8 text-white">
            Our innovative solutions help solve critical challenges by
            integrating deep domain expertise, market research, Insights, and
            advanced technology capabilities.
          </p>
        </div>

        

        <div id ="" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {sanpec.map((value) => (
              <div key={value.name} className="relative pl-9">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-2xl">
                    {value.title}
                  </h2>
                </div>
                <dt className="inline  ">
                  <p className="mt-6 text-xl leading-8 text-[#e8b44b]">
                    {value.mainHead}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white ">
                    {value.description}
                  </p>
                </dt>{' '}
              </div>
            ))}
          </dl>
        </div>


      </main>

      {/* Footer */}
      <div className="relative mt-32 sm:mt-12" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8"></div>
        </div>
      </div>
    </div>
  )
}
