import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";
import {CTARegister} from "@/custom/CTARegister";
import {HeroBaldrige} from "@/custom/HeroBaldrige1";
import Footer from '@/components/baldrige/Footer';
import { Services } from '@/components/baldrige/Services';
import MobServices from '@/components/baldrige/MobServices';




export default function Home() {
  return (
    <>
      <Head>
        <title>Baldrige</title>
        <meta
          name="description"
          content="Sanpec: Bringing Engineering Excellence. Improving Power Grid Reliability"
        />
      </Head>
      <HeroBaldrige />
      <SecondaryFeatures />
     
      <Services />
      <MobServices/>
      <Events/>

      <Testimonials />

      <Faqs />
     
    </>
  )
}
