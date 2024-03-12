import { generate_local, LocalConstType } from 'src/utils/locales'
import { apps } from './app'
import { words } from 'src/locales/en/words'
import { sns } from './sns'

export const en: LocalConstType = generate_local(words, apps, sns)
