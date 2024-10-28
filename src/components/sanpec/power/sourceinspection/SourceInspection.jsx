import {Dialog, Tab} from '@headlessui/react'
import { Fragment } from 'react'
import GridHardening from "../GridHardening";
import SubstationHardening from "../SubstationHardening";
import DistributionLineHardening from "../DistributionLineHardening";
import Benefits from "./Benefits";
import Introduction from "./Introduction";



const testing = [
    'Dual OHGW to reduce the potage caused by lightning.',
    'OPGW to provide the communication path across the grid, enhancing the cybersecurity and improving reliability.',
    'New Insulator design and materials provide greater reliability.',
    'Higher Capacity, steel reinforced conductor allows for more efficient power flow and reduce electrical losses.',
    'Greater clearances between electrical lines reduces outages caused by animal and provides safer working conditions for line crews.',
    'Sturdier steel poles/concrete poles improve resiliency during storms, provide longer lifeexpectancy and lower maintenance costs.',
    'Improved grounding provides better lightning performance and safer operation of T&D system.',


];

const tabs = [
    {
        name: 'Introduction',
        comp: <Introduction />,
        features: [
            {
                name: 'Adaptive and modular',
                description:
                    'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                imageSrc:
                    'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
                imageAlt:
                    'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
            },
        ],
    },
    {
        name: 'Benefits',
        comp: <Benefits />,

        features: [
            {
                name: 'Natural wood options',
                description:
                    'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
                imageSrc:
                    'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
                imageAlt:
                    'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
            },
        ],
    },



]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SourceInspection() {

    return (
        <div className="rounded-md bg-white text-[#151949]">
            <main className="relative isolate">
                {/* Background */}
                {/* Header section */}
                <div className="px-6  lg:px-8">
                    <div className="mx-auto max-w-2xl pt-10 text-center ">
                        <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
                            Manufacturing and Operations
                        </h2>


                    </div>
                </div>


                {/* Content section */}
                <section
                    aria-labelledby="features-heading"
                    className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-8"
                >
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">


                        <Tab.Group as="div" className="mt-4">
                            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                                <div className="flex-auto  px-4 sm:px-0">
                                    <Tab.List className="-mb-px flex space-x-10">
                                        {tabs.map((tab) => (
                                            <Tab
                                                key={tab.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected
                                                            ? 'border-blue-900     text-blue-900 '
                                                            : 'border-transparent text-gray-400 ',
                                                        'whitespace-nowrap border-b-4  py-2 text-xl font-semibold hover:text-blue-500'
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
                                {tabs.map((tab) => (
                                    <Tab.Panel key={tab.name} className="space-y-16 pt-5 lg:pt-2">

                                            <div > {tab.comp}</div>

                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </section>




            </main>
        </div>
    )
}
