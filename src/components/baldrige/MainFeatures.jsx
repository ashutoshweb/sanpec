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

const features = [
  {
    title: 'Baldrige global community',

    content2: ['CIGRE’s engine room is its global community. Across the world thousands of power system professionals are taking time out from their jobs in the industry and volunteering their time to collaboratively share their knowledge and experiences for the greater good of the industry.This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This wide geographic spread, combined with a variety of established experts, experienced practitioners and young professionals, enables CIGRE to offer the most diverse range of power system perspectives and experiences available from any organisation. CIGRE’s community of professionals give their time and energy with an authentic desire to draw upon, share and build technical expertise, ensuring that the knowledge needed to meet the challenges of the power system is accessible to everyone.'],
    description:
      "A collaborative global community sharing knowledge and expertise",
    image: hydrogen,
  },

  {
    title: 'Baldrige global community',

    content2: ['CIGRE’s engine room is its global community. Across the world thousands of power system professionals are taking time out from their jobs in the industry and volunteering their time to collaboratively share their knowledge and experiences for the greater good of the industry.This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This wide geographic spread, combined with a variety of established experts, experienced practitioners and young professionals, enables CIGRE to offer the most diverse range of power system perspectives and experiences available from any organisation. CIGRE’s community of professionals give their time and energy with an authentic desire to draw upon, share and build technical expertise, ensuring that the knowledge needed to meet the challenges of the power system is accessible to everyone.'],
    description:
      "A collaborative global community sharing knowledge and expertise",
    image: hydrogen,
  },

  {
    title: 'Baldrige global community',

    content2: ['CIGRE’s engine room is its global community. Across the world thousands of power system professionals are taking time out from their jobs in the industry and volunteering their time to collaboratively share their knowledge and experiences for the greater good of the industry.This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This wide geographic spread, combined with a variety of established experts, experienced practitioners and young professionals, enables CIGRE to offer the most diverse range of power system perspectives and experiences available from any organisation. CIGRE’s community of professionals give their time and energy with an authentic desire to draw upon, share and build technical expertise, ensuring that the knowledge needed to meet the challenges of the power system is accessible to everyone.'],
    description:
      "A collaborative global community sharing knowledge and expertise",
    image: hydrogen,
  },

  {
    title: 'Baldrige global community',

    content2: ['CIGRE’s engine room is its global community. Across the world thousands of power system professionals are taking time out from their jobs in the industry and volunteering their time to collaboratively share their knowledge and experiences for the greater good of the industry.This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This unique community is underpinned by a global network of 61 CIGRE organisations referred to as the National Committees, or NCs. These on the ground organisations have an in-depth understanding of the local conditions in over 90 countries. NCs also nominate their best local talent for the 250+ Working Groups participating in CIGRE’s global knowledge programme.',
      'This wide geographic spread, combined with a variety of established experts, experienced practitioners and young professionals, enables CIGRE to offer the most diverse range of power system perspectives and experiences available from any organisation. CIGRE’s community of professionals give their time and energy with an authentic desire to draw upon, share and build technical expertise, ensuring that the knowledge needed to meet the challenges of the power system is accessible to everyone.'],
    description:
      "A collaborative global community sharing knowledge and expertise",
    image: hydrogen,
  },

  {
    title: 'Knowledge Programme',

    content2: ['CIGRE operates the world’s foremost power system knowledge development programme of work. At its foundation is CIGRE’s unique structure and the wide spectrum of domains covered.',
      'The CIGRE knowledge programme is driven by key strategic themes defined by the experts of the CIGRE leadership, with the input of the community. These are based around the key drivers affecting the industry and are updated as strategic changes occur.',
      'Strategic themes are fed into 16 consistent domains of work, each led by a dedicated Study Committee. The domains are broadly grouped by four key global power system areas – equipment, technologies, systems, new materials and IT.'],
    description:
      "The world's foremost power system knowledge development programme",
    image: hydrogen,
  },
  {
    title: 'Disaster Management',
    content2: ['Ashu',
      'Das'],
    description:
      "Business continuity management (BCM) and disaster recovery planning",
    image: screenshotExpenses,
  },
  {
    title: 'Sustainability',
    content2: ['Ashu', 'Das'],
    description:
      "Testing and inspection of steel pole, lattice towers, substation support structures, insulators, conductors, OPGW, guy wires, shield wires and hardware assembly",
    image: envision,
  }

]

export function MainFeatures() {
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
      className="relative overflow-hidden  bg-[#151949]  pb-28 pt-20 sm:py-32"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]  bg-[#151949] "
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative bg-[#151949] ">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need in power sector.
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
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 overflow-scroll" style={{ maxHeight: "40rem", height: '40rem', 'overflow': 'scroll' }}>
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
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
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="m-5 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 ">
                      <div
                        className="max-w-3xl"
                        alt=""
                      >
                        <div class="group relative m-5">
                          <h3 class="mt-5 text-lg font-semibold leading-6 text-[#151949] group-hover:text-gray-600">

                            <span class="absolute inset-0">
                            </span>

                            {feature.description}

                          </h3>
                          {feature.content2.map((content) => (<p className='m-3'>{content}</p>))}
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
