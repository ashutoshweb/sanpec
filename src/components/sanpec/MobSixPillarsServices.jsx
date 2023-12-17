import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import KnowledgeFeature from './features/Knowledge'




import SystemsPerspective from "./sixpillars/SystemsPerspective";
import Agility from "./sixpillars/Agility";
import NewInnovation from "./sixpillars/NewInnovation";
import ProcessExcellence from "./sixpillars/ProcessExcellence";
import EcosystemInnovation from "./sixpillars/EcosystemInnovation";
import Community from "./sixpillars/Community";

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
    <div className=" bg-[#151949] ">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Sanpec&apos;s Six Pillars of Excellence</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
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
