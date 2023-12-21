import Link from 'next/link'

export function How() {
  return (
      <div className="bg-white text-[#151949] rounded-md">
        <div className="px-6  lg:px-8">
          <div className="mx-auto max-w-2xl pt-10 text-center ">
            <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-3xl">
                Register for the Quest for Excellence Conference through

                    <Link key="Showcare" href="https://www.mylibralounge.com/sites/quest24/attendee/en/welcome-quest-for-excellence/?lib_SGU=5A078A2D-3CB4-43E8-95F4-10E668B92A9D&lib_CST=84CBD98F-07C8-42EC-BD74-7AA1C87587CE" className=" text-blue-900 pl-2 underline">
                    Showcare
                </Link>

            </h2>
          </div>
        </div>


        <p className="lg:px-12 px-5 py-5 ">
            Sponsor this specific event(email:?and join the exclusive club of event sponsors like Alamo Colleges District,Charleston Area Medical Center and Dallas College.
        </p>
        <p className="lg:px-12 px-5 py-2 ">
            Sponsorship Benefits include logo display, free participation to the event, speaking and showcasing opportunities and networking with leading experts from industry, academia and foundations:

        </p>

          <div className="mx-auto max-w-2xl pt-10 text-center ">
              <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
                  LET US PARTNER FOR BUILDING 21ST CENTURY GRID
              </h2>
          </div>
        <p className="lg:px-12 px-5 py-2 pb-12 ">

        </p>
      </div>
  );
}