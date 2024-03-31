import { Metadata } from 'next'
import { BASE_URL, LEDENM } from 'src/constants/ledenm'
import ogImage from 'src/app/opengraph-image.png'

const DESCRIPTION = 'Pengenalan aplikasi yang dibuat oleh ledenm'
const IMAGE_URL = `${BASE_URL}/${ogImage.src}`

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  openGraph: {
    title: LEDENM,
    description: DESCRIPTION,
    images: [{
      url: IMAGE_URL,
      width: ogImage.width,
      height: ogImage.height

    }]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: IMAGE_URL,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  }
}
