import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyMacaronSection from '@/components/WhyMacaronSection';
import PlaybookSection from '@/components/PlaybookSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechSection from '@/components/TechSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="w-full relative bg-background min-h-screen overflow-x-hidden">
      {/* SVG Filter for noise effect */}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <filter id="noiseFilter" x="0" y="0" width="100" height="100" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>

      <Header />
      
      <div className="flex w-full min-h-full flex-col items-center pt-11 md:pt-16">
        <HeroSection />
        <WhyMacaronSection />
        <PlaybookSection />
        <TestimonialsSection />
        <TechSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;