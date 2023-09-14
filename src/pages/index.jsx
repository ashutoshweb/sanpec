import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";
import {CTARegister} from "@/custom/CTARegister";
import {HeroBaldrige} from "@/custom/HeroBaldrige1";
import Footer from '@/components/baldrige/Footer';
import { MainFeatures } from '@/components/baldrige/MainFeatures';



export default function Home() {
  return (
    <>
      <Head>
        <title>Baldrige</title>
        <meta
          name="description"
          content="Join this thriving community for a sustainable business"
        />
      </Head>
      <HeroBaldrige />
      <MainFeatures />
        <Events/>
        <CTARegister/>
      <SecondaryFeatures />

      <Testimonials />

      <Faqs />
      <Footer/>
    </>
  )
}
