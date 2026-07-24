import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* School Info */}
          <div className="footer-col">
            <h3 className="footer-title">Excellence Int. School</h3>
            <p className="footer-desc">
              Empowering students to achieve their full potential through holistic education, critical thinking, and character development.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>📍 123 Education Lane, Knowledge City, 10001</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@excellenceinternationalschool.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-desc">Subscribe to our newsletter to get the latest updates and announcements.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Excellence International School. All Rights Reserved.</p>
          <p>Designed as part of the Dettroin Assignment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
