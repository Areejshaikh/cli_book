// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learn Physical AI beyond screens',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL
url: 'https://cli-book.vercel.app',
baseUrl: '/',

  organizationName: 'areejzaheer',
  projectName: 'physical-ai-textbook',
  deploymentBranch: 'vercel',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // book lives on /
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false, // blog disabled (not needed)
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Physical AI Textbook',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/Areejshaikh/cli_book.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Physical AI Textbook`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    metadata: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        name: 'keywords',
        content: 'Physical AI, Robotics, ROS2, Humanoid Robotics',
      },
    ],
  },
};

export default config;
