import { Metadata } from 'next'
import { LEDENM } from 'src/constants/ledenm'

const DESCRIPTION = 'LEDENM 创建的应用程序简介'

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  openGraph: {
    title: LEDENM,
    description: DESCRIPTION,
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: '/twitter-image.png'
  }
}

