import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { WhyUs } from '@/components/sections/why-us';
import { Skilled } from '@/components/sections/skilled';
import { Services } from '@/components/sections/services';
import { Showcase } from '@/components/sections/showcase';
import { Ecosystem } from '@/components/sections/ecosystem';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { Team } from '@/components/sections/team';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyUs />
        <Skilled />
        <Services />
        <Showcase />
        <Ecosystem />
        <Stats />
        <Testimonials />
        <Team variant="compact" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
