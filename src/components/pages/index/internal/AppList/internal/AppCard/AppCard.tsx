'use client'
import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'
import Image from 'next/image'


type Props = {
  productName: string
  explain: string
}
export const AppCard: React.FC<Props> = (props) => {
  const { productName, explain } = props

  console.log(`/product/${productName}/portfolio.png`)
  return (
    <Grid item xs={3}>
      <Card onClick={() => console.log('ss')}>
        <CardActionArea>
          <CardMedia title={productName} />
          <Image
            src={`/product/${productName}/portfolio.png`}
            width={0}
            height={0}
            alt={productName}
            sizes="100vw"
            style={{ width: '100%', height: '80%' }}
          />
          <CardContent sx={{ height: 120 }}>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {explain}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
