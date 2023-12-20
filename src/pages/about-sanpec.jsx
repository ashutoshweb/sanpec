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
const sanpec = [
  {
    title: 'Our Vision',
    mainHead:
      'To be the global academic leader in the study, promotion, and practice of performance excellence, leadership, and management.',
    description:
      'SANPEC aims to lead the energy transition and grid modernization with innovative solutions, develop resilience and sustainability, inspire stakeholders for excellence and responsible stewardship, manage resources effectively, contribute to economic and social progress through engineering, and be recognized as a pioneering source of transmission engineering and quality management services.',
    icon: RocketLaunchIcon,
  },
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
      'focused on results and creating value for all stakeholders organizations.',
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
    name: 'Intellectual and Creative Excellence',
    description:
      'SANPEC strives for intellectual and creative excellence, making conscious decisions to generate sustained value for stakeholders, humanity, and the natural world.',
  },
  {
    name: 'Continuous Improvement',
    description:
      'Embracing diversity of ideas, SANPEC is dedicated to continuous improvement in pursuit of truth. They are committed to learning and finding better ways to deliver quality products and services.',
  },
  {
    name: 'Learning and Growth:',
    description:
      'Rooted in STEM and education, SANPEC believes in learning by doing, learning from others, and challenging assumptions to seek new knowledge in service of stakeholders and humanity.',
  },

  {
    name: 'Integrity',
    description:
      ' Maintaining the highest level of integrity is essential for SANPEC, ensuring effective responses to customers and stakeholders.',
  },
  {
    name: 'Trust',
    description:
      'SANPEC values trust and aims to earn it through teamwork, open communication, transparency, integrity, and excellence.',
  },
  {
    name: 'Accountability',
    description:
      ' SANPEC holds itself accountable for improving processes and results at all levels of the value chain.',
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
            <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-10">
              <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
                Center for Resilience and Sustainability
              </h2>
              <p className="mt-6  font-bold leading-8  text-[#e8b44b]">
                Leadership | Performance Excellence | Quality | Resilience | Sustainability
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
              SANPEC has a wealth of experience and expertise in T&D line engineering, testing, and manufacturing, with a strong commitment to quality, sustainability, and professional development through academic affiliations and active participation in industry committees.
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
            Our innovative solutions help solve critical challenges by
            integrating deep domain expertise, market research, Insights, and
            advanced technology capabilities.
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
