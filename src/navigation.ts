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
      href: getPermalink('/maps'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Book a Tour',
      href: getPermalink('/#book-a-tour'),
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
        { text: 'Maps', href: getPermalink('/maps') },
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Book a Tour', href: getPermalink('/#book-a-tour') },
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
