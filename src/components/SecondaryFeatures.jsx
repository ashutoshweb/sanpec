import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import baldrigeMain from '@/custom-images/baldrige-framework_home.jpeg'
import awardBaldrige from '@/custom-images/Award_Artwork_home_Final.jpeg'
import poleTestingVideo from '@/custom-images/tower_testing_video-1_(1).mp4'

const vide01 = poleTestingVideo

const features = [
  {
    name: 'SANPEC Excellence',
    summary:
      'Pioneering Circular Economy Transition and Infrastructure Excellence',
    description:
      'We have the skillsets and mindsets to lead the transition to a circular economy and execute complex infrastructure projects with unparalleled engineering excellence, extensive fabrication knowledge, cutting-edge research, conscious leadership, and integrated quality management practices.',
    video: poleTestingVideo,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Framework',
    summary: 'Baldrige Excellence Framework',
    description:
      'For more than 32 years, the Baldrige Excellence Framework® has empowered organizations to accomplish their missions, improve results, and become more competitive',
    image: baldrigeMain,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Awards',
    summary: 'Improve Performance and Get World-Class Results.',
    description:
      'The Malcolm Baldrige National Quality Award® is the highest level of national recognition for performance excellence that a U.S. organization can receive.',
    image: awardBaldrige,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        !isActive &&
          '  bg-gray-200   text-[#151949] opacity-75 hover:bg-[#2a3176] hover:text-white hover:opacity-100'
      )}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500 '
        )}
      >

      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-[#e8b44b]' : 'text-[#151949] hover:text-white'
        )}
      >
        {feature.name}
      </h3>
      <p
        className={clsx(
          'mt-2 font-display text-xl',
          isActive ? 'text-white' : ' hover:text-white'
        )}
      >
        {feature.summary}
      </p>
      <p
        className={clsx(
          'mt-4 text-sm',
          isActive ? 'text-white' : ' hover:text-white'
        )}
      >
        {feature.description}
      </p>
      {/*  <p
        className={clsx(
          'mt-2 font-display text-xl ',
          isActive ? 'text-white lg:block' : ' hidden hover:text-white'
        )}
      >
        Learn more
      </p>*/}
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden bg-[#151949] px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature
            feature={feature}
            className="mx-auto max-w-2xl pt-10"
            isActive
          />
          {feature.image ? (
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
              <div className="relative mx-auto w-[28rem]  overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image
                  className="w-full"
                  src={feature.image}
                  alt=""
                  sizes="52.75rem"
                />
              </div>
            </div>
          ) : (
            <div className="relative mt-10 ">
              <video className="h-full w-full " controls autoPlay>
                <source src={feature.video} />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8   ">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative rounded-2xl bg-[#151949] p-6 shadow-xl shadow-slate-900"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-12 overflow-hidden rounded-4xl bg-slate-200 px-14 py-8 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  {feature.image ? (
                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        sizes="52.75rem"
                      />
                    </div>
                  ) : (
                    <div className="w-[52.75rem] overflow-hidden rounded-xl">
                      <video
                        className="h-full w-full rounded-lg"
                        controls
                        autoPlay
                      >
                        <source src={feature.video} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-12 lg:pb-32"
    >
      <Container>

        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
