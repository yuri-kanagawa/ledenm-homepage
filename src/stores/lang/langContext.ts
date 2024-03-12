import { atom } from 'recoil'
import { LanguageType } from 'src/constants/languages'

export const langState = atom<LanguageType>({
  key: 'lang',
  default: 'en'
})
