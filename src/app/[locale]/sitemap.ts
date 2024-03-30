import { MetadataRoute } from 'next'
import { BASE_URL } from 'src/constants/ledenm'
import { getIsEnglish } from 'src/utils/locales'


export default async function sitemap({
                                        locale
                                      }: {
  locale: string
}): Promise<MetadataRoute.Sitemap> {
  const uri = getIsEnglish(locale) ? `/${locale}` : ''
  return [
    {
      url: `${BASE_URL}${uri}`,
      lastModified: new Date()
    }
  ]
}
