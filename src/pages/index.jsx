import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";
import Footer from '@/components/baldrige/Footer';
import { Services } from '@/components/baldrige/Services';
import MobServices from '@/components/baldrige/MobServices';
import { HeroSanpec } from '@/components/sanpec/HeroSanpec';




export default function Home() {
  return (
    <>
      <Head>
        <title>Sanpec</title>
        <meta
          name="description"
          content="Sanpec: Bringing Engineering Excellence. Improving Power Grid Reliability"
        />
      </Head>
      <HeroSanpec />
      <SecondaryFeatures />
     
      <Services />
      <MobServices/>
      <Events/>

      <Testimonials />

      <Faqs />
     
    </>
  )
}
