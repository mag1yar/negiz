import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = 'mag1yar';
const projectName = 'typesafe';
const title = 'TypeSafe';

const config: Config = {
  title,
  tagline: 'Type-safe validation and transformation library for TypeScript',
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
        content: 'typescript, validation, schema, type-safety, data transformation, forms',
      },
      {
        name: 'description',
        content:
          'TypeSafe is a library for TypeScript that provides runtime validation, type inference, and data transformation with a simple API.',
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
        // {
        //   href: `https://npmjs.com/package/@${organizationName}/${projectName}`,
        //   label: 'npm',
        //   position: 'right',
        // },
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
        name: 'TypeSafe',
        applicationCategory: 'DeveloperApplication',
        description: 'Type-safe validation and transformation library for TypeScript',
      }),
    },
  ],
};

export default config;
