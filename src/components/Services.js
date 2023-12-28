import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Customer Segmentation and Personalization',
      objective: 'Enhance engagement and loyalty.',
      service: 'Detailed customer segments and personalized marketing strategies.',
      deliverables: [
        'Clear customer segments based on behavior and preferences.',
        'Personalized marketing strategies for each segment.',
        'Implementation guidance and support.',
      ],
    },
    {
      title: 'Predictive Analytics for Demand Forecasting',
      objective: 'Optimize inventory and reduce stockouts.',
      service: 'Predictive models for product demand and inventory recommendations.',
      deliverables: [
        'Predictive models with accuracy metrics.',
        'Recommendations for optimized inventory levels.',
        'Real-time monitoring dashboard for demand trends.',
      ],
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      objective: 'Boost sales funnel efficiency.',
      service: 'A/B testing results with high-converting design implementation.',
      deliverables: [
        'A/B testing outcomes and identified high-converting designs.',
        'Recommendations for website improvements.',
        'Implementation support for design changes.',
      ],
    },
    {
      title: 'Customer Lifetime Value (CLV) Prediction',
      objective: 'Maximize customer relationship value.',
      service: 'CLV prediction model and tailored marketing strategies.',
      deliverables: [
        'CLV prediction model with customer segmentation.',
        'Tailored marketing strategies for high-value segments.',
        'Regular updates and refinements based on performance.',
      ],
    },
    {
      title: 'Churn Prediction and Retention Strategy',
      objective: 'Minimize customer churn and boost retention.',
      service: 'Churn prediction model and personalized retention strategy.',
      deliverables: [
        'Churn prediction model with identified at-risk customers.',
        'Retention strategy document with personalized incentives.',
        'Monitoring system for proactive retention efforts.',
      ],
    },
    {
      title: 'Product Recommendation Engine',
      objective: 'Increase cross-selling and upselling opportunities.',
      service: 'Implemented recommendation engine and personalized product suggestions.',
      deliverables: [
        'Implemented recommendation engine on the e-commerce platform.',
        'Personalized product suggestions for users.',
        'Metrics on the impact of recommendations on sales.',
      ],
    },
    {
      title: 'Fraud Detection and Prevention',
      objective: 'Enhance security and protect against fraudulent activities.',
      service: 'Fraud detection model with real-time monitoring.',
      deliverables: [
        'Fraud detection model with real-time monitoring.',
        'Incident response plan for potential fraud cases.',
        'Continuous model updates to adapt to emerging threats.',
      ],
    },
    {
      title: 'Social Media Analytics for Marketing Optimization',
      objective: 'Improve the effectiveness of social media marketing.',
      service: 'Social media analytics report with actionable insights.',
      deliverables: [
        'Social media analytics report with sentiment analysis.',
        'Actionable insights for targeted marketing campaigns.',
        'Recommendations for improving social media engagement.',
      ],
    },
    // Add more services as needed
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay speed to 2 seconds (2000 milliseconds)
  };

  return (
    <section className="services">
      <h2>Our Services</h2>
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div className='title'>
              <h3>{service.title}</h3>
              <p><strong>Objective</strong> {service.objective}</p>
              <p><strong>Service</strong> {service.service}</p>
            </div>
            <div className='body'>
              <div>
                <h3>Deliverables</h3>
                <ul className='fancy-list'>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
