import React from 'react';
import Card from './Card';

const LearningModuleCard = ({ emoji, title, description, items }) => {
  return (
    <Card>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{emoji}</div>
      <h3 style={{ marginBottom: '0.5rem', color: '#252525' }}>{title}</h3>
      <p style={{ color: '#666', marginBottom: '1rem' }}>{description}</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '0.25rem 0', color: '#555' }}>
            • {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LearningModuleCard;