import React from 'react';
import Card from './Card';

const LearningRoadmap = ({ roadmap }) => {
  return (
    <Card>
      {roadmap.map((section, index) => (
        <div key={index}>
          <h3>Weeks {section.startWeek}–{section.endWeek}</h3>
          <h4>{section.title}</h4>
          <p>{section.description}</p>
          {index < roadmap.length - 1 && <hr />} {/* Add separator between sections except for the last one */}
        </div>
      ))}
    </Card>
  );
};

export default LearningRoadmap;