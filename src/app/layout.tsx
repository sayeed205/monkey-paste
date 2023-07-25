import { homeConfig, siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/ui/Header';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { SiteFooter } from '@/components/site-footer';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Server Components',
        'Radix UI',
    ],
    authors: [
        {
            name: 'Sayed Ahmed',
            url: 'https://github.com/sayeed205',
        },
    ],
    creator: 'Sayed Ahmed',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: 'Sayed Ahmed',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header items={homeConfig.homeNav} />
                    {children}
                    <Analytics />
                    <Toaster />
                    <TailwindIndicator />
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
