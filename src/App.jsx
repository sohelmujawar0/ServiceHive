
import CustomerFeedback from "./components/FeedBacks"
import FAQ from "./components/Faqs"
import HowItWorks from "./components/Working"
import Footer from "./components/Footer"
import FlashingOffer from "./components/Offer"
import ServicesSection from "./components/ServiceSec"
import Hero from "./components/Herosection"
import Navbar from "./components/Navbar"
export default function App(){
    return <>
          <Navbar/>
          <FlashingOffer/>
          <Hero/>
          <ServicesSection/>
          <HowItWorks/>
          <CustomerFeedback/>
          <FAQ/>
          <Footer/>
          </>
}