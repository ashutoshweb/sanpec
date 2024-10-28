import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import KnowledgeFeature from './features/Knowledge'




import CommunityFeature from './features/community'
import NextGenFeature from './features/NextGen'

const faqs = [
  {
    question: "Baldrige global community",
    answer:
    <CommunityFeature />,
  },
  {
    question: "Knowledge Programme",
    answer:
    <KnowledgeFeature />,
  },
  {
    question: "Next Generation Network (NGN) ",
    answer:
    <NextGenFeature />,
  },
  
  
]

const compMap = {
    0: <CommunityFeature />,
    1: <KnowledgeFeature />,
    2: <NextGenFeature />,
   
  }

export default function MobSixPillarsServices() {
  return (
    <div className=" bg-[#151949] lg:hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Everything you need for your business</h2>
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
