import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Footer Page</h2>
    <div className="footer-content">
      <p>Contact Us:</p>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 1234 Main Street, City, Country</li>
      </ul>
    </div>
    <div className="footer-social">
      <p>Follow Us:</p>
      <ul>
        <li><a href="https://www.facebook.com/example">Facebook</a></li>
        <li><a href="https://www.twitter.com/example">Twitter</a></li>
        <li><a href="https://www.instagram.com/example">Instagram</a></li>
      </ul>
    </div>
    
  </footer>
  )
}

export default Footer