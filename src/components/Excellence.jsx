/* eslint-disable react/no-unescaped-entities */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
export function ContentHeader({ title }) {
    return (
        <div className="h-52 ">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8 bg-indigo-500">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export function ContentBody() {
    return (
        <div className="overflow-hidden bg-white py-4">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">


                        <p className="mt-6 text-base leading-8 text-black-600">
                            Lead the energy transition and grid modernization initiatives with innovative and strategic solutions while anticipating and mitigating tomorrow’s disruptions.
                        </p>
                        <p className="mt-6 text-base leading-7 text-black-600">
                            Develop skill sets and mindsets to build resilience and manage sustainability goals effectively.
                        </p>
                        <p className="mt-6 text-base leading-7 text-black-600">

                            Inspire our stakeholders to achieve excellence and promote responsible stewardship of our physical, financial, environmental, and human resources.
                        </p>
                        <p className="mt-6 text-base leading-7 text-black-600">
                            Manage our physical and natural resources effectively and create a sense of pride among all our employees. We use impact-focused and purpose-driven engineering to contribute to economic and social progress and develop a responsible culture.
                        </p>
                        <p className="mt-6 text-base leading-7 text-black-600">
                            Be recognized as the pioneering source of transmission engineering, inspection, and holistic quality management services.
                        </p>
                        Work with stakeholders to continuously improve and create value through engineering, research, and deployment of cutting-edge technology, leadership, and management practices.
                        <p className="mt-6 text-base leading-7 text-black-600">
                            Be the global leader in developing strategic and innovative engineering solutions for energy transition and sustainability in the electric power sector.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export function Excellence() {
    return (
        <>
            <ContentHeader title={"Vision and Mission"} />
            <ContentBody />
        </>
    )
}

export default Excellence;