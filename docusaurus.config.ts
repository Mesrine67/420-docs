import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '420 Documentation',
  tagline: 'The official documentation for the 420 Project',
  favicon: 'https://dunb17ur4ymx4.cloudfront.net/webstore/logos/f8344e97ccf9df92a2ceb567ef36ddcaaec1226e.png',
  trailingSlash: false,
  // Set the production url of your site here
  url: 'https://420-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '420-project', // Usually your GitHub org/user name.
  projectName: '420-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-image-zoom'
  ],
  presets: [
    ['classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mesrine67/420-docs',
        },   
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mesrine67/420-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-S32Y3N3DLB',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        margin: 24,
        scrollOffset: 0,
      }
    },
    // Replace with your project's social card
    // image: 'img/qbox-logo2.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'keywords', content: 'esx, ESX, ox, OX, qbx, QBX, qbox, qbus, qbox, fivem, redm, cfx, citizenfx, fivem framework' },
      { name: 'og:image', content: 'https://dunb17ur4ymx4.cloudfront.net/webstore/logos/f8344e97ccf9df92a2ceb567ef36ddcaaec1226e.png' },
    ],
    // algolia: {
    //   appId: '7JRFEYG1CO',
    //   apiKey: '329ea77a61e40a081b6e1f86126c6658',
    //   indexName: 'qbox',
    //   contextualSearch: true,
    //   searchParameters: {},
    //   searchPagePath: 'search',
    //   insights: false,
    // },
    navbar: {
      title: '420 Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/duck.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introductionSidebar',
          position: 'left',
          label: 'General',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tebexSidebar',
          position: 'left',
          label: 'Tebex',
        },
        {to: '/blog', label: 'Tutorials', position: 'left'},
        {
          href: 'https://hebergtonserv.com/',
          label: 'Hosting',
          position: 'right',
        },
        {
          href: 'https://discord.gg/',
          className: "header-discord-link",
          position: 'right',
        },
        {
          href: 'https://github.com/Mesrine67',
          className: "header-github-link",
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [],
    //   copyright: `Copyright © ${new Date().getFullYear()} 420 Project 📦`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark, //oneDark
      additionalLanguages: ['lua'],
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
  ],
};

export default config;
