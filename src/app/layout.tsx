import type { Metadata } from 'next';
import './globals.scss';
import { getResetStyles } from '@stihl-design-system/components/partials';
import {
  DSAriaLiveRegions,
  DSSkipToContent,
} from '@stihl-design-system/components';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'STIHL Quickstart Template',
  description:
    'This repository offers a collection of basic page templates with our design system, providing ready-to-use layouts to ensure consistency and efficiency across projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {
          // Include the global reset styles from the STIHL design system.
          getResetStyles()

          /**
           * Next.js 14.x currently sets the manifest path incorrectly when using a "basePath".
           * Since we are using a basePath to deploy this example page to GitHub Pages, the
           * path to the manifest.webmanifest file is incorrect and the browser will not be able to
           * find it. This will cause the browser to throw an 404 error in the console.
           *
           * See the following issue for more information: https://github.com/vercel/next.js/issues/56687
           */
        }
      </head>
      <body>
        {/* 
          Skip to content link - default targetElementId is set to "main". When activated, page scrolls to <main id="main" /> 
          See reference: https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-skip-to-content-link--documentation
        */}
        <DSSkipToContent />

        {/*
          Aria live regions component to announce updates to screen readers. (used by components like DSToast)
          See reference: https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-toast--documentation#live-regions
        */}
        <DSAriaLiveRegions />
        <Header />
        <main id='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
