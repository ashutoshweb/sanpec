import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { MainFeatures } from '@/custom/MainFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Events from "../custom/Events";
import {CTARegister} from "@/custom/CTARegister";
import {HeroSanpec} from "@/custom/HeroSanpec";


export default function Home() {
  return (
    <>
      <Head>
        <title>Sanpec</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <HeroSanpec />
      <MainFeatures />
        <Events/>
        <CTARegister/>
      <SecondaryFeatures />

      <Testimonials />

      <Faqs />
    </>
  )
}
