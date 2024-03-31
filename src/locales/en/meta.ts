import { Metadata } from 'next'
import { BASE_URL, LEDENM, OGP_IMAGE_URL } from 'src/constants/ledenm'
import ogImage from 'src/app/opengraph-image.png'

const DESCRIPTION = 'Introduction to applications created by ledenm'
const LOCALE_URL = BASE_URL

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  openGraph: {
    title: LEDENM,
    description: DESCRIPTION,
    images: [{
      url: OGP_IMAGE_URL,
      width: ogImage.width,
      height: ogImage.height

    }]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: OGP_IMAGE_URL,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  }
}
