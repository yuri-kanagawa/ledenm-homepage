import { Language } from 'src/domains/valueObjects/language/Language'
import { useState } from 'react'
export const useLocale = () => {
  const [language, setLanguage] = useState(Language.create(Language.EN))
  const t = language.locale
  return { language, setLanguage, t }
}

export type LocalType = ReturnType<typeof useLocale>
