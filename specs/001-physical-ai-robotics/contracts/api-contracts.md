# API Contracts: Physical AI & Humanoid Robotics Textbook

## Frontend-Only Endpoints (Static Content)

### GET /api/textbook/modules
**Description**: Retrieve list of curriculum modules
**Response**:
```json
{
  "modules": [
    {
      "id": "module-1",
      "title": "The Robotic Nervous System (ROS 2)",
      "description": "Middleware for robot control",
      "chaptersCount": 3,
      "position": 1
    },
    {
      "id": "module-2", 
      "title": "The Digital Twin (Gazebo & Unity)",
      "description": "Physics simulation and environment building",
      "chaptersCount": 3,
      "position": 2
    },
    {
      "id": "module-3",
      "title": "The AI-Robot Brain (NVIDIA Isaac™)",
      "description": "Advanced perception, training, and navigation",
      "chaptersCount": 3,
      "position": 3
    },
    {
      "id": "module-4",
      "title": "Vision-Language-Action (VLA)",
      "description": "Integrating LLMs with Robotics",
      "chaptersCount": 3,
      "position": 4
    }
  ]
}
```

### GET /api/textbook/modules/{moduleId}/chapters
**Description**: Retrieve chapters for a specific module
**Response**:
```json
{
  "moduleId": "module-1",
  "chapters": [
    {
      "id": "chapter-1-1",
      "title": "ROS 2 Nodes, Topics, and Services",
      "position": 1,
      "estimatedReadingTime": 3,
      "learningObjectives": ["Understand ROS 2 architecture", "Implement basic nodes"]
    },
    {
      "id": "chapter-1-2", 
      "title": "Python agents using rclpy to control ROS",
      "position": 2,
      "estimatedReadingTime": 4,
      "learningObjectives": ["Create Python agents", "Control ROS with rclpy"]
    }
  ]
}
```

### GET /api/textbook/chapters/{chapterId}
**Description**: Retrieve content for a specific chapter
**Response**:
```json
{
  "id": "chapter-1-1",
  "title": "ROS 2 Nodes, Topics, and Services",
  "moduleId": "module-1",
  "content": "# Chapter Content in Markdown Format...",
  "estimatedReadingTime": 3,
  "learningObjectives": ["Understand ROS 2 architecture", "Implement basic nodes"],
  "visualElements": [
    {
      "id": "visual-1",
      "type": "diagram",
      "title": "ROS 2 Architecture",
      "src": "/static/ros2-architecture.png",
      "altText": "Diagram showing ROS 2 architecture"
    }
  ],
  "summaryPoints": [
    "ROS 2 uses a graph architecture",
    "Nodes communicate via topics and services"
  ],
  "quizQuestions": [
    {
      "id": "quiz-1-1",
      "questionText": "What is a ROS 2 node?",
      "questionType": "multipleChoice",
      "options": ["A hardware component", "A software process", "A network protocol"],
      "correctAnswer": "A software process"
    }
  ]
}
```

**Note**: Since this phase is frontend-only, these API endpoints would be simulated with static files or implemented in a future backend phase.