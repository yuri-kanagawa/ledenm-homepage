import { Metadata } from 'next'
import { BASE_URL, LEDENM } from 'src/constants/ledenm'
import ogImage from 'src/app/[locale]/opengraph-image.png'

const DESCRIPTION = 'LEDENM が作ったアプリの紹介ページ'
const LOCALE_URL = `${BASE_URL}/ja`

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
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
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  }
}

