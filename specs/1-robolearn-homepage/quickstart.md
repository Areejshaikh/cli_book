# Quickstart: RoboLearn Platform Homepage

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Docusaurus CLI (optional but recommended)

## Setup Instructions

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run start
   # or
   yarn start
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to see the homepage in development mode.

## Key Files to Modify

- `src/pages/index.js` - Main homepage React component
- `src/pages/index.module.css` - CSS module for homepage styling
- `docusaurus.config.js` - Docusaurus configuration (if changes needed)

## Development Guidelines

1. **Component Structure:**
   - Use functional components with hooks
   - Implement CSS modules for styling
   - Follow mobile-first responsive design principles

2. **Styling:**
   - Use CSS modules for scoped styles
   - Implement card/box design with rounded corners and shadows
   - Add hover transitions for interactive elements
   - Use emojis instead of images for icons

3. **Content Structure:**
   - Hero section with title, subtitle, and description
   - 4 learning module cards with specific content
   - "Why This Matters" section with value proposition cards
   - 13-week learning roadmap
   - Start options section

## Testing

1. **Run tests:**
   ```bash
   npm run test
   # or
   yarn test
   ```

2. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Deployment

1. **Build the static files:**
   ```bash
   npm run build
   ```

2. **Serve the build folder:**
   ```bash
   npm run serve
   # or
   yarn serve
   ```