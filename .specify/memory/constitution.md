<!--
SYNC IMPACT REPORT:
- Version change: 1.0.0 → 1.0.0 (initial version based on provided constitution)
- Modified principles: N/A (new constitution)
- Added sections: Mission, Core Deliverables, Content Rules, Frontend Rules, Backend Rules, RAG Chatbot Rules, Deployment, Governance
- Removed sections: N/A
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/commands/*.toml: ⚠ pending
- Follow-up TODOs: None
-->

# Unified AI Book Project Constitution

## Core Principles

### Mission
Build an AI-native, interactive textbook that is written using AI (Claude Code + Spec-Kit Plus), published as a Docusaurus website, enhanced with a RAG-based chatbot, and personalized and multilingual (Urdu support). The platform must teach technical concepts in a simple, beginner-friendly way.

### AI-Driven Book Creation
All book content must be created using AI tools with Spec-Kit Plus for structured specifications. Content must be written using Docusaurus and deployed to GitHub Pages. This ensures consistency, scalability, and AI-native development approach.

### Integrated RAG Chatbot
The platform must include an integrated RAG chatbot that answers questions using only book content. The chatbot must support answering based on user-selected text and use OpenAI Agents/ChatKit SDKs with FastAPI backend, Qdrant Cloud for vector storage, and Neon Serverless Postgres for relational data.

### Authentication & User Profiling
Implement Signup and Signin using Better-Auth. During signup, collect user information about their software and hardware background to enable content personalization. This ensures a tailored learning experience for each user.

### Content Personalization
Each chapter must have a button to personalize content. Content depth and explanations should adapt to the user's background, making the learning experience more effective and accessible to different skill levels.

### Localization
Each chapter must have a button to translate content into Urdu. Translation must preserve technical meaning to make the content accessible to a wider audience while maintaining accuracy.

## Content Rules
- Total reading time of the entire book must not exceed **45 minutes**
- Content must be:
  - Beginner-friendly
  - Technically correct
  - Concise and clear

### Chapter Structure
- Total chapters: **12**
- Each chapter must include:
  - Short introduction
  - Core concept explanation
  - One visual or diagram placeholder
  - 3-bullet summary
  - 3-question quiz

## Frontend Rules
- Use **Docusaurus**
- Mobile-first and fast
- Readable on low-end phones
- No unnecessary animations or heavy libraries
- Maximum 2 font weights
- Card-based layout only
- Must load on slow (3G) connections

## Backend Rules
- Use FastAPI
- Clean and modular architecture
- Use Neon for relational data
- Use Qdrant for vector storage
- Use embeddings suitable for RAG
- All services must run on free tiers

## RAG Chatbot Rules
- Chatbot must only answer using textbook content
- No hallucinations allowed
- All answers must be grounded and factual
- Use chunking with metadata and citations

## Deployment
- Must run entirely on free tiers
- Supported platforms:
  - GitHub Pages
  - Vercel
  - Railway
  - Neon
  - Qdrant Cloud

## Governance
- This constitution overrides all other instructions
- Any added complexity must be justified
- All major design and runtime decisions must be documented in `QWEN.md`

**Version**: 1.0.0 | **Ratified**: 2025-06-13 | **Last Amended**: 2025-12-26