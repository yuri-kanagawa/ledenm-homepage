import { generate_apps } from '../utils'
import {apps} from './app'
export const pt = {
  app: 'aplicativo',
  contact: 'contato',
  language: 'linguagem',
  ...generate_apps(apps)
} as const
