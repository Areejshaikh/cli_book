# Data Model: Physical AI & Humanoid Robotics Textbook

## Entities

### Chapter
- **name**: string (e.g., "Introduction to ROS 2")
- **module**: reference to Module
- **content**: MDX content string
- **position**: integer (chapter number within module)
- **estimatedReadingTime**: integer (in minutes)
- **learningObjectives**: array of strings
- **visualElements**: array of references to VisualElement
- **summaryPoints**: array of strings
- **quizQuestions**: array of references to QuizQuestion

### Module
- **name**: string (e.g., "The Robotic Nervous System")
- **description**: string
- **chapters**: array of references to Chapter
- **position**: integer (module number in curriculum)
- **learningOutcomes**: array of strings

### VisualElement
- **id**: string (unique identifier)
- **type**: enum (diagram, image, video, interactive)
- **title**: string
- **description**: string
- **src**: string (path to asset)
- **altText**: string

### QuizQuestion
- **id**: string (unique identifier)
- **questionText**: string
- **questionType**: enum (multipleChoice, trueFalse, shortAnswer)
- **options**: array of strings (for multiple choice)
- **correctAnswer**: string
- **explanation**: string (why this is the correct answer)
- **associatedChapter**: reference to Chapter

### TextbookContent
- **title**: string ("Physical AI & Humanoid Robotics Textbook")
- **subtitle**: string ("An Interactive Learning Experience")
- **author**: string ("AI Assistant with Spec-Kit Plus")
- **totalChapters**: integer (12)
- **totalModules**: integer (4)
- **estimatedTotalReadingTime**: integer (≤45 minutes)
- **modules**: array of references to Module

## Relationships
- TextbookContent "has many" Modules
- Module "has many" Chapters
- Chapter "has many" VisualElements
- Chapter "has many" QuizQuestions