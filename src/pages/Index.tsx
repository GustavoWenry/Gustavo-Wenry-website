import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-tech">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
