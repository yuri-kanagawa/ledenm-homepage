import AppProvider from 'src/app/provider'
import React from 'react'
import { Metadata } from 'next'
import { en } from 'src/locales/en'

export const metadata: Metadata = en.meta

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0
        }}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
