import React from 'react';
import Card from './Card';

const StartOptionCard = ({ emoji, title, description }) => {
  return (
    <Card>
      <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>{emoji}</div>
      <h3 style={{ textAlign: 'center', margin: '0.5rem 0', color: '#252525' }}>{title}</h3>
      <p style={{ textAlign: 'center', color: '#666', margin: 0 }}>{description}</p>
    </Card>
  );
};

export default StartOptionCard;