import './AboutSection.css';

const AboutSection = () => {
  const highlights = [
    {
      title: 'Global Curriculum',
      description: 'Internationally recognized syllabus preparing students for a global future.',
      icon: '🌍'
    },
    {
      title: 'Expert Faculty',
      description: 'Highly qualified educators dedicated to nurturing every child\'s potential.',
      icon: '👨‍🏫'
    },
    {
      title: 'Modern Campus',
      description: 'State-of-the-art facilities, smart classrooms, and extensive sports infrastructure.',
      icon: '🏫'
    },
    {
      title: 'Holistic Growth',
      description: 'Focus on extracurriculars, leadership skills, and character building.',
      icon: '🌱'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content-wrapper">
          <div className="about-text">
            <h2 className="section-title">Welcome to Excellence</h2>
            <div className="title-underline"></div>
            <p>
              At Excellence International School, we believe in providing an environment that fosters intellectual, physical, and emotional growth. With a legacy of educational excellence, our mission is to empower students to become compassionate, critical thinkers and global citizens.
            </p>
            <p>
              We blend traditional values with modern teaching methodologies to create a vibrant learning community where every student thrives.
            </p>
            <button className="btn btn-outline">Read Our Story</button>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Students in classroom" 
            />
            <div className="experience-badge">
              <span className="years">25+</span>
              <span className="text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
