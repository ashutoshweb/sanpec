import { BackgroundImage } from '@/components/sanpec/eventing/BackgroundImage'
import { Button } from '@/components/sanpec/eventing/Button'
import { Container } from '@/components/sanpec/eventing/Container'
import Image from 'next/image'

import questImage from '@/custom-images/Quest2024-home-image.jpg.jpg'


export function Hero() {
  return (
    <div className="relative py-20 sm:pb-12 sm:pt-12">
      <BackgroundImage className="-bottom-12 -top-12" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-blue-600 sm:text-4xl">
            The Resilience and Sustainability Forum
          </h1>
          <Image
              className="w-full"
              src={questImage}
              alt=""
              sizes="52.75rem"
          />

          <h2 className="font-display text-3xl font-bold tracking-tighter text-blue-900 sm:text-2xl pt-3">
            Building Sustainability and Resilience in Electric Power System
          </h2>

          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-blue-900">
            <p>
              Building sustainability and resilience in energy systems is paramount in our quest for an environmentally protected future. This event aims to address the intricate interplay between sustainability and resilience, exploring innovative strategies, policy frameworks, and technological advancements necessary to fortify energy systems. Experts will share insights, fostering discussions on critical challenges, such as enhanced grid resilience, grid stability, and disaster preparedness, aiming to forge a unified path towards sustainable solutions.
            </p>
            {/*<p>*/}
            {/*  This elite awards program recognizes and showcases the real results organizations achieve through the successful implementation of Business & Digital Transformation, Operational Excellence & Innovation Excellence. The awards are open to all organizations, both private and public sector, across the globe, which have implemented Operational Excellence programs to deliver outstanding business results.*/}
            {/*</p>*/}
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '11'],
              ['Venue', 'Gaylord National Harbor'],
              ['Location', 'near Washington, D.C'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>


        </div>


      </Container>
    </div>
  )
}
