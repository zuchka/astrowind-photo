import { getPermalink } from './utils/permalinks';

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
    },
    {
      text: 'About',
      href: getPermalink('/landing/lead-generation'),
    },
    {
      text: 'Book a Tour',
      href: '#',
    },
  ],
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
