import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className="career-container">
      <h2>Join Our Team</h2>
      <p>We are always looking for talented individuals to join our team and contribute to our success. If you are passionate, driven, and eager to make a difference, we would love to hear from you.</p>

      <h3>Open Positions</h3>
      <ul>
        <li>Data Scientist</li>
        <li>Machine Learning Engineer (MLE)</li>
        <li>Marketing Officer</li>
        {/* Add more positions as needed */}
      </ul>

      <div className="how-to-apply">
        <h3>How to Apply</h3>
        <p>If you are interested in any of the positions listed above, please send your resume to <strong>arimaanalytix@gmail.com</strong>.</p>
      </div>

      <div className="why-join">
        <h3>Why Join Us?</h3>
        <p>At our company, we are committed to fostering a work environment that values collaboration, innovation, and diversity. Here are some reasons to join our team:</p>
        <ul>
          <li><strong>Values:</strong> We uphold a set of core values, including integrity, transparency, and continuous improvement.</li>
          <li><strong>Mission:</strong> Our mission is to deliver cutting-edge solutions that make a positive impact on our clients and the world.</li>
          <li><strong>Culture:</strong> We believe in cultivating a culture of learning, where employees are encouraged to expand their skills and knowledge.</li>
          <li><strong>Teamwork:</strong> We emphasize teamwork and collaboration, recognizing that diverse perspectives contribute to our success.</li>
          {/* Add more points about the company culture, values, and mission */}
        </ul>
      </div>
    </div>
  );
};

export default Career;
