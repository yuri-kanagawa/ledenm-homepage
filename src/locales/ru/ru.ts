import { generate_local } from 'src/utils/locales'
import { words } from './words'
import { apps } from './app'
import { sns } from './sns'


export const ru = generate_local(words, apps, sns)
