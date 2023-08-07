import Layout from '../../components/layout';
import HeroSection from './sections/HeroSection';
import SearchSection from './sections/SearchSection';

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <SearchSection />
    </Layout>
  );
}
