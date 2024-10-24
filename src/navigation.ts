import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: ' The Mountains',
      href: getPermalink('/mountains/landing'),
    },
    {
      text: 'The Sea',
      href: getPermalink('/sea/landing'),
    },
    {
      text: 'Maps',
      href: getPermalink('/landing/lead-generation'),
      // links: [
      //   {
      //     text: 'Fernando Botero',
      //     href: getPermalink('/landing/lead-generation'),
      //   },
      //   {
      //     text: 'Robert Indiana',
      //     href: getPermalink('/landing/sales'),
      //   },
      //   {
      //     text: 'Ju Ming',
      //     href: getPermalink('/landing/click-through'),
      //   },
      //   {
      //     text: 'Emily Young',
      //     href: getPermalink('/landing/product'),
      //   },
      //   {
      //     text: 'Jaume Plensa',
      //     href: getPermalink('/landing/pre-launch'),
      //   },
      //   // {
      //   //   text: 'Subscription',
      //   //   href: getPermalink('/landing/subscription'),
      //   // },
      // ],
    },
    {
      text: 'About',
      href: getPermalink('/landing/lead-generation'),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    {
      text: 'Book a Tour',
      href: '#',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: `Lāna'i Art Collection`,
      links: [
        { text: 'The Mountains', href: getPermalink('/mountains/landing') },
        { text: 'The Sea', href: getPermalink('/sea/landing') },
        { text: 'Maps', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Book a Tour', href: '#' },
      ],
    },
    {
      title: `Pulama Lāna'i`,
      links: [
        { text: 'About', href: 'https://pulamalanai.com/#what-we-do' },
        { text: 'Mission', href: 'https://pulamalanai.com/#future' },
        { text: 'Contact', href: 'https://pulamalanai.com/#contact' },
      ],
    },
    {
      title: 'Sensei & The Four Seasons',
      links: [
        { text: 'About Koēle', href: 'https://www.fourseasons.com/sensei/' },
        { text: 'Contact Koēle', href: 'https://www.fourseasons.com/sensei/contact-us/' },
        { text: 'About Manele', href: 'https://www.fourseasons.com/lanai//' },
        { text: 'Contact Manele', href: 'https://www.fourseasons.com/lanai/contact-us/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: ``,
};
