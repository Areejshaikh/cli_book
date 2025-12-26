import React from 'react';
import Card from './Card';

const ValuePropositionCard = ({ emoji, title }) => {
  return (
    <Card>
      <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>{emoji}</div>
      <h3 style={{ textAlign: 'center', margin: 0, color: '#252525' }}>{title}</h3>
    </Card>
  );
};

export default ValuePropositionCard;