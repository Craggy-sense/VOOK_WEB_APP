import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="corporate-footer">
      <div className="footer-top">
        <div className="container row">
          <div className="col-5">

            <p className="mb-4">
              Availing Knowledge to the People. A registered NGO in Kenya dedicated to empowerment, leadership training, and spiritual growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="header-social-link"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="header-social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="header-social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="header-social-link"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          
          <div className="col-7 row">
            <div className="col-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/programs">Operational Departments</Link></li>
                <li><Link href="/courses">Course Offerings</Link></li>
              </ul>
            </div>
            
            <div className="col-6 footer-contact-info">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt f-icon"></i>
                  <span>Nairobi, Kenya</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt f-icon"></i>
                  <a href="tel:+254700000000">+254 700 000 000</a>
                </li>
                <li>
                  <i className="fas fa-envelope f-icon"></i>
                  <a href="mailto:info@vookinternational.org">info@vookinternational.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vook Voice International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
