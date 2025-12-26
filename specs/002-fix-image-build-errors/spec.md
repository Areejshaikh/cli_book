# Feature Specification: Fix Image Build Errors and Create Text+Emoji UI

**Feature Branch**: `002-fix-image-build-errors`
**Created**: 2025-12-26
**Status**: Draft
**Input**: User description: "You are a senior Docusaurus + React engineer. GOAL: 1) Fix ALL image-related build errors permanently 2) Make the frontend run without any missing SVG/PNG issues 3) Replace image-based UI with a clean, modern, text + emoji based UI 4) Build a beautiful homepage at `/` using React (no images required) CONTEXT: - Project uses Docusaurus v3 - Multiple MDX files fail because images like: - static/static/images/*.png - @site/static/img/undraw_*.svg do NOT exist - HomepageFeatures.js imports missing SVGs - I want ZERO image dependency for now TASKS (DO ALL): 1) Remove HomepageFeatures.js usage - Delete or ignore src/components/HomepageFeatures.js - Remove its import and JSX usage from src/pages/index.js 2) Create a new homepage UI directly inside src/pages/index.js - Use Layout from '@theme/Layout' - Use inline styles or basic CSS - Use emojis instead of images - Must look modern, clean, professional - Mobile-first layout 3) Homepage content MUST include: - Title: \"ROBOLEARN PLATFORM\" - Subtitle: \"Build robots that understand the physical world\" - Short description about Physical AI & Robotics - Buttons: - Get Started → /docs - Browse Content → /docs 4) VERY IMPORTANT: - Homepage MUST contain **AT LEAST 4 CLEAR SECTIONS** - Each section MUST represent Three to Four MODULE - Each module section should have: - Emoji icon - Module title - 1–2 line description - Bullet points (what the learner will study) REQUIRED MODULE SECTIONS: SECTION 1 – 🤖 Module 1: ROS 2 – Robot Nervous System - Nodes, Topics, Services - Robot communication & control - Middleware fundamentals SECTION 2 – 🔄 Module 2: Digital Twins & Simulation - Gazebo physics - Unity environments - Sensor simulation - Sim-to-Real concepts SECTION 3 – 🧠 Module 3: NVIDIA Isaac AI - Isaac Sim - Isaac ROS - Perception & navigation - AI training pipelines SECTION 4 – 💬 Module 4: Vision-Language-Action (VLA) - Voice → Action - LLM planning - Multimodal robotics - Autonomous humanoid capstone 5) Additional sections to include: - \"Why This Matters\" (with emojis): 🤖 Embodied Intelligence 👨‍👩‍👧‍👦 Human-Centered Design 🏭 Production-Ready Skills 💬 Conversational Robotics 🌍 Sim-to-Real Transfer 🛠️ Advanced Manipulation 6) Learning roadmap section: - ROS 2 Fundamentals (Weeks 1–5) - Simulation & Digital Twins (Weeks 6–7) - NVIDIA Isaac AI (Weeks 8–10) - VLA Capstone (Weeks 11–13) 7) Start options section: - 💻 Workstation - ☁️ Cloud + Edge - 🎮 Simulation Only 8) Strict constraints: - NO SVG imports - NO PNG/JPG references - NO @site/static/img usage - NO HomepageFeatures component - Frontend MUST compile without errors OUTPUT REQUIREMENTS: - Provide FULL replacement code for src/pages/index.js - Do NOT explain theory - Do NOT suggest images - Do NOT leave placeholders - Assume user wants frontend working immediately Think carefully and produce production-ready React code."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Robolearn Platform Homepage (Priority: P1)

As a visitor to the Robolearn Platform, I want to see a clean, modern homepage with clear information about the course modules so that I can understand what the platform offers and begin my learning journey.

**Why this priority**: This is the primary entry point for all users and sets the first impression of the platform. Without a functional homepage, users cannot engage with the content.

**Independent Test**: The homepage loads without any image-related errors, displays all required content sections with emojis instead of images, and includes clear navigation options to the documentation.

**Acceptance Scenarios**:

1. **Given** I am a visitor to the Robolearn Platform, **When** I navigate to the homepage, **Then** I see a clean, modern UI with the title "ROBOLEARN PLATFORM", subtitle "Build robots that understand the physical world", and all required module sections.

2. **Given** I am on the homepage, **When** I view the page on a mobile device, **Then** the layout remains responsive and readable with no broken elements.

3. **Given** I am on the homepage, **When** I click the "Get Started" button, **Then** I am navigated to the /docs route.

4. **Given** I am on the homepage, **When** I click the "Browse Content" button, **Then** I am navigated to the /docs route.

---

### User Story 2 - Explore Learning Modules (Priority: P2)

As a potential learner, I want to explore the different modules available on the platform so that I can understand the curriculum and decide which path to follow.

**Why this priority**: Understanding the available modules is critical for user engagement and decision-making about which course path to pursue.

**Independent Test**: I can see all 4 required module sections with their emoji icons, titles, descriptions, and bullet points detailing what will be studied in each module.

**Acceptance Scenarios**:

1. **Given** I am viewing the homepage, **When** I scroll to the module sections, **Then** I see 4 clearly delineated sections for ROS 2, Digital Twins & Simulation, NVIDIA Isaac AI, and Vision-Language-Action modules.

2. **Given** I am viewing a module section, **When** I read the content, **Then** I see an emoji icon, module title, description, and bullet points about what will be studied.

---

### User Story 3 - Review Learning Roadmap (Priority: P3)

As a learner, I want to see a clear learning roadmap so that I understand the progression and time commitment required for the course.

**Why this priority**: The roadmap helps set expectations and provides a structured learning path for users.

**Independent Test**: I can see a clearly presented learning roadmap that outlines the 13-week curriculum with module breakdowns.

**Acceptance Scenarios**:

1. **Given** I am viewing the homepage, **When** I look for the learning roadmap, **Then** I see a clear timeline showing ROS 2 Fundamentals (Weeks 1–5), Simulation & Digital Twins (Weeks 6–7), NVIDIA Isaac AI (Weeks 8–10), and VLA Capstone (Weeks 11–13).

---

### User Story 4 - Understand Platform Value (Priority: P3)

As a visitor, I want to understand why this platform matters so that I can appreciate the value proposition of learning embodied AI and robotics.

**Why this priority**: Understanding the value proposition is important for user motivation and engagement.

**Independent Test**: I can see a "Why This Matters" section with relevant emojis and explanations of the key concepts.

**Acceptance Scenarios**:

1. **Given** I am viewing the homepage, **When** I look for the "Why This Matters" section, **Then** I see the specified emojis and descriptions for Embodied Intelligence, Human-Centered Design, Production-Ready Skills, Conversational Robotics, Sim-to-Real Transfer, and Advanced Manipulation.

---

### Edge Cases

- What happens when the page is accessed on a very small mobile screen?
- How does the layout adapt when users have reduced motion preferences?
- What if a user has emoji rendering disabled or unavailable?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST load the homepage without any image-related build errors
- **FR-002**: System MUST display the title "ROBOLEARN PLATFORM" on the homepage
- **FR-003**: System MUST display the subtitle "Build robots that understand the physical world" on the homepage
- **FR-004**: System MUST include a short description about Physical AI & Robotics on the homepage
- **FR-005**: System MUST provide "Get Started" and "Browse Content" buttons that navigate to /docs
- **FR-006**: System MUST display at least 4 clear module sections with emoji icons, titles, descriptions, and bullet points
- **FR-007**: System MUST include the specific Module 1 section with ROS 2 content and emoji 🤖
- **FR-008**: System MUST include the specific Module 2 section with Digital Twins & Simulation content and emoji 🔄
- **FR-009**: System MUST include the specific Module 3 section with NVIDIA Isaac AI content and emoji 🧠
- **FR-010**: System MUST include the specific Module 4 section with Vision-Language-Action content and emoji 💬
- **FR-011**: System MUST include a "Why This Matters" section with the specified emojis and topics
- **FR-012**: System MUST display the learning roadmap with the specified 13-week timeline
- **FR-013**: System MUST display start options section with workstation, cloud, and simulation options
- **FR-014**: System MUST NOT import or reference any SVG, PNG, or JPG files
- **FR-015**: System MUST NOT include the HomepageFeatures component
- **FR-016**: System MUST use a mobile-first layout approach
- **FR-017**: System MUST use Layout from '@theme/Layout' for the page structure

### Constitution Compliance Requirements

These requirements ensure the feature aligns with the Unified AI Book Project Constitution:

- **CC-001**: Content MUST be beginner-friendly, technically correct, and concise
- **CC-002**: Frontend MUST use Docusaurus and be optimized for mobile and slow connections
- **CC-003**: Backend MUST use FastAPI with clean architecture and free-tier services
- **CC-004**: RAG chatbot MUST only use textbook content with no hallucinations
- **CC-005**: System MUST support content personalization based on user background
- **CC-006**: System MUST support Urdu translation for all content
- **CC-007**: System MUST run entirely on free-tier services
- **CC-008**: Chapter structure MUST follow the required format (introduction, explanation, visual, summary, quiz)

### Key Entities *(include if feature involves data)*

- **Homepage Content**: Represents the structured information displayed on the main page, including modules, roadmap, and value propositions
- **Module Section**: Represents a learning module with emoji icon, title, description, and study bullet points
- **Navigation Elements**: Represents buttons and links that allow users to navigate to documentation

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can access the homepage without encountering any image-related build errors or missing asset issues
- **SC-002**: The homepage displays all 4 required module sections with appropriate emoji icons, titles, descriptions, and bullet points
- **SC-003**: The homepage includes the "Why This Matters" section with all 6 specified emojis and topics
- **SC-004**: The learning roadmap section clearly displays the 13-week curriculum with proper module breakdowns
- **SC-005**: The frontend builds successfully without any errors related to missing SVG/PNG files
- **SC-006**: Mobile users can navigate and read all content on the homepage with appropriate responsive layout