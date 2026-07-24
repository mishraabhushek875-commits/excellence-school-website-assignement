import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header contact-header">
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We would love to hear from you. Get in touch with our team.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send us a Message</h2>
            <div className="title-underline"></div>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Admission Inquiry" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Get in Touch</h3>
              <ul className="info-list">
                <li>
                  <span className="icon">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <p>123 Education Lane, Knowledge City, 10001</p>
                  </div>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </li>
                <li>
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email:</strong>
                    <p>info@excellenceinternationalschool.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
