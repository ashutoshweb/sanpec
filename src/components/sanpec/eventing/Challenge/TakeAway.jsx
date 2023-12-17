export function TakeAway() {
  const takeawayList = [
    'Identify challenges and trends in sustainable and resilient energy infrastructure which will allow you to gain and sustain competitive business advantages',
    'Learn about company priorities, strategies and plans for accelerating the deployment of innovative implementation solutions to help improve your organization’s performance results',
    'Improved engagement and understanding through learning about best practices leading to increased organizational resilience and sustainability',
    'Opportunities for interaction and networking with business leaders, enhancing your personal leadership effectiveness',
    'How to create long term value for stakeholders',
  ];

  return (
      <div className="bg-white text-[#151949] rounded-md">
        <div className="px-6  lg:px-8">
          <div className="mx-auto max-w-2xl pt-10 text-center ">
            <h2 className="text-4xl font-bold tracking-tight text-[#151949] sm:text-4xl">
              Key takeaways for attendees
            </h2>
          </div>
        </div>

        <div className="lg:px-12 px-5 py-5 ">
          <ul className="list-disc">
            {takeawayList.map((listItem, index) => (
              <li key={index} className="py-2">{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}