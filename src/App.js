import Hero from "./components/herosection/Hero";

import "./App.css";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";
import Plan from "./components/plan/Plan";
import Testimonial from "./components/testimonial/Testimonial";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
