import Layout from "../../components/layout";
// import AdvancetoolSection from "./sections/AdvanceToolSection";
import ChartSection from "./sections/ChartSection";
import HeroSection from "./sections/HeroSection";
// import PersonSection from "./sections/PersonSection";

export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <ChartSection />
      {/* <AdvancetoolSection /> */}
      {/* <PersonSection /> */}
    </Layout>
  )
}