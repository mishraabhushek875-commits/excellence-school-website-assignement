import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Empowering the Leaders of Tomorrow</h1>
        <p className="hero-subtitle">
          Excellence International School provides world-class education with a focus on holistic development, innovation, and core values.
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Discover More</Link>
          <Link to="/contact" className="btn btn-secondary">Admissions Open</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
