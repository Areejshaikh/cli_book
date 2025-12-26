import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import LearningModuleCard from '../components/LearningModuleCard';
import LearningRoadmap from '../components/LearningRoadmap';
import ValuePropositionCard from '../components/ValuePropositionCard';
import StartOptionCard from '../components/StartOptionCard';
import Section from '../components/Section';

// Data for learning modules
const learningModules = [
  {
    id: 'module-1',
    emoji: '🤖',
    title: 'Module 1: ROS 2 – Robot Nervous System',
    description: 'Core robot communication framework',
    items: [
      'Nodes, Topics, Services',
      'Robot communication & control',
      'Middleware fundamentals'
    ]
  },
  {
    id: 'module-2',
    emoji: '🔄',
    title: 'Module 2: Digital Twins & Simulation',
    description: 'Physics-based simulation environments',
    items: [
      'Gazebo physics',
      'Unity environments',
      'Sensor simulation',
      'Sim-to-Real concepts'
    ]
  },
  {
    id: 'module-3',
    emoji: '🧠',
    title: 'Module 3: NVIDIA Isaac AI',
    description: 'AI for robot perception and navigation',
    items: [
      'Isaac Sim',
      'Isaac ROS',
      'Perception & navigation',
      'AI training pipelines'
    ]
  },
  {
    id: 'module-4',
    emoji: '💬',
    title: 'Module 4: Vision-Language-Action (VLA)',
    description: 'Human-commanded robot tasks',
    items: [
      'Voice → Action',
      'LLM planning',
      'Multimodal robotics',
      'Autonomous humanoid capstone'
    ]
  }
];

// Data for value propositions
const valuePropositions = [
  { id: 'vp-1', emoji: '🤖', title: 'Embodied Intelligence' },
  { id: 'vp-2', emoji: '👨‍👩‍👧‍👦', title: 'Human-Centered Design' },
  { id: 'vp-3', emoji: '🏭', title: 'Production-Ready Skills' },
  { id: 'vp-4', emoji: '💬', title: 'Conversational Robotics' },
  { id: 'vp-5', emoji: '🌍', title: 'Sim-to-Real Transfer' },
  { id: 'vp-6', emoji: '🛠️', title: 'Advanced Manipulation' }
];

// Data for start options
const startOptions = [
  {
    id: 'so-1',
    emoji: '💻',
    title: 'Workstation',
    description: 'Local development setup'
  },
  {
    id: 'so-2',
    emoji: '☁️',
    title: 'Cloud + Edge',
    description: 'Remote compute + edge devices'
  },
  {
    id: 'so-3',
    emoji: '🎮',
    title: 'Simulation Only',
    description: 'Virtual simulation environment'
  }
];

// Data for roadmap
const roadmap = [
  {
    startWeek: 1,
    endWeek: 5,
    title: 'ROS 2 Fundamentals',
    description: 'Learn the core concepts of ROS 2'
  },
  {
    startWeek: 6,
    endWeek: 7,
    title: 'Simulation & Digital Twins',
    description: 'Physics-based simulation environments'
  },
  {
    startWeek: 8,
    endWeek: 10,
    title: 'NVIDIA Isaac AI',
    description: 'AI for robot perception and navigation'
  },
  {
    startWeek: 11,
    endWeek: 13,
    title: 'VLA Capstone',
    description: 'Vision-Language-Action capstone project'
  }
];

export default function Homepage() {
  return (
    <Layout
      title={`ROBOLEARN PLATFORM`}
      description="Interactive textbook for Physical AI & Robotics">
      <main>
        <HeroSection />
        <Section title="Learning Modules">
          <div className="container">
            <div className="row">
              {learningModules.map((module) => (
                <div key={module.id} className="col col--3 margin-bottom--lg">
                  <LearningModuleCard
                    emoji={module.emoji}
                    title={module.title}
                    description={module.description}
                    items={module.items}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section title="Why This Matters">
          <div className="container">
            <div className="row">
              {valuePropositions.map((vp) => (
                <div key={vp.id} className="col col--2 margin-bottom--lg">
                  <ValuePropositionCard
                    emoji={vp.emoji}
                    title={vp.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section title="Learning Roadmap">
          <div className="container">
            <div className="row">
              <div className="col col--12 margin-bottom--lg">
                <LearningRoadmap roadmap={roadmap} />
              </div>
            </div>
          </div>
        </Section>
        <Section title="Start Options">
          <div className="container">
            <div className="row">
              {startOptions.map((option) => (
                <div key={option.id} className="col col--4 margin-bottom--lg">
                  <StartOptionCard
                    emoji={option.emoji}
                    title={option.title}
                    description={option.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}