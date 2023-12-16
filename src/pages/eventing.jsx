import { Hero } from '@/components/sanpec/eventing/Hero';
import { Speakers } from '@/components/sanpec/eventing/Speakers';
import { Schedule } from '@/components/sanpec/eventing/Schedule';
import { Sponsors } from '@/components/sanpec/eventing/Sponsors';
import { Pricing } from '@/components/sanpec/eventing/Pricing';
import { Newsletter } from '@/components/sanpec/eventing/Newsletter';



export default function eventing() {
    return (
        <>
            <Hero />
            <Speakers />
            <Schedule />
            <Pricing/>
            <Sponsors />
            <Newsletter />

        </>
    )
}