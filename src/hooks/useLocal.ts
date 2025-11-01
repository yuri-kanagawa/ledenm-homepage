import { Language } from 'src/domains/valueObjects/language/Language'
import { useState } from 'react'
import { getLocalFile } from 'src/utils/locales'

export const useLocale = () => {
  const [language, setLanguage] = useState(Language.create(Language.EN))
  const t = getLocalFile(language.value)
  return { language, setLanguage, t }
}

export type LocalType = ReturnType<typeof useLocale>
