import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About ARIMA Analytix</h2>

      <div className="company-background">
        <h3>Our Company Background</h3>
        <p>ARIMA Analytix is a cutting-edge data science and analytics startup founded with the vision of empowering businesses with actionable insights derived from data. Established in 2023, we have rapidly grown into a dynamic team of data scientists, engineers, and analysts dedicated to delivering value through innovative solutions.</p>
      </div>

      <div className="our-mission">
        <h3>Our Mission</h3>
        <p>At ARIMA Analytix, our mission is to revolutionize the way businesses leverage data. We are committed to providing advanced analytics solutions that drive informed decision-making, optimize processes, and uncover hidden opportunities. Our goal is to be a trusted partner in our clients' success through the power of data.</p>
      </div>

      <div className="meet-the-team">
        <h3>Meet the Team</h3>
        <p>Our team is comprised of skilled professionals with diverse expertise in data science, machine learning, analytics, and more. We believe in the synergy of collaboration and creativity, fostering an environment where every team member plays a crucial role in our collective success.</p>
        {/* Include profiles or descriptions of key team members */}
      </div>

      <div className="our-services">
        <h3>Our Services</h3>
        <p>ARIMA Analytix offers a comprehensive suite of data-driven services tailored to meet the unique needs of our clients. Whether it's predictive analytics, machine learning, or custom data solutions, we strive to deliver excellence in every project. Our services include:</p>
        <ul>
          <li>Data Analysis and Visualization</li>
          <li>Machine Learning Model Development</li>
          <li>Predictive Analytics</li>
          <li>Custom Data Solutions</li>
          {/* Add more services as needed */}
        </ul>
      </div>

      <div className="commitment-to-quality">
        <h3>Our Commitment to Quality</h3>
        <p>Quality is at the heart of everything we do. We adhere to the highest standards in data science and analytics, ensuring that our clients receive accurate, actionable insights. Our commitment to quality extends to ongoing innovation, continuous improvement, and a dedication to exceeding client expectations.</p>
      </div>

      <div className="why-choose-arima">
        <h3>Why Choose ARIMA Analytix?</h3>
        <p>Choosing ARIMA Analytix as your data science partner means choosing a team that is passionate about your success. We stand out for:</p>
        <ul>
          <li>Expertise in Advanced Analytics</li>
          <li>Customized Solutions for Every Business</li>
          <li>Proven Track Record of Delivering Results</li>
          <li>Collaborative and Client-Centric Approach</li>
          {/* Add more reasons to choose ARIMA Analytix */}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
