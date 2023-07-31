import Layout from "../../components/layout";
import AdvancetoolSection from "./sections/AdvanceToolSection";
import HeroSection from "./sections/HeroSection";
// import PersonSection from "./sections/PersonSection";

export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <AdvancetoolSection />
      {/* <PersonSection /> */}
    </Layout>
  )
}