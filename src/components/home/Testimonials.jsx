import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Parent',
      text: 'Excellence International School has completely transformed my child’s approach to learning. The faculty is incredible!',
      rating: 5
    },
    {
      name: 'David Sharma',
      role: 'Alumnus',
      text: 'The holistic environment helped me discover my true passion for science. I owe my career to the teachers here.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'Parent',
      text: 'From sports to academics, the school provides a perfectly balanced curriculum. Highly recommended.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What People Say</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer">
                <div className="avatar">{review.name.charAt(0)}</div>
                <div className="info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
