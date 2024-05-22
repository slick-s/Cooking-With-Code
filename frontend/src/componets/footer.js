// src/Footer.js
import React from 'react';
import './Footer.css'; <link rel="stylesheet" href="styles.css"></link>

function Footer() {
  return (
    <footer>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      <div className="footer-content">
        <div className="footer-section about">
          <div className="slogan-container">
            <p className="slogan">Fueling Foodies with Flavor and Fun!</p>
          </div>
          <p>We are dedicated to bringing culinary delights to your kitchen. Our mission is to inspire and empower home cooks with delicious recipes, expert tips, and the latest in food trends. Join us on a flavorful journey and transform your cooking experience!</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: Cookingwithcode@company.com</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Cooking with Code | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
