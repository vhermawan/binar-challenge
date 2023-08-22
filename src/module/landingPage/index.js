import Layout from 'src/components/layout';
import HeroSection from './sections/HeroSection';
import GraphqlSection from './sections/GraphqlSection';

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <GraphqlSection />
    </Layout>
  );
}
