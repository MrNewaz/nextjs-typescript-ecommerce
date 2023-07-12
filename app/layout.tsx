import type { Metadata } from 'next'

import Footer from './components/Footer'
import Hydrate from './components/Hydrate'
import NavBar from './components/NavBar'
import './globals.css'

import { Lobster_Two } from 'next/font/google'

const lobster = Lobster_Two({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-lobster',
})

export const metadata: Metadata = {
  title: 'Newaz Cart',
  description: 'Hishabee Demo Assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lobster.variable}`}>
      <Hydrate>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Hydrate>
    </html>
  )
}
