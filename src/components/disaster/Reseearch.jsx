/* eslint-disable react/no-unescaped-entities */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
export function ContentHeader({ title }) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-6 py-6 sm:py-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export function ContentBody() {
    return (
        <div className="overflow-hidden bg-white py-6">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Change Management</h4>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                        Change management as a discipline has evolved and matured over the past quarter of a century.
                         Prosci research tells us that for changes to be successful, we must prepare, equip and support individuals moving through changes so that they successfully adopt the changes. Without adoption, changes will not be successful and we will not deliver the desired outcomes.
                        </p>

                        
                        
                        
                    </div>

                    <div className="lg:col-end-2 lg:w-full lg:max-w-lg lg:pb-8">
                        

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
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                
                        
                        

                        
                        
                        <div className="mt-6 text-base leading-7 text-gray-600">
                            <p>
                            Managing change is often simply comprised of a communications plan, where executive leaders or project managers communicate to the organization that there's change coming (typically on short notice).
                         But change management is much more than communicating what is changing, such as a system implementation or an acquisition.
                            </p>
                        
                        <p>
                        We must support people in the organization through their transitions from the current state to the future state, and understand what is needed to influence each person to embrace and adopt the change.
                         In this way, organizations can significantly increase the chances of project success and their project investments paying off.
                        </p>
                        
                        
                        </div>
                        
                       
                        
                    </div>

                    
        </div>
    )
}



export function Research() {
    return (
        <>
            <ContentHeader title={"Research and Best Practices"} />
            <ContentBody />
        </>
    )
}

export default Research;