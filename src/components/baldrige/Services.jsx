import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import hydrogen from '@/custom-images/Hydrogen-production-plants_.jpg'
import envision from '@/custom-images/ENVISION1.png'
import { BalridgeHeader1 } from '@/components/baldrige/BalridgeHeader1'
import DEContent from '../DEContent'
import KnowledgeFeature from './features/Knowledge'
import AboutBaldrige from '@/pages/aboutus'


import Events from '@/custom/Events'

import CommunityFeature from './features/community';

let name = 'Ashu'

const features = [
  {
    title: 'Baldrige global community',

    content2: [
      'CIGRE’s engine room is its global community. Across the world thousands of power system professionals are taking time out from their jobs in the industry and volunteering their time to collaboratively share their knowledge and experiences for the greater good of the industry.This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This wide geographic spread, combined with a variety of established experts, experienced practitioners and young professionals, enables CIGRE to offer the most diverse range of power system perspectives and experiences available from any organisation. CIGRE’s community of professionals give their time and energy with an authentic desire to draw upon, share and build technical expertise, ensuring that the knowledge needed to meet the challenges of the power system is accessible to everyone.',
    ],
    description:
      'A collaborative global community sharing knowledge and expertise',
    image: hydrogen,
  },

  {
    title: 'Knowledge Programme',

    content2: [
      'CIGRE operates the world’s foremost power system knowledge development programme of work. At its foundation is CIGRE’s unique structure and the wide spectrum of domains covered.',
      'The CIGRE knowledge programme is driven by key strategic themes defined by the experts of the CIGRE leadership, with the input of the community. These are based around the key drivers affecting the industry and are updated as strategic changes occur.',
      'Strategic themes are fed into 16 consistent domains of work, each led by a dedicated Study Committee. The domains are broadly grouped by four key global power system areas – equipment, technologies, systems, new materials and IT.',
    ],
    description:
      "The world's foremost power system knowledge development programme",
    image: hydrogen,
  },

  {
    title: 'Knowledge Programme',

    content2: [
      'CIGRE operates the world’s foremost power system knowledge development programme of work. At its foundation is CIGRE’s unique structure and the wide spectrum of domains covered.',
      'The CIGRE knowledge programme is driven by key strategic themes defined by the experts of the CIGRE leadership, with the input of the community. These are based around the key drivers affecting the industry and are updated as strategic changes occur.',
      'Strategic themes are fed into 16 consistent domains of work, each led by a dedicated Study Committee. The domains are broadly grouped by four key global power system areas – equipment, technologies, systems, new materials and IT.',
    ],
    description:
      "The world's foremost power system knowledge development programme",
    image: hydrogen,
  },

  {
    title: 'hjgdchjsdhjc',

    content2: [
      'The G20 Culture Ministers met for the first time in 2020 and highlighted culture’s cross-cutting contribution to advancing G20 agenda. Recognizing the synergies between culture and other policy areas, and considering the impact of culture, cultural heritage and the creative economy on the economic, social and environmental dimensions of development, culture was integrated into the G20 agenda as a Culture Working Group in 2021. The group aims to strengthen international cooperation and collaboration to support cultural and creative industries.',
      'The CIGRE knowledge programme is driven by key strategic themes defined by the experts of the CIGRE leadership, with the input of the community. These are based around the key drivers affecting the industry and are updated as strategic changes occur.',
      'Strategic themes are fed into 16 consistent domains of work, each led by a dedicated Study Committee. The domains are broadly grouped by four key global power system areas – equipment, technologies, systems, new materials and IT.',
    ],
    description:
      "The world's foremost power system knowledge development programme",
    image: hydrogen,
  }
]

const compMap = {
  0: <CommunityFeature/>,
  1: <KnowledgeFeature />,
  2: <AboutBaldrige />,
  3: <Events />
}

export function Services() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden  bg-[#151949]  pb-28 pt-20 sm:py-12"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]  bg-[#151949] "
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative bg-[#151949] mb-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need for your business.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            We excel at all these and give you the best the industry provides.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div
                className="-mx-4 flex overflow-scroll overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible  sm:pb-0 lg:col-span-5"
                style={{
                  maxHeight: '70rem',
                  height: '70rem',
                  overflow: 'scroll',
                }}
              >
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal  border-white border-2">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? ' bg-gradient-to-r from-indigo-500/10 via-purple-500 to-blue-500/10 lg:ring-1 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/10'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block ',
                          selectedIndex === featureIndex
                            ? 'text-white  '
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7 bg-white border-white border-2 " style={{
                  minHeight: '50rem',
                  height: '70rem',
                  overflow: 'scroll',
                 
                 
                }}>
                {features.map((feature) => (
                  <div key={feature.title} flex w-100 className='border-white  border-2'>
                    <Tab.Panel key={feature.title} unmount={false}>
                   
                        {compMap[selectedIndex]}
                        
                 </Tab.Panel>
                 </div>
                  
                  
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
