import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="page-title">About Our School</h1>
          <p className="page-subtitle">A legacy of excellence, nurturing minds since 1998.</p>
        </div>
      </div>

      <div className="container">
        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mv-card">
            <div className="icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To foster an environment of academic excellence, encouraging students to become lifelong learners, critical thinkers, and responsible global citizens.</p>
          </div>
          <div className="mv-card">
            <div className="icon">👁️</div>
            <h2>Our Vision</h2>
            <p>To be a premier educational institution that empowers every child to discover their true potential and lead a purposeful life.</p>
          </div>
        </section>

        {/* Our History */}
        <section className="history-section">
          <div className="history-content">
            <h2 className="section-title">Our Legacy</h2>
            <div className="title-underline"></div>
            <p>
              Established in 1998, Excellence International School began with a humble vision to provide quality education. Over the past two decades, we have grown into a multi-disciplinary campus serving thousands of students from diverse backgrounds.
            </p>
            <p>
              Our journey is marked by a commitment to innovation, holistic development, and maintaining the highest standards of integrity. We take pride in our alumni who are now leaders in various fields across the globe.
            </p>
          </div>
          <div className="history-image">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" alt="School building history" />
          </div>
        </section>

        {/* Leadership */}
        <section className="leadership-section">
          <h2 className="section-title text-center">Message from the Principal</h2>
          <div className="title-underline mx-auto"></div>
          
          <div className="leadership-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Principal" className="principal-img" />
            <div className="leadership-text">
              <h3>Dr. Eleanor Richards</h3>
              <p className="designation">Principal, Excellence International School</p>
              <p className="quote">
                "Education is not just about academic brilliance; it is about building character, empathy, and resilience. At Excellence, we strive every day to ensure that every student who walks through our doors leaves as a confident and compassionate individual ready to change the world."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
