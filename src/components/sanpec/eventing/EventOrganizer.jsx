import {Container} from '@/components/Container';

export function EventOrganizer () {
  return(
      <section id="sponsors" aria-label="Sponsors" className="py-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Event Organizer
          </h2>
          <div className="mt-10">
            <p>
              SANPEC has been privately owned and operated since 2009 and aims to improve the resilience and reliability of power grid systems. The company’s unique approach, allows it to create, measure, transfer, and recreate knowledge effectively.
              SANPEC aims to continuously improve structural resilience, reliability, and quality of life through engineering excellence, research and innovation, education and outreach, co-creation, and collaboration. It also bring a focused approach toward improving transmission and distribution systems and creating socio-economic values.
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