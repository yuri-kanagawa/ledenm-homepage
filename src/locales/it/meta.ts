import { Metadata } from 'next'
import { BASE_URL, LEDENM } from 'src/constants/ledenm'
import ogImage from 'src/app/opengraph-image.png'
import twitterImage from 'src/app/twitter-image.png'

const DESCRIPTION = 'Introduzione alle applicazioni create da ledenm'
const LOCALE_URL = `${BASE_URL}/it`

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  metadataBase: new URL(LOCALE_URL),
  openGraph: {
    title: LEDENM,
    description: DESCRIPTION,
    images: [{
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height

    }]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: twitterImage.src,
        width: twitterImage.width,
        height: twitterImage.height
      }
    ]
  }
}
