import {Tab} from '@headlessui/react';
import {Fragment} from 'react';
import {CleanEnergyChallenge} from '@/components/sanpec/eventing/sponser/How';
import {How} from '@/components/sanpec/eventing/sponser/How';


const tabs = [
{
  name: 'How',
  comp: <How/>,
}

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

export function Sponsership() {
return (
    <div id="sponsership" className="bg-gray-900">
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
                Sponsership
              </h2>
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
