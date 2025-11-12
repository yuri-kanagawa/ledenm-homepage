import { useState } from 'react'
import { Locale } from 'src/domains'

export const useLocale = () => {
  const [locale, setLocale] = useState(Locale.default())
  const t = locale.definition
  return { locale, setLocale, t }
}

export type LocalType = ReturnType<typeof useLocale>
