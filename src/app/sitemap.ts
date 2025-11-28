import { MetadataRoute } from 'next'
import { BASE_URL } from 'src/constants/ledenm'
import { Locale } from 'src/domains'
import { PathBuilder } from 'src/lib/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Add root page (English)
  entries.push({
    url: BASE_URL,
    lastModified: new Date()
  })

  // Add all locale pages
  Locale.LIST.forEach((localeCode) => {
    const locale = Locale.create(localeCode)
    if (!locale.isEnglish()) {
      const pathBuilder = new PathBuilder(locale)
      entries.push({
        url: `${BASE_URL}${pathBuilder.buildPath()}`,
        lastModified: new Date()
      })
    }
  })

  return entries
}
