# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Navigate to the frontend/docusaurus directory:
   ```bash
   cd frontend/docusaurus
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser to `http://localhost:3000` to view the textbook.

### Building for Production

1. Build the static files:
   ```bash
   npm run build
   ```

2. The built files will be in the `build/` directory, ready for deployment to GitHub Pages.

### Adding New Content

1. To add a new chapter, create a new MDX file in the `docs/` directory:
   ```bash
   # Example: docs/module-1/chapter-1-introduction.mdx
   ```

2. Follow the established chapter structure with introduction, explanation, visual elements, summary, and quiz.

3. Update the sidebar configuration in `sidebars.js` to include your new chapter.

### Deployment

The site is configured for deployment to GitHub Pages. After building with `npm run build`, the output in the `build/` directory can be deployed directly to GitHub Pages.

For GitHub Actions deployment, ensure the workflow is configured in `.github/workflows/deploy.yml`.

### Validation Steps

To validate that the quickstart guide works correctly:

1. Follow the installation steps above
2. Verify that the development server starts without errors
3. Confirm that the textbook is accessible at `http://localhost:3000`
4. Check that all 4 curriculum modules are accessible
5. Verify that all 12 chapters are properly linked and viewable
6. Test that navigation between modules and chapters works correctly
7. Ensure that the mobile-optimized design displays properly
8. Confirm that all quiz elements are functional