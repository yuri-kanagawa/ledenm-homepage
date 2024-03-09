import { generate_apps } from '../utils'
import {apps} from './app'
export const fr = {
  app: 'aplicación',
  contact: 'contacto',
  language: 'idioma',
  ...generate_apps(apps)
} as const
