import Layout from 'src/components/layout';
import HeroSection from './sections/HeroSection';
import GoogleOauthSection from './sections/GoogleOauthSection';

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <GoogleOauthSection />
    </Layout>
  );
}
