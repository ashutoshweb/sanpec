import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: '',
    target: [],
    contentBackground: 'bg-slate-400',
    title: 'Quality 4.0 and Operational Resilience',
    href: '#',
    date: '',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: '',
    target: [],
    contentBackground: 'bg-slate-400',
    title: 'Leadership Excellence and Organizational Resilience',
    href: '#',
    date: '',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 3,
    content: '',
    target: [],
    contentBackground: 'bg-slate-400',
    title: 'Capacity Building, R&D Workforce Development ',
    href: '#',
    date: '',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-gray-400 ',
  },
  {
    id: 4,
    content: '',
    target: [],
    contentBackground: 'bg-slate-400',
    title: 'Policy and Finance',
    href: '#',
    date: '',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-gray-400',
  },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function DiscussionPillars() {
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
            <ul role="list" className="mt-5 md:flex sm:mr-10 md:mr-0">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8 sm:pr-0 md:pr-20">
                    {eventIdx !== timeline.length - 1 ? (
                        <>
                          <span className="absolute left-4 top-20 w-full h-0.5 bg-gray-200 invisible md:visible"
                                aria-hidden="true"/>
                          <span className="absolute left-20 top-4  h-full w-0.5 bg-gray-200 visible md:invisible"
                                aria-hidden="true"/>
                        </>
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                            className={classNames(
                                event.iconBackground,
                                'h-40 w-40 rounded-full flex items-center justify-center ring-8 ring-white text-center font-bold'
                            )}
                        >
                            {event.title}

                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}
