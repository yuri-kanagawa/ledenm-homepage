import { Metadata } from 'next'
import { LEDENM } from 'src/constants/ledenm'

const DESCRIPTION = 'LEDENM が作ったアプリの紹介ページ'

export const meta: Metadata = {
  title: LEDENM,
  description: DESCRIPTION,
  openGraph: {
    title: LEDENM,
    description: DESCRIPTION
  }
}

