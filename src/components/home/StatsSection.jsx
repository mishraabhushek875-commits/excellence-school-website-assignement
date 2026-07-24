import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 1500, label: 'Happy Students', suffix: '+' },
    { number: 50, label: 'Expert Teachers', suffix: '+' },
    { number: 99, label: 'Success Rate', suffix: '%' },
    { number: 25, label: 'Awards Won', suffix: '+' },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-overlay"></div>
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-box"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="stat-number">
              {inView ? <CountUp end={stat.number} duration={2.5} /> : '0'}
              <span>{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
