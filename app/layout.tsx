import { Inter, Playfair_Display } from "next/font/google";
import './styles/globals.css'
import React from 'react'
import Particles from './components/particles'
import Container from './components/ui/container'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: 'Das Archiv des Vergessenen Lichts',
  description: 'Companion website for the scavenger-hunt advent calendar',
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Particles />
        <div className="fog" />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
