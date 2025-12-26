# Research: Physical AI & Humanoid Robotics Textbook

## Decision: Docusaurus Framework
**Rationale**: Docusaurus was chosen as the framework for the Physical AI textbook because it's specifically designed for documentation and educational content. It provides excellent features for creating structured content with search capabilities, versioning, and responsive design out of the box. It also supports MDX (Markdown with React components), which allows for interactive elements in the textbook.

## Decision: Content Structure
**Rationale**: The content will be organized into 4 curriculum modules with 12 chapters total, as specified in the feature requirements. This structure allows for a progressive learning path from basic concepts (ROS 2) to advanced topics (Vision-Language-Action systems).

## Decision: Mobile-First Approach
**Rationale**: The mobile-first design approach is required by the project constitution and ensures accessibility for users with different devices and connection speeds. This approach will help optimize the textbook for users on low-end devices or slow connections.

## Decision: Frontend-Only Implementation for Phase 1
**Rationale**: As specified in the user requirements, this phase will focus only on frontend work including content creation, chapter structure, and UI layout changes. Backend features like RAG chatbot, authentication, personalization, and localization are explicitly out of scope for this phase.

## Alternatives Considered

### Static Site Generators
- **Gatsby**: More complex than needed, larger bundle sizes
- **Next.js**: More suitable for complex web apps, overkill for documentation site
- **Docusaurus**: Best for documentation, excellent search, mobile-responsive, perfect for textbook content

### Content Formats
- **Pure HTML/CSS**: Less maintainable, harder to structure educational content
- **Markdown**: Good for content, but limited interactivity
- **MDX**: Best of both worlds, markdown with React components for interactive elements

## Technology Stack
- **Framework**: Docusaurus v3+
- **Language**: JavaScript/TypeScript
- **Styling**: CSS modules or Tailwind CSS
- **Deployment**: GitHub Pages
- **Build Tool**: Node.js/npm