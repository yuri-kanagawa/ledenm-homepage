'use client'
import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography
} from '@mui/material'
import Image from 'next/image'
import { useMediaQuerySize } from 'src/hooks/useMediaQuerySize'

type Props = {
  appName: string
  explain: string
}
export const AppCard: React.FC<Props> = (props) => {
  const { appName, explain } = props
  const { isMobileSize, isTabletSize } = useMediaQuerySize()
  const cardHeight = isMobileSize ? 50 : 80
  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea>
          <Image
            src={`/product/${appName}/portfolio.png`}
            width={0}
            height={0}
            alt={appName}
            sizes="100vw"
            style={{ width: '100%', height: '80%' }}
          />
          <CardContent sx={{ height: cardHeight }}>
            <Typography noWrap>{appName}</Typography>
            <Typography color="text.secondary" noWrap>
              {explain}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
