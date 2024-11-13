import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./index.css";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";
import Testimonials from "./Components/Testimonials/Testimonials";
import FAQs from "./Components/FAQ/FAQs";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
