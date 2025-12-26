# Data Model: RoboLearn Platform Homepage

## Entity: LearningModule
Represents a curriculum section with title, description, and key learning points

**Fields:**
- id: string (unique identifier for the module)
- title: string (e.g., "ROS 2 – Robot Nervous System")
- description: string (brief description of the module)
- items: string[] (list of key learning points)
- emoji: string (emoji to represent the module)

**Validation rules:**
- title must be 1-100 characters
- description must be 1-500 characters
- items array must have 1-10 items
- emoji must be a valid emoji character

**Relationships:**
- Belongs to a LearningRoadmap

## Entity: LearningRoadmap
Represents the 13-week progression of learning modules

**Fields:**
- weeks: WeekSection[] (array of week sections)

**Validation rules:**
- weeks array must have 1-20 sections
- each week section must have a duration of 1-4 weeks
- total weeks should sum to 13 weeks for the main roadmap

## Entity: WeekSection
Represents a time period in the learning roadmap

**Fields:**
- startWeek: number (starting week number)
- endWeek: number (ending week number)
- title: string (e.g., "ROS 2 Fundamentals")
- description: string (optional description)

**Validation rules:**
- startWeek must be 1-13
- endWeek must be 1-13
- startWeek must be less than or equal to endWeek
- title must be 1-100 characters

## Entity: ValueProposition
Represents a value proposition card in the "Why This Matters" section

**Fields:**
- id: string (unique identifier)
- emoji: string (emoji representing the value proposition)
- title: string (short title)
- description: string (optional detailed description)

**Validation rules:**
- emoji must be a valid emoji character
- title must be 1-50 characters
- description must be 0-200 characters

## Entity: StartOption
Represents different learning environment configurations available to users

**Fields:**
- id: string (unique identifier)
- emoji: string (emoji representing the option)
- title: string (e.g., "Workstation")
- description: string (description of the setup option)

**Validation rules:**
- emoji must be a valid emoji character
- title must be 1-50 characters
- description must be 1-200 characters

## Entity: HeroSection
Represents the hero section of the homepage

**Fields:**
- title: string (main title of the homepage)
- subtitle: string (subtitle text)
- description: string (brief description)
- primaryButton: ButtonConfig (configuration for primary button)
- secondaryButton: ButtonConfig (configuration for secondary button)

**Validation rules:**
- title must be 1-100 characters
- subtitle must be 1-100 characters
- description must be 1-200 characters

## Entity: ButtonConfig
Represents configuration for buttons

**Fields:**
- text: string (button text)
- link: string (destination URL/route)
- variant: string (button style variant)

**Validation rules:**
- text must be 1-50 characters
- link must be a valid URL or route
- variant must be one of predefined values (e.g., "primary", "secondary")