import {Container} from '@/components/Container';

export function EventOrganizer () {
  return(
      <section id="sponsors" aria-label="Sponsors" className="py-20">
        <Container>
          <h2 className=" max-w-2xl  font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Event Organizers
          </h2>
          <h2 className=" font-display font-medium text-2xl tracking-tighter text-blue-900 mt-5">
            SANPEC and Baldrige Foundation

          </h2>
          <div className="mt-10">

            <h3 className=" font-display font-medium text-xl tracking-tighter text-blue-900 mt-5">
              About SANPEC

            </h3>
            <p className="mt-5">
              SANPEC has been privately owned and operated since 2009 and aims to improve the resilience and reliability of power grid systems.
              The company’s unique approach, allows it to create, measure, transfer, and recreate knowledge effectively.
            </p>
            <p className="mt-5">
              SANPEC aims to continuously improve structural resilience, reliability, and quality of life through engineering excellence, research and innovation, education and outreach, co-creation, and collaboration.
              It also bring a focused approach toward improving transmission and distribution systems and creating socio-economic values.
            </p>

          </div>


          <div className="mt-10">
            <h3 className=" font-display font-medium text-xl tracking-tighter text-blue-900 mt-5">
              About Baldrige Foundation


            </h3>
            <p className="mt-5">
              The Baldrige Foundation's Institute for Performance Excellence is a thought leader on performance excellence, leadership, and management.

            </p>
            <p className="mt-5">
              Our team carries out its mission in a number of ways: undertaking research projects, hosting conferences and activities, conducting executive-level and online professional development and skills training, making resources available to enhance organizational performance, and publishing and distributing a wide variety of educational materials to share best practices.
            </p>

          </div>

          <div>
            <h2 className="max-w-2xl font-display font-medium text-2xl tracking-tighter text-blue-900 mt-10">
              Sangita: Founder, Baldrige Sustainability Forum
            </h2>
            <p className="mt-2">
              Ms Sangita P. Mallik, Executive Vice President, SANPEC Inc. is the distinguished recipient of the Baldrige Foundation Awards for Leadership Excellence for 2023 in the “Business” category.
            </p>
          </div>
        </Container>
      </section>
  )
}