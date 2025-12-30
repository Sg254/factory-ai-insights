import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  return (
    <div className="bg-[#000435] text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;