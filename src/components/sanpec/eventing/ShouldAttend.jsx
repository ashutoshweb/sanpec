export function WhoShouldAttend () {

  const attendees = [
    'CEOs, senior managers, executives, directors,
    'Quality personnel',
    'Practitioners from business and private sector',
    'Key individuals from other sectors engaged in organizational improvement',
    'Performance excellence professionals',
  ];


  return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-2">
          <section
              aria-labelledby="features-heading"
              className="mx-auto max-w-7xl py-24 sm:px-2"
          >
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="max-w-3xl">
                <h2
                    id="features-heading"
                    className="text-3xl font-bold tracking-tight text-[#e8b44b] sm:text-4xl"
                >
                 Who Should Attend?
                </h2>
              </div>

              <ul className="mt-2">
                {attendees.map((attendee, index) => (
                    <li key={index} className="text-white flex mb-2 mt-2">
                      <div className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                          <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clip-rule="evenodd"/>
                        </svg>
                      </div>
                      {attendee}
                    </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
  )
}