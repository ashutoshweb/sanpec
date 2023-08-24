/* eslint-disable react/no-unescaped-entities */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export function ResearchContent() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-4">
            <div
                className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
                aria-hidden="true"
            >
                <div
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
                    }}
                />
            </div>
            <div id="#" className="mx-auto max-w-7xl px-0">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    {}
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research and Innovation Content</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        Research and Innovation Table
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    {}
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                        <p>
                            ResearchContent 1
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchContent;