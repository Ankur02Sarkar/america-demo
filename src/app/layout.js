"use client";
import { Inter } from 'next/font/google';

import './globals.scss'

import Intro from '../Components/Intro/Intro'
import Header from '../Components/Header/Header'
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'
import { usePathname } from 'next/navigation';

const font = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
      <head>
        <title>A M E R I C A</title>
      </head>
      <body className={font.className}>
        <Header />
        {children}
        <Intro />
        {path !== '/' ? <BackgroundVideo /> : null}
      </body>
    </html>
  )
}