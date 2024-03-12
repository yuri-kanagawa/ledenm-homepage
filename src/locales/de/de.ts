import { generate_local } from 'src/utils/locales'
import { apps } from './app'
import { words } from 'src/locales/de/words'
import { sns } from './sns'


export const de = generate_local(words, apps, sns)
