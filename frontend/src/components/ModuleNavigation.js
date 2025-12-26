import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ModuleNavigation({ currentModule, currentChapter }) {
  const modules = [
    { id: 'module-1', title: 'The Robotic Nervous System (ROS 2)' },
    { id: 'module-2', title: 'The Digital Twin (Gazebo & Unity)' },
    { id: 'module-3', title: 'The AI-Robot Brain (NVIDIA Isaac™)' },
    { id: 'module-4', title: 'Vision-Language-Action (VLA)' },
  ];

  const chapters = {
    'module-1': [
      { id: 'chapter-1', title: 'ROS 2 Nodes, Topics, and Services' },
      { id: 'chapter-2', title: 'Python agents using rclpy to control ROS' },
      { id: 'chapter-3', title: 'URDF: Unified Robot Description Format for humanoids' },
    ],
    'module-2': [
      { id: 'chapter-1', title: 'Simulate physics, gravity, and collisions in Gazebo' },
      { id: 'chapter-2', title: 'Build high-fidelity environments in Unity' },
      { id: 'chapter-3', title: 'Simulate sensors: LiDAR, Depth Cameras, IMUs' },
    ],
    'module-3': [
      { id: 'chapter-1', title: 'Isaac Sim: photorealistic simulation & synthetic data' },
      { id: 'chapter-2', title: 'Isaac ROS: hardware-accelerated VSLAM & navigation' },
      { id: 'chapter-3', title: 'Nav2: path planning for humanoid movement' },
    ],
    'module-4': [
      { id: 'chapter-1', title: 'Voice-to-Action using OpenAI Whisper' },
      { id: 'chapter-2', title: 'Cognitive Planning: LLMs convert natural language to ROS 2 actions' },
      { id: 'chapter-3', title: 'Capstone: Autonomous humanoid executes voice commands' },
    ],
  };

  const currentModuleData = modules.find(m => m.id === currentModule);
  const currentModuleChapters = chapters[currentModule] || [];

  return (
    <div className="module-navigation">
      <h3>{currentModuleData?.title || 'Module Navigation'}</h3>
      <ul>
        {currentModuleChapters.map((chapter, index) => (
          <li key={chapter.id}>
            <Link 
              to={useBaseUrl(`/docs/${currentModule}/${chapter.id}`)}
              className={currentChapter === chapter.id ? 'active' : ''}
            >
              {index + 1}. {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="module-links">
        <h4>Other Modules:</h4>
        <ul>
          {modules
            .filter(m => m.id !== currentModule)
            .map(module => (
              <li key={module.id}>
                <Link to={useBaseUrl(`/docs/${module.id}/chapter-1`)}>
                  {module.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}