import { atom } from 'recoil'
export type LanguageType = 'en' | 'ja'
export const langState = atom<LanguageType>({
  key: 'lang',
  default: 'en'
})
