import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
