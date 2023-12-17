import Head from 'next/head'

import { Faqs } from '@/components/Faqs'

import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { HeroSanpec } from '@/components/sanpec/HeroSanpec';

import SanpecEvents from '@/components/sanpec/EventsSanpec';
import SanpecFAQ from '@/components/sanpec/SanpecFAQ';
import { SanpecSummaryBlog } from '@/components/sanpec/SummaryBlog';

import { SanpecBlog } from '@/components/sanpec/blog/SanpecBlog';
import MobServices from '@/components/sanpec/MobServices';
import { Services } from '@/components/sanpec/Services';
import { ServicesPillars } from '@/components/sanpec/ServicesPillars';
import {SixPillarsFeatures} from "../components/sanpec/SixPillarsFeatures";
import {MobSixPillarsServices} from "../components/sanpec/MobSixPillarsServices";





export default function Home() {
  return (
    <>
      <Head>
        <title>Sanpec</title>
        
        <meta
          name="description"
          content="Sanpec: Bringing Engineering Excellence. Improving Power Grid Reliability"
        />
         <meta
          name="author"
          content="Webaicraft"
        />
      </Head>
      <HeroSanpec />
        <ServicesPillars/>
      <SecondaryFeatures />
      <MobSixPillarsServices/>
      <Services />
      <MobServices/>
      <SanpecEvents/>
      <SanpecBlog/>
      <Faqs />
     
    </>
  )
}
