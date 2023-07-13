import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import PersonSection from "./sections/PersonSection";

export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <PersonSection />
    </Layout>
  )
}