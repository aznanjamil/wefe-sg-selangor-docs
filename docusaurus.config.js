// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WEFE Nexus Manual',
  tagline: 'User manual for the Sungai Selangor WEFE Nexus platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://teatlas.gssdev.xyz',
  baseUrl: '/docs/',

  organizationName: 'aznanjamil',
  projectName: 'wefe-nexus-docs',

  onBrokenLinks: 'warn',

  // Don't fail the build on missing screenshot images — they're added incrementally.
  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Serve docs directly under baseUrl (/docs/) so URLs are /docs/welcome
          // instead of /docs/docs/welcome.
          routeBasePath: '/',
          editUrl: 'https://github.com/aznanjamil/wefe-nexus-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'WEFE Nexus Manual',
        logo: {
          alt: 'WEFE Nexus',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {
            href: 'https://github.com/aznanjamil/wefe-nexus-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Manual',
                to: '/',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'TE Atlas (live)',
                href: 'https://teatlas.gssdev.xyz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aznanjamil/wefe-nexus-docs',
              },
            ],
          },
        ],
        copyright: `WEFE Nexus · Sungai Selangor · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
