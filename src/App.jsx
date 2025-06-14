import "./App.css";
import FadeInSection from "./FadeInSection";
import CoachesSection from "./pages/CoachesSection";
import ContactSection from "./pages/Contact";
import FAQSection from "./pages/FAQSection";
import Footer from "./pages/Footer";
import HeroSection from "./pages/Hero";
import Locations from "./pages/Locations";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <FadeInSection>
        <CoachesSection />
      </FadeInSection>

      <FadeInSection>
        <Locations />
      </FadeInSection>

      <FadeInSection>
        <FAQSection />
      </FadeInSection>

      <FadeInSection>
        <ContactSection />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}

export default App;
