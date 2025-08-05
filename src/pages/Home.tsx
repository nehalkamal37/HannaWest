import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
\      <Contact />
    </div>
  );
};

export default Home;