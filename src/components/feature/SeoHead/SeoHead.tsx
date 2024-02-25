'use client'
import React from 'react'
import Head from 'next/head'
import { useLocale } from 'src/hooks/useLocal'
import { MetaTagList } from 'src/components/feature/SeoHead/internal/MetaTagList/MetaTagList'

type Props = {
  children: React.ReactNode
}

export const SeoHead: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <head>
      <MetaTagList />
      <body style={{ backgroundColor: 'black' }}>{children}</body>
    </head>
  )
}
