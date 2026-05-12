import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BestSeller from "./components/BestSeller";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import WhyChooseUs from "./components/WhyChooseUs";
import OurFlowerGallery from "./components/OurFlowerGallery";
import OccasionCategories from "./components/OccasionCategories";
import ProcessSection from "./components/ProcessSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BestSeller />
      <FloatingWhatsApp />
      <WhyChooseUs />
      <OurFlowerGallery />
      <OccasionCategories />
      <ProcessSection />
      <Footer />
    </>
  );
}

export default App;
