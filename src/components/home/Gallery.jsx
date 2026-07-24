import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop', // books
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop', // hallway/students
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', // desk
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', // kids learning
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop', // notebooks
    'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop'  // school exterior/hall
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
