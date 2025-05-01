
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import HeatLevelSection from "@/components/HeatLevelSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedSection />
        <HeatLevelSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
