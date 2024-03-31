import { Metadata } from 'next'
import { LEDENM, OGP_IMAGE_URL } from 'src/constants/ledenm'
import ogImage from 'src/app/opengraph-image.png'

const DESCRIPTION = 'Pengenalan aplikasi yang dibuat oleh ledenm'

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
