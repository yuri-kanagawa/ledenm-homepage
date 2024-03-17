import { generateLocal } from 'src/utils/locales'
import { words } from './words'
import { apps } from './app'
import { sns } from './sns'
import { meta } from './meta'

export const zh = generateLocal(words, apps, sns, meta)
