import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: ' The Mountains',
      href: getPermalink('/mountains/landing'),
      links: [
        {
          text: 'Map',
          href: getPermalink('/mountains/map'),
        },
        {
          text: 'Artworks',
          href: getPermalink('/mountains/landing'),
        },
      ],
    },
    {
      text: 'The Sea',
      href: getPermalink('/sea/landing'),
      links: [
        {
          text: 'Map',
          href: getPermalink('/sea/map'),
        },
        {
          text: 'Artworks',
          href: getPermalink('/sea/landing'),
        },
      ],
    },
    {
      text: 'Artist Bios',
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
      text: 'Blog',
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
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Book a Tour', href: '#' },
      ],
    },
    {
      title: `Pulama Lāna'i`,
      links: [
        { text: 'About', href: '#' },
        { text: 'Mission', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Sensei & The Four Seasons',
      links: [
        { text: 'About Koēle', href: '#' },
        { text: 'About Manele', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Reservations', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: ``,
};
