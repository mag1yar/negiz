import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = 'mag1yar';
const projectName = 'negiz';
const title = 'Negiz';

const config: Config = {
  title,
  tagline: 'Adaptive React UI Components Ecosystem',
  favicon: 'img/favicon.ico',

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/apps/docs/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'react, ui components, adaptive, responsive, compound components, polymorphic, zustand, context, grid, collection, layer management',
      },
      {
        name: 'description',
        content:
          'Negiz is a modern React UI ecosystem featuring adaptive components, intelligent layout systems, and context-driven state management. Build responsive interfaces that adapt to container sizes, not just screen sizes.',
      },
      { name: 'author', content: organizationName },
    ],

    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title,
      // logo: {
      //   alt: 'Zustand Context Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
        {
          href: `https://npmjs.com/org/${organizationName}`,
          label: 'npm',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   copyright: `Copyright © ${new Date().getFullYear()} ${organizationName}. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'jsx', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Negiz',
        applicationCategory: 'DeveloperApplication',
        description:
          'Adaptive React UI Components Ecosystem with container-based responsive design, compound components, and intelligent state management.',
        programmingLanguage: ['TypeScript', 'JavaScript'],
        author: {
          '@type': 'Organization',
          name: 'Negiz',
          url: `https://github.com/${organizationName}`,
        },
      }),
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Negiz - Adaptive React UI Components',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content:
          'Modern React UI ecosystem with container-based responsive design and intelligent component architecture.',
      },
    },
  ],
};

export default config;
