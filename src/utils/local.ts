// import { en } from 'src/locales/en'
// import { ja } from 'src/locales/ja'
import { convertObjectKeysToArray } from './convert'
import { LANGUAGES, LanguageType } from 'src/constants/languages'

// export const getLocale = (locale?: string): LocaleMessageType => {
//   switch (locale) {
//     case 'ja':
//       return ja
//
//     default:
//       return en
//   }
// }

export const getIsExistLanguage = (value: string): boolean => value in LANGUAGES

export const getLanguageLabel = (value: LanguageType): string => {
  if (getIsExistLanguage(value)) {
    return LANGUAGES[value] ?? ''
  } else {
    return ''
  }
}

export const LanguageList = convertObjectKeysToArray(LANGUAGES)
export const getIsEnglish = (lang: string): boolean => lang === 'en'
export const changeLang = (
  func: (value: LanguageType) => void,
  lang: string
) => {
  func(lang as LanguageType)
}
