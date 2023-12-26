// src/components/GeologicalNewsComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GeologicalNewsComponent.css';

const GeologicalNewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace the API endpoint with the actual endpoint for geological news
        const response = await axios.get('https://example.com/geological-news-api');

        console.log('Geological News API Response:', response.data);
        setNews(response.data); // Adjust this based on the actual structure of your geological news data
      } catch (error) {
        console.error('Error fetching geological news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="geological-news-container">
      <h2>Geological News</h2>
      {loading ? (
        <p>Loading geological news...</p>
      ) : news.length ? (
        <ul>
          {/* Render geological news list here based on the actual structure */}
          {news.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No geological news available</p>
      )}
    </div>
  );
};

export default GeologicalNewsComponent;
