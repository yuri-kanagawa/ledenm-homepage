import { Metadata } from 'next'
import { LEDENM } from 'src/constants/ledenm'

const DESCRIPTION = 'Pengenalan aplikasi yang dibuat oleh ledenm'

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
