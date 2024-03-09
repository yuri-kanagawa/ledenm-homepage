import { generate_apps } from '../utils'
import {apps} from './app'
export const ru = {
  app: 'приложение',
  contact: 'контакт',
  language: 'язык',
  ...generate_apps(apps)
} as const
