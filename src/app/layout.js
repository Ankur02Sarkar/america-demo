import { Inter } from 'next/font/google';

import './globals.scss'

import Intro from '../Components/Intro/Intro'
import Header from '../Components/Header/Header'
import Cursor from '../Components/Cursor/Cursor';

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>A M E R I C A</title>
        <link rel="preload" href="/gun.webp" as="image" />
        <link rel="preload" href="/muzzle.webp" as="image" />
        <link rel="preload" href="/intro.webp" as="image" />
        <link rel="preload" href="/intro-smile.webp" as="image" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        {children}
        <Intro />
        <Cursor />
      </body>
    </html>
  )
}