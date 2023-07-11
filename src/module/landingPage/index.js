import Layout from "../../components/layout";
import CtaBanner from "./sections/CtaBanner";
import Faq from "./sections/Faq";
import HeroSection from "./sections/HeroSection";
import OurServices from "./sections/OurServices";
import Testimony from "./sections/Testimony";
import WhyUs from "./sections/WhyUs";
import Footer from "./sections/Footer";
import "../../styles/App.css";



export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <OurServices/>
      <WhyUs/>
      <Testimony/>
      <CtaBanner/>
      <Faq/>
      <Footer/>
      
      
    </Layout>
  )
}