import AppProvider from 'src/app/provider'
import React from 'react'
import { SeoHead } from 'src/components/feature/SeoHead'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <SeoHead>
        <body
          style={{
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          background: 'black'
        }}>
        <AppProvider>{children}</AppProvider>
        </body>
      </SeoHead>
    </html>
  )
}
