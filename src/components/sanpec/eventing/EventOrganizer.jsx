import {Container} from '@/components/Container';
import Link from 'next/link'

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

            <Link href="/about-sanpec" className=" font-display font-medium text-xl tracking-tighter text-blue-900 mt-5">
              About SANPEC and Leadership

            </Link>
            <p className="mt-5">
              SANPEC, Inc., a trailblazer in the energy sector since 2009, specializes in the design, engineering, testing,
              inspection, risk management, sustainability, and quality management for critical electric power, lighting,
              and renewable energy infrastructures. As a Lifetime Trustee of the Baldrige Foundation’s Institute for
              Performance Excellence and a member of the Mac Baldrige Society, SANPEC is committed to improving
              the resilience and reliability of power grid systems. The company&apos;s unique approach allows it to create,
              measure, transfer, and recreate knowledge effectively, continuously improving resilience, reliability, and
              quality of life through engineering excellence, sustainable business model practices, research and
              innovation, education and outreach, co-creation, and collaboration.
            </p>
            <p className="mt-5">
              At the helm is Ms. Sangita P. Mallik, co-founder and Executive Vice President, a luminary in electric
              power transmission and distribution. As a 2023 Baldrige Award for Leadership Excellence winner,
              Sangita has steered SANPEC to the forefront of innovation and resilience. Her visionary leadership and
              commitment to fostering a future-ready workforce have significantly advanced engineering practices
              within the industry. Under her guidance, SANPEC aims to dynamically balance grid reliability, resiliency,
              and directional alignment while innovating for sustainable development goals.
            </p>

          </div>


          <div className="mt-10">
            <Link href="https://baldrigefoundation.org/" className=" font-display font-medium text-xl tracking-tighter text-blue-900 mt-5">
              About the Baldrige Foundation
            </Link>
            <p className="mt-5">
              The Baldrige Foundation is the private-sector partner of the Baldrige Performance Excellence Program
              and is committed to supporting organizational performance excellence in the U.S. and worldwide. The
              Foundation and its Institute for Performance Excellence play a pivotal role in promoting and extending
              the Baldrige Framework, ensuring its relevance for future generations of leaders and organizations
              across all sectors. As a beacon of excellence, the Foundation fosters best practices in leadership,
              strategic planning, customer focus, measurement, analysis, knowledge management, workforce focus,
              and more, contributing to the improvement and innovation of organizations.

            </p>


          </div>

          <div>
            <h2 className="max-w-2xl font-display font-medium text-2xl tracking-tighter text-blue-900 mt-10">
              Sangita: Founder, Baldrige Sustainability Forum
            </h2>
            <p className="mt-2">
              Ms Sangita P. Mallik, Executive Vice President, SANPEC Inc. is the distinguished recipient of the Baldrige Foundation Awards for Leadership Excellence for 2023 in the Business category.
            </p>
          </div>
        </Container>
      </section>
  )
}