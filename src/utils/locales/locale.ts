import { convertObjectKeysToArray } from 'src/utils/convert'
import { LANGUAGES, LanguageType } from 'src/constants/languages'


export const getIsExistLanguage = (value: string): boolean => value in LANGUAGES

export const LanguageList: LanguageType[] = convertObjectKeysToArray(LANGUAGES) as LanguageType[]
export const getIsEnglish = (lang: string): boolean => lang === 'en'
