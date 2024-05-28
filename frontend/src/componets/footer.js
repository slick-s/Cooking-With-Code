/// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are dedicated to bringing culinary delights to your kitchen. Our
            mission is to inspire and empower home cooks with delicious recipes,
            expert tips, and the latest in food trends. Join us on a flavorful
            journey and transform your cooking experience!
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: Cookingwithcode@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Foodie Lane, Flavor Town, USA</p>
        </div>
        <div className="footer-section slogan">
          <p>Fueling Foodies with Creative Recipes</p>
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
