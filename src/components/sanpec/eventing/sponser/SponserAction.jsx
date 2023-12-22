import Link from 'next/link'

export  function SponserAction() {
    return (
        <div className="pt-2 sm:rounded-lg flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
            <div className="mx-auto flex items-center gap-4 px-4 py-5 ">
                <h3 className="text-base font-semibold leading-6 text-blue-900">Do you want to Collaborate, Connect, Unite?</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>

                    </p>
                </div>
                <div className="mx-auto flex items-center gap-4 px-4 py-5" >
                    <Link
                    href="#sponsership"

                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Go to Sponsership Section
                    </Link>
                </div>
            </div>
        </div>
    )
}