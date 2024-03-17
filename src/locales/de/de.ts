import { generateLocal } from 'src/utils/locales'
import { apps } from './app'
import { words } from 'src/locales/de/words'
import { sns } from './sns'
import { meta } from './meta'

export const de = generateLocal(words, apps, sns, meta)
