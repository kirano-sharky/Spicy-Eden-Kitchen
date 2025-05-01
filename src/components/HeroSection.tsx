
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-spicy-dark">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621634892819-80f17c56f51c?q=80&w=1974')] bg-cover bg-center opacity-30"></div>
      
      <div className="container relative z-10 section-padding">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-20 pb-16">
          <div className="animate-bounce-light mb-4">
            <Flame className="h-12 w-12 text-spicy-red" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent spicy-gradient mb-6 drop-shadow-sm">
            Ignite Your Taste Buds
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Experience the thrill of heat with our selection of the world's most delicious spicy foods and sauces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="spicy-gradient text-white animate-pulse-slow">
              Explore Flavors
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
