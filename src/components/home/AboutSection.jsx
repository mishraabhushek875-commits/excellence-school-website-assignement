import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
    <section className="about-section" ref={ref}>
      <div className="container">
        <div className="about-content-wrapper">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Welcome to Excellence</h2>
            <div className="title-underline"></div>
            <p>
              At Excellence International School, we believe in providing an environment that fosters intellectual, physical, and emotional growth. With a legacy of educational excellence, our mission is to empower students to become compassionate, critical thinkers and global citizens.
            </p>
            <p>
              We blend traditional values with modern teaching methodologies to create a vibrant learning community where every student thrives.
            </p>
            <button className="btn btn-outline">Read Our Story</button>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
              alt="Students in classroom" 
            />
            <div className="experience-badge">
              <span className="years">25+</span>
              <span className="text">Years of<br/>Excellence</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="highlights-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
