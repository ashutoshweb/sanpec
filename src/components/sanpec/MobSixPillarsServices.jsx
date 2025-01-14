import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import KnowledgeFeature from './features/Knowledge'

import Image from 'next/image'


import SystemsPerspective from "./sixpillars/SystemsPerspective";
import Agility from "./sixpillars/Agility";
import NewInnovation from "./sixpillars/NewInnovation";
import ProcessExcellence from "./sixpillars/ProcessExcellence";
import EcosystemInnovation from "./sixpillars/EcosystemInnovation";
import Community from "./sixpillars/Community";

import sanpecsixpillar from '@/custom-images/Sanpec-sixpillars.png'

const faqs = [
  {
    question: "Systems Perspective",
    answer:
    <SystemsPerspective />,
  },
  {
    question: "Agility",
    answer:
    <Agility />,
  },
  {
    question: "New Innovation ",
    answer:
    <NewInnovation />,
  },
  {
    question: "Process Excellence",
    answer:
        <ProcessExcellence />,
  },
  {
    question: "Ecosystem Innovation",
    answer:
        <EcosystemInnovation />,
  },
  {
    question: "Community & Co-Creation",
    answer:
        <Community />,
  },
  
  
]



export  function MobSixPillarsServices() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-0 lg:py-12">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-3xl font-bold tracking-tight text-[#151949] sm:text-4xl text-center">SANPEC&apos;s Six Pillars of Excellence</h2>
          <div
              className="grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0 lg:pb-12"
          >

          </div>
          <Image
              className="w-full"
              src={sanpecsixpillar}
              alt=""
              sizes="52.75rem"
          />
          <dl className="mt-10 space-y-6 divide-y divide-gray-700/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-700">
                      {open ? (
                           <span className="text-lg text-[#e8b44b] font-semibold leading-7">{faq.question}</span>
                          ) : (
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                          )} 
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-12 pr-6">
                      <p className="text-base leading-7  text-gray-300 rounded-2xl bg-white p-6 shadow-xl shadow-slate-900">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
