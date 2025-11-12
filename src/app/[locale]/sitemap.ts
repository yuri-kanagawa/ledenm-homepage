import { MetadataRoute } from 'next'
import { BASE_URL } from 'src/constants/ledenm'
import { Language } from 'src/domains/valueObjects/language/Language'

export default async function sitemap({
  locale
}: {
  locale: string
}): Promise<MetadataRoute.Sitemap> {
  const language = Language.create(locale)
  const uri = language.isEnglish() ? `/${locale}` : ''
  return [
    {
      url: `${BASE_URL}${uri}`,
      lastModified: new Date()
    }
  ]
}
