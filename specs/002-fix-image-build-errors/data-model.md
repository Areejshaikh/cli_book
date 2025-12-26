# Data Model: Fix Image Build Errors and Create Text+Emoji UI

## Entities

### Homepage Content
- **Type**: Content Structure
- **Fields**:
  - title: string (e.g., "ROBOLEARN PLATFORM")
  - subtitle: string (e.g., "Build robots that understand the physical world")
  - description: string (short description about Physical AI & Robotics)
  - buttons: array of Navigation Elements
- **Relationships**: Contains multiple Module Sections
- **Validation**: Must include all required text elements

### Module Section
- **Type**: Content Structure
- **Fields**:
  - emoji: string (single emoji character)
  - title: string (module title)
  - description: string (1-2 line description)
  - items: array of strings (bullet points of what learner will study)
- **Relationships**: Belongs to Homepage Content
- **Validation**: Must have exactly 4 required modules as specified

### Navigation Elements
- **Type**: UI Component
- **Fields**:
  - label: string (button text)
  - destination: string (route path)
- **Validation**: Destination must be a valid internal route

### Section Content
- **Type**: Content Structure
- **Fields**:
  - title: string (section title)
  - items: array of Section Items
- **Relationships**: Contains multiple Section Items
- **Validation**: Must include all required sections

### Section Items
- **Type**: Content Structure
- **Fields**:
  - emoji: string (single emoji character)
  - title: string (item title)
  - description: string (brief description)
- **Relationships**: Belongs to a Section Content
- **Validation**: Must match specified requirements for each section type