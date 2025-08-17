import {Hero} from "./_components/hero"
import {Services} from "./_components/services"
import {CTA} from "./_components/CTA"
import Faq from "./_components/FAQ"
import {KeyFeatures} from "./_components/features"
import {Testimonial} from "./_components/testimonialSection"

export default function HomePage() {
  return (
    <div className="container flex flex-col gap-20 px-6 sm:px-20 py-12">
      <Hero/>
      <Services />
      <KeyFeatures />
      <Faq />
      <Testimonial />
      <CTA/>
    </div>
  );
}
