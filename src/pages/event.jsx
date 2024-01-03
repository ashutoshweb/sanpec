import { Hero } from '@/components/sanpec/eventing/Hero';
import { Speakers } from '@/components/sanpec/eventing/Speakers';
import { Schedule } from '@/components/sanpec/eventing/Schedule';
import { Sponsors } from '@/components/sanpec/eventing/Sponsors';
import { Pricing } from '@/components/sanpec/eventing/Pricing';
import { Newsletter } from '@/components/sanpec/eventing/Newsletter';
import { Header } from '@/components/sanpec/eventing/Header';
import { Challenges } from '@/components/sanpec/eventing/Challenges';
import {WhoShouldAttend} from '@/components/sanpec/eventing/WhoShouldAttend';
import {EventOrganizer} from '@/components/sanpec/eventing/EventOrganizer';
import {DiscussionPillars} from '@/components/sanpec/eventing/DiscussionPillars';
import {Sponsorship} from '@/components/sanpec/eventing/Sponsorship';
import {DayEvent} from "../components/sanpec/eventing/schedule/DayEvent";



export default function event() {
    return (
        <>
          <Header />
          <Hero />
          <Challenges />
            <Schedule />
            <DayEvent/>
          {/*<Speakers />*/}

          <WhoShouldAttend />
          <EventOrganizer />
            {/*<Sponsership/>*/}

          <Pricing/>
          {/*<Sponsors />*/}
          {/*<Newsletter />*/}

        </>
    )
}