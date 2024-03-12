import AppProvider from 'src/app/provider'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LEDENM\'s HomePage',
  description: 'LEDENM\'s HomePage\nWe introduce the application',
  openGraph: {
    title: 'LEDENM HOMEPAGE'
  }
}

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
    <head>
      <link rel='manifest' href='/manifest.json' />
    </head>
    <body
      style={{
        margin: 0,
        padding: 0,
        background: 'black'
        // backgroundColor: 'black'
      }}>
    <AppProvider>{children}</AppProvider>
    </body>
    </html>
  )
}
