import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

import hydrogen from '@/custom-images/Hydrogen-production-plants_.jpg'
import CommunityFeature from '../features/community'
import SanpecProject from '@/pages/project'

import Datatheme from '@/components/common/Datatheme'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import Blog4 from './Blog4'

let name = 'Ashu'

const features = [
  {
    title: 'Innovating for Sustainability',

    description:
      '',
    image: hydrogen,
  },

  {
    
    title: 'Bringing Engineering Excellence Improving Power Grid Reliability',

    description:
      "",
    image: hydrogen,
  },

  {
   
    title: 'Laying The Foundation Of Sustainability ',

    description:
      '',
    image: hydrogen,
  },
  {
    title: 'Risk Mitigation Planning in Transmission Line Project',

    description: '',
    image: hydrogen,
  },
]
const compMap = {
  0: <Blog1 />,
  1: <Blog2 />,
  2: <Blog3 />,
  3: <Blog4 />,
}



const gradientColor =
  'bg-gradient-to-r from-indigo-500/10 via-purple-500 to-blue-500/10'

export function SanpecBlog() {
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
      id="sanpecBlog"
      aria-label="Features for running your books"
      className="relative hidden  overflow-hidden  bg-[#151949] pb-28 pt-20 sm:py-12 lg:block"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]  bg-[#151949] "
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative mb-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Blogs
          </h2>
          <p className="mt-6 text-lg font-semibold tracking-tight text-[#e8b44b]">
          Explore Our Blog for Fresh Insights
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-10 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div
                className="-mx-4 flex overflow-scroll overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible  sm:pb-0 lg:col-span-5"
                style={{
                  maxHeight: '70rem',
                  height: '60rem',
                  overflow: 'scroll',
                }}
              >
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal ">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? ' bg-[#151949] lg:ring-2 lg:ring-inset'
                          : 'bg-white/10 hover:bg-white/10 lg:ring-1 lg:ring-inset lg:hover:bg-[#151949]'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none ',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:font-semibold lg:text-[#e8b44b]'
                              : 'text-blue-100  hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none " />
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
              <Tab.Panels
                className="border-2 border-white bg-white lg:col-span-7 "
                style={{
                  maxHeight: '70rem',
                  height: '60rem',
                  overflow: 'scroll',
                  background: 'bg-[#151949]',
                }}
              >
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    flex
                    w-100
                    className="border-2  border-white"
                  >
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
