import Button from "./components/Button";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials.jsx";
import LandingPageData from "./constant/webData.jsx";

function App() {
  const { header, hero, features, testimonials } = LandingPageData;
  const isLogin = true;

  return (
    <div>
      <Header header={header} user={isLogin} />
      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </div>
  );
}

export default App;
