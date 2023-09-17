import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";
import {CTARegister} from "@/custom/CTARegister";
import {HeroBaldrige} from "@/custom/HeroBaldrige1";
import Footer from '@/components/baldrige/Footer';
import { Services } from '@/components/baldrige/Services';




export default function Home() {
  return (
    <>
      <Head>
        <title>Baldrige</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <HeroBaldrige />
      <SecondaryFeatures />
     
      <Services />
      <Events/>
        
      

      <Testimonials />

      <Faqs />
      <Footer/>
    </>
  )
}
