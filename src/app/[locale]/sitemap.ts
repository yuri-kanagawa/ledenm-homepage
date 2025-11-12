import { MetadataRoute } from 'next'
import { BASE_URL } from 'src/constants/ledenm'
import { Locale } from 'src/domains'

export default async function sitemap({
  locale
}: {
  locale: string
}): Promise<MetadataRoute.Sitemap> {
  const targetLocale = Locale.create(locale)
  const uri = targetLocale.isEnglish() ? '' : `/${targetLocale.value}`
  return [
    {
      url: `${BASE_URL}${uri}`,
      lastModified: new Date()
    }
  ]
}
