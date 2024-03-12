import { generate_local } from 'src/utils/locales'
import { apps } from './app'
import { words } from 'src/locales/ar/words'
import { sns } from './sns'


export const ar = generate_local(words, apps, sns)
