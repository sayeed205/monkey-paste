import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: 'MonkeyPaste',
    description: 'A simple code sharing platform',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: 'https://monkeypaste.tech/og-image.png',
    links: {
        github: 'https://github.com/sayeed205/monkey-paste',
        twitter: 'https://twitter.com',
    },
};

export const homeConfig = {
    homeNav: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
    ],
};
