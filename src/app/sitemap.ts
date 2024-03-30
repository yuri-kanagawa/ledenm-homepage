import { MetadataRoute } from 'next'
import { BASE_URL } from 'src/constants/ledenm'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date()
    }
  ]
}
