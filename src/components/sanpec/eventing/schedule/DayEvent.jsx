import {Tab} from '@headlessui/react';
import {Fragment} from 'react';
import {CleanEnergyChallenge} from '@/components/sanpec/eventing/Challenge/CleanEnergyChallenge';
import {Approach} from '@/components/sanpec/eventing/Challenge/Approach';
import { TakeAway } from '@/components/sanpec/eventing/Challenge/TakeAway';
import {DiscussionPillars} from '@/components/sanpec/eventing/DiscussionPillars';
import {What} from "../challengenew/What";
import {Why} from "../challengenew/Why";
import {ScheduleV1} from "./ScheduleV1";
import { Container } from '@/components/sanpec/eventing/Container'


const tabs = [
{
  name: 'April 4',
  comp: <ScheduleV1/>
},
{
  name: 'April 5',
  comp: <Why/>,
}


];

const tabsOld = [
  {
    name: 'Challenge',
    comp: <CleanEnergyChallenge/>,
  },
  {
    name: 'Approach',
    comp: <Approach/>
  },
  {
    name: 'Takeaways',
    comp: <TakeAway/>
  },


];

const focusItems = [
'Organizational resilience, innovation, and sustainability',
'Value-chain management and operational resilience',
'Uncertainty risk management and sustainable business practices',
'Grid resilience, innovation, and sustainable development',
'Holistic project management and sustainable value creation',
'Manufacturing and Quality',
'Advanced engineering tools and technologies',
'Systems engineering perspective and business model innovation',
'Ecosystem excellence and dynamic co-creation',
'Science and spirituality',
];

function classNames(...classes) {
return classes.filter(Boolean).join(' ');
}

export function DayEvent() {
return (
    <div className="">
      <div className="">

          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">

            <section id="schedule" aria-label="Schedule" className="py-5 sm:py-5">
              <Container className="relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-7xl lg:pr-24">
                  <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-3xl">
                    Our three-day schedule is jam-packed with brilliant, creative
                    geniuses.
                  </h2>
                  <p className="mt-4 font-display text-xl tracking-tight text-blue-900">
                    The best people in our industry giving the best talks you’ve ever
                    seen. Everything will be recorded and attendees can watch them on mobile app later as well.
                  </p>
                </div>
              </Container>

            </section>


            <Tab.Group as="div" className="mt-10">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2">
                <div className="flex-auto  px-4 sm:px-0">
                  <Tab.List className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.name}
                            className={({selected}) =>
                                classNames(
                                    selected
                                        ? 'border-blue-800     text-blue-950 '
                                        : 'border-transparent text-blue-600 ',
                                    'whitespace-nowrap border-b-2  py-2 text-2xl font-semibold hover:text-blue-300 outline-none tracking-tight text-blue-900'
                                )
                            }
                        >
                          {tab.name}
                        </Tab>
                    ))}
                  </Tab.List>
                </div>
              </div>

              <Tab.Panels as={Fragment}>
                {tabs.map((tab, index) => (
                    <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-8">
                      <div key={index}> {tab.comp}</div>
                    </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

          </div>

      </div>
    </div>

);
}
