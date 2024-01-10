'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { DiamondIcon } from '@/components/sanpec/eventing/DiamondIcon'
import vijayShekhawat from '@/custom-images/VijayShekhawat-150x150.jpeg'
import kapilNarula from '@/custom-images/Kapil-Narula.jpeg'
import panwarRajat from '@/custom-images/Panwar.jpeg'
import piyushVerma from '@/custom-images/Piyush-Verma.png'
import rajSP from '@/custom-images/Raj_SP.jpeg'
import mohanYellishetty from '@/custom-images/Mohan_Yellishetty.webp'
import sapna from '@/custom-images/sapna.jpeg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'
import backgroundImage from '@/images/background-auth.jpg';




const days = [
  {
    name: 'Keynote Address ',
    title: 'Innovations Driving Economic Growth through Sustainable Engineering',
    date: 'April 7, 2024',
    speakers: [
      {
        name: 'Vijay Shekhawat',
        role: 'Director, Energy, Sustainability and Infrastructure (India)',
        image: vijayShekhawat,
      },
      {
        name: 'Rajat Panwar',
        role: 'Associate Professor of Responsible and Sustainable Business',
        image: panwarRajat,
      },
      {
        name: 'S.P. Raj',
        role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
        image: rajSP,
      },
      {
        name: 'Dr. Kapil Narula',
        role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
        image: kapilNarula,
      },


      {
        name: 'Prof. Sapna A. Narula ',
        role: 'Professor & Dean, President and CEO, Global Network for Sustainable Development',
        image: sapna,
      },
      {
        name: 'Mohan Yellishetty',
        role: 'Associate Professor, Civil Engineering, Australian Endeavour Fellow and Chartered Mining Engineer',
        image: mohanYellishetty,
      },

      {
        name: 'Piyush Verma',
        role: 'Senior Governance Expert-Energy, UNDP',
        image: piyushVerma,
      },
    ],
    timeSlots: [
      {
        name: 'Opening Ceremony and Welcome Address',
        description: '',
        start: '10:00AM',
        end: '11:00AM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },
      {
        name: 'Panel Discussion: Engineering for Sustainable Infrastructure Development',
        description: 'This session aims to explore the pivotal role of engineering in fostering sustainable ' +
            'infrastructure development, emphasizing innovative approaches, best practices,' +
            ' and challenges in creating resilient and eco-conscious infrastructure. ' +
            'The session aims to delve into case studies, technological advancements, ' +
            'and collaborative strategies that drive infrastructure projects towards sustainability,' +
            ' considering environmental impact, resource efficiency, and long-term viability. ' +
            'By examining the intersection of engineering and sustainability, the objective is' +
            ' to discuss actionable insights that empower participants to champion sustainable' +
            ' infrastructure initiatives, integrating resilience, adaptability, and' +
            ' environmental stewardship into engineering practices.',
        start: '11:00AM',
        end: '12:00AM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },
      {
        name: 'Panel Discussion: Systems engineering perspective and business model innovation',
        description: 'This session aims to explore the synergy between systems engineering perspectives' +
            ' and business model innovation, examining how an integrated approach enhances organizational efficiency, ' +
            'fosters innovation, and drives sustainable growth. The session aims to dissect the interplay between systems thinking and innovative business models, ' +
            'showcasing successful cases and methodologies that leverage systems engineering principles to drive business model innovation. ' +
            'By delving into practical applications and collaborative strategies, the objective is to elucidate how this symbiotic relationship fosters adaptability, agility,' +
            ' and value creation within organizations. Ultimately, the session seeks to discuss actionable insights that empower participants to integrate systems engineering perspectives ' +
            'into business innovation, optimizing operations and strategic development.',
        start: '12:15 PM',
        end: '13:15 PM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },

      {
        name: 'Panel Discussion: Grid resilience, innovation, and sustainable development',
        description: 'This session aims to envision a transformative path intertwining grid resilience, innovation, ' +
            'and sustainable development, fostering discussions that illuminate novel approaches, cutting-edge innovations,' +
            ' and collaborative strategies essential for shaping a resilient, innovative, and sustainable grid infrastructure. ' +
            'The session aims to explore the convergence of innovative technologies, adaptive strategies, and sustainable practices, ' +
            'driving the evolution of energy grids towards resilience and environmental harmony. ' +
            'By leveraging expert insights, case studies, and forward-thinking solutions,' +
            ' the objective is to inspire actionable ideas that propel the integration of resilient innovations for sustainable grid development,' +
            ' steering the energy landscape towards a more secure and environmentally conscious future.',
        start: '14:30 PM',
        end: '15:30 PM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },

    ],
  },

  {
    name: 'Presentation ',
    title: 'Creating Equitable and Sustainable Societies in Harmony with Nature',
    date: 'April 8, 2024',
    speakers: [
      {
        name: 'Vijay Shekhawat',
        role: 'Director, Energy, Sustainability and Infrastructure (India)',
        image: vijayShekhawat,
      },
      {
        name: 'Rajat Panwar',
        role: 'Associate Professor of Responsible and Sustainable Business',
        image: panwarRajat,
      },
      {
        name: 'S.P. Raj',
        role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
        image: rajSP,
      },
      {
        name: 'Dr. Kapil Narula',
        role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
        image: kapilNarula,
      },


      {
        name: 'Prof. Sapna A. Narula ',
        role: 'Professor & Dean, President and CEO, Global Network for Sustainable Development',
        image: sapna,
      },
      {
        name: 'Mohan Yellishetty',
        role: 'Associate Professor, Civil Engineering, Australian Endeavour Fellow and Chartered Mining Engineer',
        image: mohanYellishetty,
      },

      {
        name: 'Piyush Verma',
        role: 'Senior Governance Expert-Energy, UNDP',
        image: piyushVerma,
      },
    ],
    timeSlots: [
      {
        name: 'Panel Discussion: Organizational resilience, innovation, and sustainability',
        description: 'This session aims to explore the interconnected relationship between organizational resilience, innovation, and sustainability, ' +
            'dissecting how these elements complement and reinforce each other within diverse organizational frameworks. The session aims to delve into ' +
            'practical strategies, case studies, and collaborative approaches that promote a culture of innovation and sustainability while fortifying ' +
            'organizational resilience in the face of dynamic challenges. By examining the' +
            ' intersection of these pillars, the objective is to discuss actionable insights that empower attendees to foster adaptable, ' +
            'innovative, and sustainable practices within their respective organizations.',
        start: '10:00AM',
        end: '11:00AM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },
      {
        name: 'Panel Discussion: Role of Circular Economy in a resilient Smart Grid Technology',
        description: 'This session aims to dissect and underscore the pivotal role of circular economy principles ' +
            'in enhancing the resilience of smart grid technology. The session aims to examine how embracing circular' +
            ' economy concepts within the realm of smart grids bolsters their capacity to withstand disruptions while ' +
            'advancing sustainability goals. By delving into real-world examples and forward-thinking strategies, ' +
            'the objective is to elucidate how circular economy principles drive innovation, resource efficiency, ' +
            'and adaptability in smart grid infrastructure. ' +
            'Ultimately, the session seeks to discuss actionable insights that empower stakeholders to integrate' +
            ' circular economy practices effectively, thereby fortifying the resilience and sustainability of smart grid technologies',
        start: '11:30 AM',
        end: '12:30 PM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },
      {
        name: 'Panel Discussion: Critical Minerals: Powering the Future Grid and Renewable Energy',
        description: 'As the backbone of transformative technologies in the energy sector, critical minerals' +
            ' play a pivotal yet often overlooked role in enabling the resilience and sustainability of grid infrastructure ' +
            'and renewable energy systems. This session sheds light on the significance of critical minerals, examining their indispensable ' +
            'role in powering the future grid and fostering the advancement of renewable energy solutions. ' +
            'Experts and thought leaders will explore the specific critical minerals crucial for these technologies, ' +
            'their extraction, processing, and the challenges associated with their sustainable sourcing. ' +
            'The discussion will emphasize the necessity of securing a reliable supply chain of critical minerals ' +
            'to ensure the robustness and efficiency of the grid while advancing the global transition toward clean and sustainable energy. ',
        start: '14:30 PM',
        end: '15:30 PM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },

      {
        name: 'Panel Discussion: Uncertainty risk management and sustainable business practices',
        description: 'The session aims to dissect the nuances of uncertainty risk management within the ' +
            'framework of sustainable business practices, exploring strategies to navigate uncertainties while ' +
            'upholding sustainability goals. The session aims to analyse risk mitigation approaches that align' +
            ' with sustainable business models, emphasizing resilience, adaptability, and long-term viability. ' +
            'By examining case studies and best practices, ' +
            'the objective is to discuss actionable insights that empower participants to integrate effective' +
            ' risk management strategies that reinforce sustainability principles within their organizational frameworks.',
        start: '16:00 PM',
        end: '17:00 PM',
        speakers: [
          {
            name: 'Vijay Shekhawat',
            role: 'Director, Energy, Sustainability and Infrastructure (India)',
            image: vijayShekhawat,
          },
          {
            name: 'Rajat Panwar',
            role: 'Associate Professor of Responsible and Sustainable Business',
            image: panwarRajat,
          },
          {
            name: 'S.P. Raj',
            role: 'Chair, Department of Marketing, Distinguished Professor of Marketing, Director, MS Marketing Program',
            image: rajSP,
          },
          {
            name: 'Dr. Kapil Narula',
            role: 'Senior Researcher at the Chair for Energy Efficiency within the Institute for Environmental Sciences (ISE), University of Geneva. ',
            image: kapilNarula,
          },
        ]
      },

    ],
  },

  {
    name: 'FireSideChat',
    title: 'Empowering the Future: Youth, Education, and Sustainable Practices',
    date: 'April 9, 2024',

    speakers: [
      {
        name: 'Speaker 7',
        role: 'Title 1',
        image: '',
      },
      {
        name: 'Speaker 8',
        role: 'Title 2',
        image: '',
      },

    ],
  },


]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

function TimeSlots({day, className}) {
  return (
    <ol
      role="list"
      className={clsx(
          className,
          'space-y-8 bg-white/60 px-10 pb-14 pt-5',
      )}
    >
    {day?.timeSlots?.map((timeSlot, timeSlotIndex) => (
        <li
            key={timeSlot.start}
            aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
              <div className="mx-auto mb-8 h-px w-full bg-indigo-500/10"/>
          )}
          <div className="grid lg:grid-cols-2">
            <div className="lg:mr-10">
              <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                {timeSlot.name}
              </h4>
              <p className="mt-1 font-mono text-sm text-slate-500">
                <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
                  {timeSlot.start}
                </time>
                {' '}
                -{' '}
                <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
                  {timeSlot.end}
                </time>
                {' '}
              </p>
              {timeSlot.description && (
                  <p className="mt-1 tracking-tight text-blue-900">
                    {timeSlot.description}
                  </p>
              )}
            </div>
            <div className="grid lg:grid-cols-2">
              {timeSlot?.speakers?.map((speaker, speakerIndex) => (
                <div key={speakerIndex}>
                  <div className="flex items-center gap-x-6 m-4">
                    <Image className="h-16 w-16 rounded-full" src={speaker.image} alt=""/>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{speaker.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{speaker.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </li>
    ))}
    </ol>
  );
}

export function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({matches}) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
      <section
          id="speakers"
          aria-labelledby="speakers-title"
          className="py-20 sm:py-10"
      >
        {/* <ImageClipPaths id={id} />*/}
        <div className="m-10">

        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none text-left">
                            <span className="absolute inset-0 break-words" />
                            {day.title}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none"
                unmount={false}
              >
                {/*{day.speakers.map((speaker, speakerIndex) => (*/}
                {/*  <div key={speakerIndex}>*/}
                {/*    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">*/}
                {/*      <div*/}
                {/*        className={clsx(*/}
                {/*          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',*/}
                {/*          [*/}
                {/*            'border-blue-300',*/}
                {/*            'border-indigo-300',*/}
                {/*            'border-sky-300',*/}
                {/*          ][speakerIndex % 3],*/}
                {/*        )}*/}
                {/*      />*/}
                {/*      <div*/}
                {/*        className="absolute inset-0 bg-indigo-50"*/}
                {/*        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}*/}
                {/*      >*/}
                {/*        <Image*/}
                {/*          className="absolute inset-0 h-full w-full object-contain transition duration-300 group-hover:scale-110"*/}
                {/*          src={speaker.image}*/}
                {/*          alt=""*/}
                {/*          priority*/}
                {/*          sizes="(min-width: 1280px)dswawsssds 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"*/}
                {/*        />*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">*/}
                {/*      {speaker.name}*/}
                {/*    </h3>*/}
                {/*    <p className="mt-1 text-base tracking-tight text-slate-500">*/}
                {/*      {speaker.role}*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*))}*/}
                <TimeSlots day={day} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
