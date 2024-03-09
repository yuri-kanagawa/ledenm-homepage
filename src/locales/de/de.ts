import { generate_apps } from '../utils'
import {apps} from './app'
export const de = {
  app: 'App',
  contact: 'Kontakt',
  language: 'Sprache',
  ...generate_apps(apps)
} as const
