import { generate_local } from 'src/utils/locales'
import { apps } from './app'
import { words } from './words'
import { sns } from './sns'


export const es = generate_local(words, apps, sns)
