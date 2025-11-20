import { useRef } from "react";
import Quotation from "./components/Testinomal";
import CustomerFeedback from "./components/FeedBacks";
import FAQ from "./components/Faqs";
import HowItWorks from "./components/Working";
import Footer from "./components/Footer";
import FlashingOffer from "./components/Offer";
import ServicesSection from "./components/ServiceSec";
import Hero from "./components/Herosection";
import Navbar from "./components/Navbar";

export default function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const howRef = useRef(null);
  const testimonialRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{
          homeRef,
          servicesRef,
          howRef,
          testimonialRef,
        }}
      />

      <FlashingOffer />

      <div ref={homeRef}>
        <Hero />
      </div>

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <div ref={howRef}>
        <HowItWorks />
      </div>

      <CustomerFeedback />

      <div ref={testimonialRef}>
        <Quotation />
      </div>

      <FAQ />
      <Footer />
    </>
  );
}
