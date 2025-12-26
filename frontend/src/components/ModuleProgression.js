import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ModuleProgression({ currentModule, currentChapter, modules }) {
  const moduleOrder = [
    { id: 'module-1', title: 'The Robotic Nervous System (ROS 2)' },
    { id: 'module-2', title: 'The Digital Twin (Gazebo & Unity)' },
    { id: 'module-3', title: 'The AI-Robot Brain (NVIDIA Isaac™)' },
    { id: 'module-4', title: 'Vision-Language-Action (VLA)' },
  ];

  const currentIndex = moduleOrder.findIndex(m => m.id === currentModule);
  const previousModule = currentIndex > 0 ? moduleOrder[currentIndex - 1] : null;
  const nextModule = currentIndex < moduleOrder.length - 1 ? moduleOrder[currentIndex + 1] : null;

  return (
    <div className="module-progression">
      <div className="progression-nav">
        {previousModule && (
          <Link 
            to={useBaseUrl(`/${previousModule.id}/chapter-1`)}
            className="button button--secondary button--outline"
          >
            ← Previous: {previousModule.title}
          </Link>
        )}
        
        <span className="current-module">
          {moduleOrder.find(m => m.id === currentModule)?.title}
        </span>
        
        {nextModule && (
          <Link 
            to={useBaseUrl(`/${nextModule.id}/chapter-1`)}
            className="button button--primary"
          >
            Next: {nextModule.title} →
          </Link>
        )}
      </div>
      
      <div className="module-prerequisites">
        {currentIndex > 0 && (
          <p>
            <strong>Prerequisites:</strong> Before starting this module, 
            you should be familiar with concepts from:
            {moduleOrder.slice(0, currentIndex).map((m, idx) => (
              <span key={m.id}>
                {idx > 0 && ', '}
                <Link to={useBaseUrl(`/docs/${m.id}/chapter-1`)}>{m.title}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}