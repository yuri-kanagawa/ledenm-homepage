import { generateLocal } from 'src/utils/locales'
import { apps } from './app'
import { words } from './words'
import { sns } from './sns'
import { meta } from './meta'

export const fr = generateLocal(words, apps, sns, meta)
