'use client'
import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'

type Props = {
  appName: string
  explain: string
  url: string
}
export const AppCard: React.FC<Props> = (props) => {
  const { appName, explain, url } = props
  const { isMobileSize, isTabletSize } = useMediaQuerySize()
  const cardHeight = isMobileSize ? 50 : 80
  return (
    <Card>
      <CardActionArea
        component="a"
        href={url || undefined}
        target={url ? '_blank' : undefined}
        rel={url ? 'noopener noreferrer' : undefined}
        disabled={!url}
      >
        <Image
          src={`/product/${appName}/1200x630.png`}
          width={0}
          height={0}
          alt={appName}
          // sizes="80vw"
          style={{ width: '100%', height: '100%' }}
        />
        <CardContent sx={{ height: cardHeight, py: 0.5, px: 0.75 }}>
          <Typography noWrap sx={{ fontSize: '`1.5rem' }}>
            {appName}
          </Typography>
          <Typography color="text.secondary" noWrap sx={{ fontSize: '1rem' }}>
            {explain}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
