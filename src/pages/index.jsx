import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";

import { Services } from '@/components/baldrige/Services';
import MobServices from '@/components/baldrige/MobServices';
import { HeroSanpec } from '@/components/sanpec/HeroSanpec';
import Eventscarousel from '@/components/sanpec/Eventscarousel';
import SanpecEvents from '@/components/sanpec/EventsSanpec';
import SanpecFAQ from '@/components/sanpec/SanpecFAQ';
import { SanpecSummaryBlog } from '@/components/sanpec/SummaryBlog';
import ResearchSanpec from './research-sanpec';





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
      <SanpecEvents/>
      
      <SanpecSummaryBlog/>
      <ResearchSanpec/>
      
       

      <Faqs />
     
    </>
  )
}
