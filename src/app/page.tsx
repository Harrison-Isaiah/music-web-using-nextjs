// import Image from 'next/image'
// import Navbar from './components/Navbar'

import { AnimatedTooltipPreview } from "./components/AnimatedTooltip";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Testimonials } from "./components/Testimonials";
import { Webinars } from "./components/Webinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg/black[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Harrison</h1> */}
      <HeroSection />
      <FeaturedSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <Webinars/>
      <AnimatedTooltipPreview/>
      <Footer/>
    </main>
  );
}
