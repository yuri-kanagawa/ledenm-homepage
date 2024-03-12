import { en } from 'src/locales/en'
import { ja } from 'src/locales/ja'
import { ar } from 'src/locales/ar'
import { de } from 'src/locales/de'
import { fr } from 'src/locales/fr'
import { hi } from 'src/locales/hi'
import { id } from 'src/locales/id'
import { it } from 'src/locales/it'
import { ko } from 'src/locales/ko'
import { pt } from 'src/locales/pt'
import { ru } from 'src/locales/ru/ru'
import { zh } from 'src/locales/zh'
import { LocalConstType } from 'src/utils/locales'

export const get_local_file = (language: string): LocalConstType => {
  switch (language) {
    case 'ar':
      return ar
    case 'de':
      return de
    case 'en':
      return en
    case 'fr':
      return fr
    case 'hi':
      return hi
    case 'id':
      return id
    case 'it':
      return it
    case 'ja':
      return ja
    case 'ko':
      return ko
    case 'pt':
      return pt
    case 'ru':
      return ru
    case 'zh':
      return zh
    default:
      return en
  }
}
