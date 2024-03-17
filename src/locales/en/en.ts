import { generateLocal, LocalConstType } from 'src/utils/locales'
import { apps } from './app'
import { words } from './words'
import { sns } from './sns'
import { meta } from './meta'

export const en: LocalConstType = generateLocal(words, apps, sns, meta)
