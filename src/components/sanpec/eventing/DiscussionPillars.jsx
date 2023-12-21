import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 1,
        content: '',
        target: [

                'Engineering Excellence and Quality4, Advanced engineering tools and technologies ',
                'Grid resilience, innovation, systems engineering perspective and business model innovation, value-chain management and operational resilience, Manufacturing excellene and Quality 4.0'


            ],
        contentBackground : 'bg-slate-400',
        title : 'Technology Operational resilience',
        href: '#',
        date: '',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-slate-400',
    },
    {
        id: 2,
        content: '',
        target: [

            'Organizational resilience, leadership excellence, and sustainability ',
            'Holistic project management and sustainable value creation',
            'Inventing the Power Grid of the 21st Century. Mastering Sustainability Strategy '


        ],
        contentBackground : 'bg-slate-400',
        title : 'Leadership and management Organizational Resilience',
        href: '#',
        date: '',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-slate-400',
    },
    {
        id: 3,
        content: '',
        target: [

            'Education transformation and dynamic value co-creation ',
            'Preparing the nextgen workforce for resilient grid systems'


        ],
        contentBackground : 'bg-slate-400',
        title : 'Capacity Building',
        href: '#',
        date: '',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-slate-400 ',
    },
    {
        id: 4,
        content: '',
        target: [

            'Uncertainty risk management,innovative finance, and sustainable business practices ',
            'Data-driven decision making',
            'Strategy and foresight, ESG trends'


        ],
        contentBackground : 'bg-slate-400',
        title : 'Policy and Finance',
        href: '#',
        date: '',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-slate-400',
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export  function DiscussionPillars() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-2">
                <h2
                    id="features-heading"
                    className="text-2xl font-bold tracking-tight text-[#e8b44b] sm:text-2xl pb-5 pt-5"
                >
                    Forum Discussion Pillars
                </h2>
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute left-4 top-4  h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'h-40 w-40 rounded-full flex items-center justify-center ring-8 ring-white text-center'
                      )}
                  >
                      {event.title}

                  </span>
                                </div>
                                <div className={`flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 p-2 rounded-full lg:rounded-l-xl lg:rounded-r-xl ${event.contentBackground}`}>
                                    <div>
                                        <p className="text-lg text-red-500">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-900">
                                                {event.target.map((item,itemIdx) =>(
                                                    <div>{item} </div>
                                                    ))}
                                            </a>


                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-red-600">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
            </div>
        </div>
    )
}
