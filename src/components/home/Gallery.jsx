import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', // study
    'https://images.unsplash.com/photo-1519452331401-2945ba8903c0?q=80&w=800&auto=format&fit=crop', // sports
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', // class
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop', // group
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop', // library
    'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop'  // graduation
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Campus Life</h2>
          <div className="title-underline mx-auto"></div>
          <p className="section-subtitle">Take a glimpse into the vibrant life at our school.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Campus life ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Full</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
