import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>SHINE</h2>
        <p>Tensile Structure</p>
      </div>
      <div className="footer-section">
        <h3>Information</h3>
        <ul>
          <li>Main</li>
          <li>Projects</li>
          <li>Process</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contacts</h3>
        <p>1234 Sample Street, Austin Texas 78704</p>
        <p>📞 512.333.2222</p>
        <p>✉️ shinestructure470@gmail.com</p>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
          <span>🔵 FB</span>
          <span>🔵 TW</span>
          <span>🔵 IN</span>
          <span>🔵 PT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
