import {Tab} from '@headlessui/react';
import {Fragment} from 'react';
import {CleanEnergyChallenge} from '@/components/sanpec/eventing/Challenge/CleanEnergyChallenge';
import {Approach} from '@/components/sanpec/eventing/Challenge/Approach';
import { TakeAway } from '@/components/sanpec/eventing/Challenge/TakeAway';
import {DiscussionPillars} from '@/components/sanpec/eventing/DiscussionPillars';
import {What} from "./challengenew/What";
import {Why} from "./challengenew/Why";

const tabs = [
{
  name: 'What?',
  comp: <What/>
},
{
  name: 'Why?',
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

export function Challenges() {
return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-2">
        <section
            aria-labelledby="features-heading"
            className="mx-auto max-w-7xl py-24 sm:px-2"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-[#e8b44b] sm:text-4xl"
              >
                Conference Focus Areas
              </h2>
              <p className="mt-4 text-white mb-4">
                The event will focus on several key areas including but not limited to
              </p>
              <ul>
                {focusItems.map((focusItem, index) => (
                  <li key={index} className="text-white flex mb-2">
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                           className="w-6 h-6">
                        <path fill-rule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clip-rule="evenodd"/>
                      </svg>
                    </div>
                    {focusItem}
                  </li>
                ))}

              </ul>

              <DiscussionPillars/>
            </div>

            <Tab.Group as="div" className="mt-10">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto  px-4 sm:px-0">
                  <Tab.List className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.name}
                            className={({selected}) =>
                                classNames(
                                    selected
                                        ? 'border-white     text-[#e8b44b] '
                                        : 'border-transparent text-white ',
                                    'whitespace-nowrap border-b-2  py-2 text-sm font-semibold hover:text-gray-300 outline-none text-xl'
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
        </section>
      </div>
    </div>

);
}
