import './globals.css';
import Header from '@/components/Header';
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import EmailJSProvider from '@/components/EmailJSProvider';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] })

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <EmailJSProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </EmailJSProvider>
      </body>
    </html>
  );
}
