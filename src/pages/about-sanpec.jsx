import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import sanpecBalrigeExcellence from '@/custom-images/Sanpec-Baldrige.jpeg'
import sanpecExcellence from '@/custom-images/SanpecExcellence.jpeg'
import WhySanpec from '../components/sanpec/why-sanpec'

import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import { Faqs } from '@/components/Faqs'


const sanpecImage = {
  image1: sanpecExcellence,
  image2: sanpecBalrigeExcellence,
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
const sanpecVision = [
  {
    title: 'Our Vision',
    mainHead:
      'To be the global academic leader in the study, promotion, and practice of performance excellence, leadership, and management.',

    icon: RocketLaunchIcon,
  },

]

const sanpecMission = [

  {
    title: 'Our Mission',
    mainHead:
        'To be the global academic leader in the study, promotion, and practice of performance excellence, leadership, and management.',
    description:
        'The mission of SANPEC includes making the world a better place for future generations, creating innovative solutions for sustainability in the power and utilities sectors, offering strategic insight to industry leaders on leveraging emerging technologies, managing business operations effectively, focusing on agility, innovation, and creativity, valuing people, delivering results, and achieving excellence at all levels.',
    icon: RocketLaunchIcon,
  },
]

const values = [
  {
    name: 'Visionary Leadership',
    description:
      'focused on results and creating value for all stakeholders.',
    icon: UserGroupIcon,
  },
  {
    name: 'Unwavering Commitment',
    description:
      'to continuous improvement and sustainable value creation.',
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
      'taking creative risks to build a more agile organization that drives holistic change.',
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
    name: 'Trust',
    description:
        'We earn trust through teamwork, open communication, transparency, integrity, and excellence.',
  },
  {
    name: 'Visionary Leadership: ',
    description:
      'We provide an unwavering commitment to quality, intellectual and creative excellence, integrity, loyalty, and sustainability. We are devoted to creating and sustaining value for all stakeholders.',
  },
  {
    name: 'Innovation: ',
    description:
        'We seek new knowledge and take creative risks to build a more agile organization that drives transformative change internally and in response to our stakeholder’s needs. We reward courage, discovery, authenticity, exploration, and invention.',
  },
  {
    name: 'Continuous Improvement: ',
    description:
      'We respect the diversity of ideas, continuously improve in pursuit of truth, and are devoted to learning and improving ways to deliver quality products and services.',
  },
  {
    name: 'Accountability: ',
    description:
      'We are committed to improving our process and results at all levels of the value chain.',
  },

  {
    name: 'Integrity: ',
    description:
      'We maintain the highest level of integrity to satisfy and respond to customers and stakeholders effectively. We listen to each other’s, our partners, and our customers.',
  },

  {
    name: 'Team Development: ',
    description:
        'We develop teams and provide learning opportunities to expand upon ideas and develop strategic, creative solutions.',
  },
  {
    name: 'Community: ',
    description:
        'We blur the cultural boundaries, co-evolve, and strive to make our community a better place to live, work, and play.',
  },
  {
    name: 'Co-Creation: ',
    description:
        'We believe in co-creating an open, active, unified, and evolving socio-cultural system and being a part of our local communities to lead from the point of balance and alignment.',
  },

  {
    name: ' ',
    description:
        'We strive for intellectual and creative excellence, lead with the highest standards of integrity, use the full spectrum of human wisdom, and make conscious decisions to realize sustained value for our stakeholders, humanity, and the natural world.',
  },

  {
    name: ' ',
    description:
        'Drawing strength from our distinctive roots in STEM and education, we believe in learning by doing, learning from others, leading with integrity, and challenging our assumptions to seek new knowledge in service of our stakeholders and humanity.',
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

export default function AboutSanpec() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      {/* Header */}

      <main className="">
        {/* Background */}

        {/* Header section */}
        <div className="relative isolate bg-gray-900">
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
          <div className="px-6 pt-5 lg:px-8">
            <div className="mx-auto max-w-4xl pt-24 text-center sm:pt-10">
              <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
                Bringing Engineering Excellence
              </h2>
              <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
                Improving Power Grid Reliability
              </h2>
              <p className="mt-6  font-bold leading-8  text-[#e8b44b]">
                Leadership | Excellence | Quality | Innovation |Resilience | Sustainability
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-8">
                <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                  {values.map((value) => (
                    <div key={value.name} className="relative pl-9">
                      <dt className="inline text-xl font-semibold text-[#e8b44b]">
                        <value.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                          aria-hidden="true"
                        />
                        {value.name}
                      </dt>{' '}
                      <dd className="inline text-lg">{value.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className=" bg-white pb-12 text-[#151949] ">
          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl bg-white px-6 sm:mt-40 lg:px-8 pt-12">
            <div className="mx-auto max-w-full lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Who we are
              </h2>
              <p className="mt-6 text-lg leading-8 font-semibold">
                SANPEC is a purpose-led, values-aligned, and innovation-driven company specializing in design,
                engineering, testing, supply chain, asset inspection, risk mitigation, sustainability, and quality
                management for critical electric power, lighting, and renewable energy infrastructures.
                SANPEC team has extensive worldwide experiences in creating value chain management with holistic approach.
              </p>
            </div>

            <div className="mt-32  sm:mt-10 xl:mx-auto xl:max-w-7xl xl:px-8 ">
            <Image
              src={sanpecImage.image1}
              alt=""
              className="aspect-[9/4.2] w-full object-cover xl:rounded-3xl"
            />
           
          </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {whatWeDo.map((value) => (
                <div key={value.name}>
                  <dt className="font-bold text-xl ">{value.name}</dt>
                  <dd className="mt-1 text-lg text-gray-900">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        

        <div id='journey-of-excellence' className="mt-32 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
            Journey Of Excellence
          </h2>

          <p className="mt-6 text-xl leading-8 text-white">

            SANPEC was founded to improve the resilience and reliability of power grid systems and has been privately owned and operated since 2009. Our unique approach, &quot;SANPEC&quot; allows us to create, measure, transfer, and recreate knowledge effectively.
            </p>
          <p className="mt-6 text-xl leading-8 text-white">
            In the &apos;90s, SANPEC co-founders were the emerging leaders of the quality revolution in the electric power sector, driving it toward sustainability. They realized that the power industry was plagued by irresponsible use of resources, ineffective leadership and strategy, unsustainable business models and processes, inefficient operations, workforce, and risk planning. In response, they set out a new vision &quot;SANPEC&quot; to restructure and transform the electric power sector.
            </p>
          <p className="mt-6 text-xl leading-8 text-white">
            At SANPEC, we aim to continuously improve structural resilience, reliability, and quality of life through engineering excellence, research and innovation, education and outreach, co-creation, and collaboration. In addition, we aim to bring a focused approach toward improving transmission and distribution systems and creating socio-economic values
            </p>

        </div>

        {/* Image section */}

        <div className="mt-32 sm:mt-8 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            className="aspect-[9/4.2] w-full  object-cover xl:rounded-3xl "
            src={sanpecImage.image2}
            alt=""
            sizes="50rem"
          />
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {sanpecVision.map((value) => (
                <div key={value.name} className="relative pl-9">
                  <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-2xl">
                      {value.title}
                    </h2>
                  </div>
                  <dt className="inline  ">
                    <p className="mt-6 text-xl leading-8 text-[#e8b44b]">

                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Lead the energy transition and grid modernization initiatives with innovative and strategic solutions while anticipating and mitigating tomorrow’s disruptions.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Develop skill sets and mindsets to build resilience and manage sustainability goals effectively
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Inspire our stakeholders to achieve excellence and promote responsible stewardship of our physical, financial, environmental, and human resources.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Manage our physical and natural resources effectively and create a sense of pride among all our employees. We use impact-focused and purpose-driven engineering to contribute to economic and social progress and develop a responsible culture.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Be recognized as the pioneering source of transmission engineering, inspection, and holistic quality management services.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Work with stakeholders to continuously improve and create value through engineering, research, and deployment of cutting-edge technology, leadership, and management practices.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Lead the energy transition and grid modernization initiatives with innovative and strategic solutions while anticipating and mitigating tomorrow’s disruptions.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Be the global leader in developing strategic and innovative engineering solutions for energy transition and sustainability in the electric power sector.
                    </p>
                  </dt>{' '}
                </div>
            ))}

            {sanpecMission.map((value) => (
                <div key={value.name} className="relative pl-9">
                  <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-2xl">
                      {value.title}
                    </h2>
                  </div>
                  <dt className="inline  ">
                    <p className="mt-6 text-xl leading-8 text-[#e8b44b]">

                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Leverage our unshakable resolve to make the world a better place for future generations.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Create innovative solutions for sustainability in the power and utilities sectors.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Offer strategic insight into how new approaches and business models will enable today’s power and utility industry leaders to use emerging technologies and breakthrough innovation to succeed in this rapidly changing landscape.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Use our business excellence framework to manage business operations effectively and generate value for all our stakeholders.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Focus on the future by managing agility, innovation, and creativity.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Value people, deliver results, and focus on achieving excellence at all levels.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Achieve and sustain success by developing a mission-driven, happy, healthy, and engaged workforce.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Explore the power of renewable energy sources (such as wind, solar, and hydrogen) and build a clean, green, and energy-secure America.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Bring together the best talents, knowledge, and experience to design, build, and upgrade reliable, cost-effective, environmentally friendly, technically advanced, and resilient transmission and distribution systems.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Achieve our strategic priorities through focused, dedicated action and real-time performance feedback.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Build a diverse team of purpose-led and innovative power engineers and conscious industry leaders who contribute to the common good and advance engineering excellence practices.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white ">
                      Bring growth and opportunity to our employees, shareholders, and partners worldwide to improve their qualities of life.
                    </p>

                  </dt>{' '}
                </div>
            ))}

          </dl>
        </div>




        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-16">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-2xl">
              Our values
            </h2>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {valuesX.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-xl text-[#e8b44b]">{value.name}</dt>
                <dd className="mt-1 text-lg  text-white">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <WhySanpec/>


        {/* Values section 
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-12 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline text-xl font-semibold text-[#e8b44b]">
                  <value.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{' '}
                <dd className="inline text-lg">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        */}

        

        
{/* 
<div className="">
          <div className="mx-auto mt-32 max-w-7xl p-12 px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg leading-8 ">
                Excepturi repudiandae alias ut. Totam aut facilis. Praesentium
                in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum
                culpa.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <img
                    className="aspect-[14/13] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight ">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 ">{person.role}</p>
                  <p className="text-sm leading-6 ">{person.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="relative isolate mt-32 sm:mt-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Join our team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    See our job postings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div> 

         <div className="relative mt-32 sm:mt-40" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8"></div>
        </div>
      </div>
        
        */}
        
      </main>

      
     
    </div>
  )
}
