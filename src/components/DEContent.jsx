/* eslint-disable react/no-unescaped-entities */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
export function ContentHeader({ title }) {
    return (
        <div className="bg-indigo-100">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export function ContentBody() {
    return (
        <div className="overflow-hidden bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design and Engineering</h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            From 69 kV up to 500 kV, we design, engineer, and inspect a full range of overhead transmission line support structures to precisely suit the growing needs of our utility customers. In addition, we provide custom solutions for complex base plates, cross arms, and pole accessories.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            We utilize state-of-the-art design and detailing software to optimize transmission line structures (single circuit, double circuit, H-frames, substation, custom structures) and identify stress concentrations in critical areas through finite element analysis.
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



export function DEContent() {
    return (
        <>
            <ContentHeader title={"Transmission and Distribution"} />
            <ContentBody />
        </>
    )
}

export default DEContent;