// src/components/Clients.js
import React from 'react';
import neem_logo from '../data/clients/logos/neem_logo.png';
import ts_logo from '../data/clients/logos/ts_logo.png';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'Neem Infosys', logo: neem_logo },
    { name: 'Town Safety', logo: ts_logo },
    // { name: 'Client C', logo: 'client_c_logo.png' },
    // Add more clients with their respective logos
  ];

  return (
    <section className="clients-container">
      <h2>Our Clients</h2>
      <div className="clients-list">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client.logo} alt={`${client.name} Logo`} className="arima-logo" />
            {/* <img src={require(`../data/clients/logos/${client.logo}`).default} alt={`${client.name} Logo`} /> */}
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
